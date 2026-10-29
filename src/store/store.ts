import { EventEmitter } from '@utils';
import * as C from '@constants';
import type * as T from '@types';
import * as L from './logic';

import { storage } from './storage/Storage';
import { Leaderboard } from './leaderboard';

import { PlayerProfile } from './playerProfile/PlayerProfile';

class Store {
  private events = new EventEmitter<T.GameEventsPayload>();
  private timer = new L.GameTimer();
  private timerRunning = false;
  private session = L.createSessionStats(Date.now());
  private leaderboard = new Leaderboard();
  private storage: typeof storage;
  private player = new PlayerProfile();

  private state: T.GameState = {
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
  }

  /** Utils  */
  public getState = () => {
    return this.state;
  };

  public subscribe<K extends keyof T.GameEventsPayload>(
    event: K,
    listener: (payload: T.GameEventsPayload[K]) => void,
  ) {
    this.events.on(event, listener);
  }

  private emit<K extends keyof T.GameEventsPayload>(event: K, payload: T.GameEventsPayload[K]) {
    this.events.emit(event, payload);
  }

  private update(partial: Partial<T.GameState>) {
    this.state = { ...this.state, ...partial };
  }

  /** main game actions */
  public startNewGame = () => {
    this.resetGameState();
    this.session = L.createSessionStats(Date.now());

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
    if (this.state.shelfIngredients.every((ing) => !ing.count)) {
      this.gameOver('ingredients');
      return;
    }

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

  public gameOver(reason: T.GameOverReasonType = 'time') {
    const score = this.state.score;
    const wasActive = this.state.status === C.PLAYING || this.state.status === C.PAUSED;
    const isRecord = !this.player.isIncognito && this.checkLeaderboard();

    this.timer.stop();
    if (wasActive) this.recordGame(reason, score);

    this.update({ status: C.GAME_OVER });

    this.emit(C.GAME_EVENTS.GAME_OVER, { score, isRecord, reason });

    this.resetGameState();
    this.clearStorage('GAME_STATE');
  }

  private recordGame(reason: T.GameOverReasonType, score: number) {
    this.player.addRecord(
      L.buildGameRecord({
        stats: this.session,
        difficulty: this.state.difficulty,
        score,
        reason,
        now: Date.now(),
      }),
    );
  }

  public getUserName() {
    return this.player.name;
  }

  isIncognito() {
    return this.player.isIncognito;
  }

  setUserName(name: string): boolean {
    if (!this.player.setName(name)) return false;
    this.update({ playerName: this.player.name });
    this.emit(C.GAME_EVENTS.PLAYER_NAME_CHANGED, { name: this.player.name });
    return true;
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
      ) as T.RecipeType[];
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
    if (this.state.cauldronIngredients.length >= this.state.maxIngredients) return;

    stock.count = stock.count - 1;

    const ingredients = [...this.state.cauldronIngredients, stock];
    const { values, active, fired } = L.evaluateReactions(
      ingredients,
      this.state.enabledReactionIds,
      this.state.activeReactions,
    );

    this.update({
      cauldronIngredients: ingredients,
      cauldronValues: values,
      activeReactions: active,
      lastReactionId: fired.at(-1)?.id ?? this.state.lastReactionId,
    });
    this.saveGame();

    this.emit(C.GAME_EVENTS.CAULDRON_STATE_CHANGED, { values });
    if (ingredients.length === this.state.maxIngredients) {
      this.emit(C.GAME_EVENTS.SHELF_BLOCK, { isBlock: true });
    }
    this.emit(C.GAME_EVENTS.INGREDIENT_IN_CAULDRON, ingredients.length);
    this.emit(C.GAME_EVENTS.INGREDIENT_COUNT, { id, count: stock.count });

    this.applyReactionEffects(fired);
  }

  private applyReactionEffects(fired: T.IReaction[]) {
    if (!fired.length) return;
    this.session.reactionsTriggered += fired.length;

    fired.forEach(({ id }) =>
      this.emit(C.GAME_EVENTS.REACTION_FIRED, { id, name: L.getReactionName(id) }),
    );

    const lifeLoss = fired.reduce((sum, r) => sum - (r.effect?.lifeDelta ?? 0), 0);
    const timeDelta = fired.reduce((sum, r) => sum + (r.effect?.timeDelta ?? 0), 0);
    const shouldClear = fired.some((r) => r.effect?.clearCauldron);

    for (let i = 0; i < lifeLoss; i++) this.loseLife();
    if (this.state.lives <= 0) {
      this.gameOver('lives');
      return;
    }

    if (shouldClear) {
      this.clearCauldron();
      this.emit(C.GAME_EVENTS.SHELF_BLOCK, { isBlock: false });
      this.emit(C.GAME_EVENTS.INGREDIENT_IN_CAULDRON, 0);
    }

    if (timeDelta) this.shiftTime(timeDelta);
    this.saveGame();
  }

  // Сдвигает таймер на delta секунд; false, если время вышло
  private shiftTime(delta: number): boolean {
    const remaining = Math.max(0, Math.floor((this.state.endTimestamp - Date.now()) / 1000));
    const timeLeft = remaining + delta;

    if (timeLeft <= 0) {
      this.update({ timeLeft: 0 });
      this.emit(C.GAME_EVENTS.TIMER_TICK, 0);
      this.gameOver('time');
      return false;
    }

    this.timer.stop();
    this.update({ timeLeft, endTimestamp: Date.now() + timeLeft * 1000 });
    this.emit(C.GAME_EVENTS.TIMER_TICK, timeLeft);
    this.timer.start(
      timeLeft,
      (left) => {
        const timeChanged = left !== this.state.timeLeft;
        this.update({ timeLeft: left });
        this.emit(C.GAME_EVENTS.TIMER_TICK, left);
        if (timeChanged) this.saveGame();
      },
      () => this.gameOver(),
    );
    this.saveGame();
    return true;
  }

  brewCheck() {
    if (this.state.status !== C.PLAYING || !this.state.cauldronIngredients.length) return;

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

      this.session.successfulBrews++;
      this.roundOver('success');
      return;
    }

    // fail
    this.session.failedBrews++;
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
      activeReactions: [],
    });
    this.emit(C.GAME_EVENTS.CAULDRON_STATE_CHANGED, { values: this.state.cauldronValues });
    this.emit(C.GAME_EVENTS.INGREDIENT_IN_CAULDRON, 0);
  }

  pourOut() {
    if (this.state.status !== C.PLAYING || !this.state.cauldronIngredients.length) return;

    this.clearCauldron();
    this.emit(C.GAME_EVENTS.SHELF_BLOCK, { isBlock: false });
    this.emit(C.GAME_EVENTS.INGREDIENT_IN_CAULDRON, 0);
    this.shiftTime(-C.POUR_OUT_PENALTY);
  }

  saveToStorage(key: T.StorageKeysType, state: T.GameState | T.LeaderboardStorageType): void {
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

  public loadFromStorage(key: T.StorageKeysType) {
    const saved = storage.load(key);
    if (!saved) {
      if (this.storage.hasSave(key)) {
        this.clearStorage(key);
      }
      return null;
    }

    if (key === 'GAME_STATE') {
      const Validate = L.ValidateState(saved);
      if (!Validate) {
        this.storage.clear('GAME_STATE');
        return null;
      }
      return saved as T.GameState;
    }
    return null;
  }

  private clearStorage(key: T.StorageKeysType) {
    storage.clear(key);
  }

  /** leaderboard-related methods */
  checkLeaderboard(): boolean {
    return this.leaderboard.isRecord(this.state.difficulty, this.state.score);
  }

  public submitScore(name: string, score: number) {
    this.setToLeaderboard({ name, score, date: new Date() });
  }

  public setToLeaderboard(row: T.LeaderboardRowType) {
    this.emit(C.GAME_EVENTS.SHOW_LEADERBOARD, this.leaderboard.add(this.state.difficulty, row));
  }

  public clearLeaderboard() {
    this.emit(C.GAME_EVENTS.SHOW_LEADERBOARD, this.leaderboard.clear());
  }

  public showLeaderboard() {
    this.emit(C.GAME_EVENTS.SHOW_LEADERBOARD, this.leaderboard.reload());
  }

  public showRules() {
    this.emit(C.GAME_EVENTS.SHOW_RULES, true);
  }

  public changeDifficulty = (difficulty: T.GameDifficultType) => {
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
    const savedState = this.loadFromStorage('GAME_STATE') as T.GameState;
    if (!savedState) return;
    this.session = L.createSessionStats(Date.now());

    this.timer.stop();
    this.timerRunning = false;
    this.update({
      ...(savedState as T.GameState),
      endTimestamp: Date.now() + savedState.timeLeft * 1000,
    });
    this.emit(C.GAME_EVENTS.GAME_START, this.state);
    this.pauseGame();
  }

  public exitToMenu() {
    this.timer.stop();
    this.resetGameState();
    this.clearStorage('GAME_STATE');
    this.emit(C.GAME_EVENTS.MENU_SHOWN, true);
  }

  public requestNameDialog() {
    if (this.state.status !== C.MENU) return;
    this.emit(C.GAME_EVENTS.OPEN_NAME_DIALOG, true);
  }
}

export const store = new Store();
