import { EventEmitter } from './events';
import * as C from '@constants';
import type {
  GameEventsPayload,
  GameState,
  RecipeType,
  LeaderboardRowType,
  StorageKeysType,
} from '@types';

import { GameTimer } from './logic/timer';
import { storage } from './storage/Storage';

class Store {
  private events = new EventEmitter<GameEventsPayload>();
  private timer = new GameTimer();
  private leaderBoard: LeaderboardRowType[] = [];

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
    activeReactions: [],
    lastReactionId: null,

    startTimestamp: 0,
    endTimestamp: 0,
  };

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

    return this.getState();
  };

  pauseGame() {
    this.timer.stop();
    this.update({ status: C.PAUSED });
    this.emit(C.GAME_EVENTS.PAUSE, true);

    const remaining = Math.max(0, Math.floor((this.state.endTimestamp - Date.now()) / 1000));

    this.update({ timeLeft: remaining });
    this.timer.stop();
    this.update({ status: C.PAUSED });

    this.saveToStorage('GAME_STATE', this.state);
  }

  resumeGame() {
    this.update({ status: C.PLAYING });

    const newEnd = Date.now() + this.state.timeLeft * 1000;

    this.update({ endTimestamp: newEnd, status: C.PLAYING });

    this.timer.start(
      this.state.timeLeft,
      (remaining) => {
        this.update({ timeLeft: remaining });
        this.emit(C.GAME_EVENTS.TIMER_TICK, remaining);
      },
      () => this.gameOver(),
    );
  }

  resetGameState() {
    this.state = {
      ...this.state,
      score: 0,
      lives: C.LIVES[this.state.difficulty],
      timeLeft: 0,
      currentRecipe: null,
      cauldronIngredients: [],
      cauldronValues: { density: 0, magicPower: 0, temperature: 0 },
      shelfIngredients: [],
      activeReactions: [],
      lastReactionId: null,
    };
  }

  roundOver(variant: 'success' | 'fail') {
    this.timer.stop();
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
        this.update({ timeLeft: remaining });
        this.emit(C.GAME_EVENTS.TIMER_TICK, remaining);
      },
      () => this.gameOver(),
    );

    this.emit(C.GAME_EVENTS.SHELF_BLOCK, { isBlock: false });
    this.pickRandomRecipe();
    this.clearCauldron();
    this.emit(C.GAME_EVENTS.ROUND_START, { isStart: true });
  }

  public gameOver() {
    this.update({ status: C.GAME_OVER });
    this.resetGameState();
    this.clearStorage('GAME_STATE');
    this.emit(C.GAME_EVENTS.GAME_OVER, { isOver: true });
  }

  public continueGame() {
    const saved = this.loadFromStorage('GAME_STATE');
    if (!saved) return;

    this.state = saved as GameState;
    this.update({ status: C.PLAYING });

    const remaining = Math.max(
      0,
      Math.floor(((saved as GameState).endTimestamp - Date.now()) / 1000),
    );

    this.update({ timeLeft: remaining });
    this.resumeGame();
    this.emit(C.GAME_EVENTS.RESUME, this.state);
  }

  /** Inits data */
  initShelf() {
    const count = C.SHELF_SIZE[this.state.difficulty];

    const shuffled = [...C.INGREDIENTS];
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
        this.update({ timeLeft: remaining });
        this.emit(C.GAME_EVENTS.TIMER_TICK, remaining);
      },
      () => this.gameOver(),
    );
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
      const timeLeft = C.TIMER[difficulty].bonus + this.state.timeLeft;

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
      this.gameOver();
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

  saveToStorage(key: StorageKeysType, state: GameState | LeaderboardRowType[]): void {
    storage.save(key, state);
  }

  public loadFromStorage(key: StorageKeysType) {
    const saved = storage.load(key);
    if (!saved) return null;
    if (key === 'GAME_STATE') {
      this.state = saved as GameState;
      return this.state;
    }
    if (key === 'LEADERBOARD') {
      this.leaderBoard = saved as LeaderboardRowType[];
      return this.leaderBoard;
    }
    return null;
  }

  private clearStorage(key: StorageKeysType) {
    storage.clear(key);
  }
}

export const store = new Store();
