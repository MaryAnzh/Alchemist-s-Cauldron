import { EventEmitter } from './events';
import * as C from '@constants';
import type {
  GameEventsPayload,
  GameState,
  RecipeType,
  LeaderboardRowType,
  StorageKeysType,
  GameDifficultType,
  LeaderboardStorageType,
  GameOverReasonType,
} from '@types';

import { GameTimer } from './logic/timer';
import { storage } from './storage/Storage';
import { ValidateLeaderboard, ValidateState } from './logic/validate';

class Store {
  private events = new EventEmitter<GameEventsPayload>();
  private timer = new GameTimer();
  private timerRunning = false;
  private leaderBoard: LeaderboardStorageType = { easy: [], medium: [], hard: [] };
  private storage: typeof storage;

  private state: GameState = {
    playerName: 'Alchemist',
    status: C.MENU,
    level: 1,
    difficulty: C.MEDIUM,

    score: 0,
    lives: C.LIVES.medium,
    maxLives: C.LIVES.medium,
    timeLeft: 0,

    currentRecipe: null,
    recipes: [],

    // Cauldron
    cauldronIngredients: [],
    cauldronValues: { density: 0, magicPower: 0, temperature: 0 },
    maxIngredients: C.MAX_INGREDIENTS.medium,

    // Shelf
    shelfIngredients: [],

    // Reactions (Level 3)
    enabledReactionIds: [...C.REACTION_IDS_BY_DIFFICULTY.medium],
    activeReactions: [],
    lastReactionId: null,

    startTimestamp: 0,
    endTimestamp: 0,
  };

  constructor() {
    this.storage = storage;
    const leaderBoard = this.storage.load('LEADERBOARD') as LeaderboardStorageType | null;
    if (leaderBoard) {
      this.leaderBoard = leaderBoard;
    }
  }

  /** Utils  */
  public getState = () => {
    return this.state;
  };

  public subscribe<K extends keyof GameEventsPayload>(
    event: K,
    listener: (payload: GameEventsPayload[K]) => void,
  ) {
    this.events.on(event, listener);
  }

  private emit<K extends keyof GameEventsPayload>(event: K, payload: GameEventsPayload[K]) {
    this.events.emit(event, payload);
  }

  private update(partial: Partial<GameState>) {
    this.state = { ...this.state, ...partial };
  }

  /** main game actions */
  public startNewGame = () => {
    this.resetGameState();

    this.initShelf();
    this.pickRandomRecipe();
    this.state.status = C.PLAYING;
    this.setTimer();
    this.saveGame();

    this.emit(C.GAME_EVENTS.GAME_START, this.state);
  };

  pauseGame() {
    const remaining = this.timerRunning
      ? Math.max(0, Math.floor((this.state.endTimestamp - Date.now()) / 1000))
      : this.state.timeLeft;
    this.timer.stop();
    this.timerRunning = false;

    this.update({
      status: C.PAUSED,
      timeLeft: remaining,
    });

    this.saveGame();

    this.emit(C.GAME_EVENTS.PAUSE, { auto: false });
  }

  resumeGame() {
    this.update({ status: C.PLAYING });

    const newEnd = Date.now() + this.state.timeLeft * 1000;

    this.update({ endTimestamp: newEnd });

    this.timer.start(
      this.state.timeLeft,
      (remaining) => {
        const timeChanged = remaining !== this.state.timeLeft;
        this.update({ timeLeft: remaining });
        this.emit(C.GAME_EVENTS.TIMER_TICK, remaining);
        if (timeChanged) this.saveGame();
      },
      () => this.gameOver(),
    );
    this.timerRunning = true;
    this.saveGame();
    this.emit(C.GAME_EVENTS.RESUME, this.state);
  }

  resetGameState() {
    this.timer.stop();
    this.timerRunning = false;
    this.state = {
      ...this.state,
      status: C.MENU,
      score: 0,
      lives: C.LIVES[this.state.difficulty],
      timeLeft: 0,
      currentRecipe: null,
      recipes: [],
      cauldronIngredients: [],
      cauldronValues: { density: 0, magicPower: 0, temperature: 0 },
      shelfIngredients: [],
      enabledReactionIds: [...C.REACTION_IDS_BY_DIFFICULTY[this.state.difficulty]],
      activeReactions: [],
      lastReactionId: null,
    };
  }

  roundOver(variant: 'success' | 'fail') {
    this.timer.stop();
    this.timerRunning = false;
    this.saveGame();
    this.emit(C.GAME_EVENTS.ROUND_OVER, {
      score: this.state.score,
      lives: this.state.lives,
      time: this.state.timeLeft,
      variant,
    });
  }

  public newRound() {
    const newEnd = Date.now() + this.state.timeLeft * 1000;
    this.update({ endTimestamp: newEnd });

    this.timer.start(
      this.state.timeLeft,
      (remaining) => {
        const timeChanged = remaining !== this.state.timeLeft;
        this.update({ timeLeft: remaining });
        this.emit(C.GAME_EVENTS.TIMER_TICK, remaining);
        if (timeChanged) this.saveGame();
      },
      () => this.gameOver(),
    );
    this.timerRunning = true;

    this.emit(C.GAME_EVENTS.SHELF_BLOCK, { isBlock: false });
    this.pickRandomRecipe();
    this.clearCauldron();
    if (this.state.shelfIngredients.every((ing) => !ing.count)) {
      this.gameOver('ingredients');
      return;
    }

    this.emit(C.GAME_EVENTS.ROUND_START, { isStart: true });
    this.saveGame();
  }

  public gameOver(reason: GameOverReasonType = 'time') {
    const score = this.state.score;
    const isRecord = this.checkLeaderboard();

    this.timer.stop();

    this.update({ status: C.GAME_OVER });

    this.emit(C.GAME_EVENTS.GAME_OVER, { score, isRecord, reason });

    this.resetGameState();
    this.clearStorage('GAME_STATE');
  }

  /** Inits data */
  initShelf() {
    const count = C.SHELF_SIZE[this.state.difficulty];

    const shuffled = C.INGREDIENTS.map((ing) => ({ ...ing }));
    const shelfIngredients = shuffled.slice(0, count);

    shelfIngredients.forEach((ing) => {
      ing.count = Math.floor(Math.random() * 14) + 2;
    });

    this.update({ shelfIngredients });
  }

  pickRandomRecipe() {
    if (this.state.recipes.length === 0) {
      this.state.recipes = C.RECIPES.filter((r) => r.difficulty === this.state.difficulty).sort(
        () => Math.random() - 0.5,
      ) as RecipeType[];
    }
    const currentRecipe = this.state.recipes.at(-1);
    this.state.recipes.pop();
    if (!currentRecipe) {
      return;
    }

    this.update({
      currentRecipe,
    });
    this.emit(C.GAME_EVENTS.RECIPE_CHANGED, { recipe: currentRecipe, ingInCauldron: 0 });
  }

  setTimer() {
    const difficulty = this.state.difficulty;

    const initialTime = C.TIMER[difficulty].gameTime;

    const now = Date.now();
    const end = now + initialTime * 1000;

    this.update({
      startTimestamp: now,
      endTimestamp: end,
      timeLeft: initialTime,
    });

    this.timer.start(
      initialTime,
      (remaining) => {
        const timeChanged = remaining !== this.state.timeLeft;
        this.update({ timeLeft: remaining });
        this.emit(C.GAME_EVENTS.TIMER_TICK, remaining);
        if (timeChanged) this.saveGame();
      },
      () => this.gameOver(),
    );
    this.timerRunning = true;
  }

  /** Games Actions */
  addIngredientToCauldron(id: string) {
    const stock = this.state.shelfIngredients.find((ing) => ing.id === id);
    if (!stock || !stock.count) return;
    stock.count = stock.count - 1;

    const values = {
      temperature: stock.temperature + this.state.cauldronValues.temperature,
      density: stock.density + this.state.cauldronValues.density,
      magicPower: stock.magicPower + this.state.cauldronValues.magicPower,
    };
    const ingredients = [...this.state.cauldronIngredients, stock];

    this.update({
      cauldronIngredients: ingredients,
      cauldronValues: values,
    });
    this.saveGame();

    this.emit(C.GAME_EVENTS.CAULDRON_STATE_CHANGED, { values });
    if (ingredients.length === this.state.maxIngredients) {
      this.emit(C.GAME_EVENTS.SHELF_BLOCK, { isBlock: true });
    }
    this.emit(C.GAME_EVENTS.INGREDIENT_IN_CAULDRON, ingredients.length);
    this.emit(C.GAME_EVENTS.INGREDIENT_COUNT, { id, count: stock.count });
  }

  brewCheck() {
    const recipe = this.state.currentRecipe;
    if (!recipe) return;

    const difficulty = this.state.difficulty;
    const tolerance = C.TOLERANCE[difficulty];

    const { temperature, density, magicPower } = this.state.cauldronValues;

    const inRange = (value: number, range: { min: number; max: number }) =>
      value >= range.min - tolerance && value <= range.max + tolerance;

    const success =
      inRange(temperature, {
        min: recipe.temperature.at(0) ?? 0,
        max: recipe.temperature.at(1) ?? 0,
      }) &&
      inRange(density, {
        min: recipe.density.at(0) ?? 0,
        max: recipe.density.at(1) ?? 0,
      }) &&
      inRange(magicPower, {
        min: recipe.magicPower.at(0) ?? 0,
        max: recipe.magicPower.at(1) ?? 0,
      });

    if (success) {
      const timeLeft = Math.min(
        C.TIMER[difficulty].gameTime,
        C.TIMER[difficulty].bonus + this.state.timeLeft,
      );

      const score = C.SCORE[difficulty] + this.state.score;

      this.update({ timeLeft, score });
      this.emit(C.GAME_EVENTS.TIMER_TICK, timeLeft);
      this.emit(C.GAME_EVENTS.SCORE_CHANGE, score);

      this.roundOver('success');
      return;
    }

    // fail
    this.loseLife();

    if (this.state.lives > 0) {
      this.roundOver('fail');
    }
    if (this.state.lives === 0) {
      this.gameOver('lives');
    }
  }

  loseLife() {
    const lives = this.state.lives - 1;
    this.update({ lives });
    this.emit(C.GAME_EVENTS.LIVES_CHANGE, { lives });
  }

  clearCauldron() {
    this.update({
      cauldronIngredients: [],
      cauldronValues: { temperature: 0, density: 0, magicPower: 0 },
    });

    this.emit(C.GAME_EVENTS.CAULDRON_STATE_CHANGED, { values: this.state.cauldronValues });
  }

  saveToStorage(key: StorageKeysType, state: GameState | LeaderboardStorageType): void {
    storage.save(key, state);
  }

  public saveGame() {
    const { status, endTimestamp, timeLeft } = this.state;
    if (status !== C.PLAYING && status !== C.PAUSED) return;

    const remaining =
      status === C.PLAYING && this.timerRunning
        ? Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000))
        : timeLeft;

    this.saveToStorage('GAME_STATE', { ...this.state, timeLeft: remaining });
  }

  public loadFromStorage(key: StorageKeysType) {
    const saved = storage.load(key);
    if (!saved) {
      if (this.storage.hasSave(key)) {
        this.clearStorage(key);
      }
      return null;
    }

    if (key === 'GAME_STATE') {
      const Validate = ValidateState(saved);
      if (!Validate) {
        this.storage.clear('GAME_STATE');
        return null;
      }
      return saved as GameState;
    }
    if (key === 'LEADERBOARD') {
      const Validate = ValidateLeaderboard(saved as LeaderboardStorageType);
      if (!Validate) {
        this.storage.clear('LEADERBOARD');
        return null;
      }

      return saved as LeaderboardStorageType;
    }
    return null;
  }

  private clearStorage(key: StorageKeysType) {
    storage.clear(key);
  }

  checkLeaderboard(): boolean {
    const score = this.state.score;
    if (score <= 0) return false;

    const current = this.leaderBoard[this.state.difficulty];
    if (current.length < 10) return true;

    const minTopScore = current.at(-1)?.score ?? 0;
    return score >= minTopScore;
  }

  public submitScore(name: string) {
    const score = this.state.score;
    const date = new Date();

    this.setToLeaderboard({ name, score, date });
  }

  public setToLeaderboard({ name, score, date }: LeaderboardRowType) {
    this.leaderBoard[this.state.difficulty].push({ name, score, date });

    this.leaderBoard[this.state.difficulty].sort((a, b) => b.score - a.score);

    if (this.leaderBoard[this.state.difficulty].length > 10) {
      this.leaderBoard[this.state.difficulty] = this.leaderBoard[this.state.difficulty].slice(
        0,
        10,
      );
    }

    this.saveToStorage('LEADERBOARD', this.leaderBoard);
    this.emit(C.GAME_EVENTS.SHOW_LEADERBOARD, this.leaderBoard);
  }

  public clearLeaderboard() {
    this.leaderBoard = { easy: [], medium: [], hard: [] };

    this.saveToStorage('LEADERBOARD', this.leaderBoard);
    this.emit(C.GAME_EVENTS.SHOW_LEADERBOARD, this.leaderBoard);
  }

  public showLeaderboard() {
    const leaderboard = this.loadFromStorage('LEADERBOARD');
    if (leaderboard) {
      this.leaderBoard = leaderboard as LeaderboardStorageType;
    }

    this.emit(C.GAME_EVENTS.SHOW_LEADERBOARD, this.leaderBoard);
  }

  public showRules() {
    this.emit(C.GAME_EVENTS.SHOW_RULES, true);
  }

  public changeDifficulty = (difficulty: GameDifficultType) => {
    if (this.state.status === C.MENU) {
      this.update({
        difficulty,
        lives: C.LIVES[difficulty],
        maxLives: C.LIVES[difficulty],
        maxIngredients: C.MAX_INGREDIENTS[difficulty],
      });
    }
  };

  public continueLastGame() {
    const savedState = this.loadFromStorage('GAME_STATE') as GameState;
    if (!savedState) return;

    this.timer.stop();
    this.timerRunning = false;
    this.update({
      ...(savedState as GameState),
      endTimestamp: Date.now() + savedState.timeLeft * 1000,
    });
    this.emit(C.GAME_EVENTS.GAME_START, this.state);
    this.pauseGame();
  }

  public exitToMenu() {
    this.timer.stop();
    this.resetGameState();
    this.clearStorage('GAME_STATE');
  }
}

export const store = new Store();
