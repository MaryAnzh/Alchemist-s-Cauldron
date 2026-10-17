import { EventEmitter } from './events';
import * as C from '@constants';
import type { GameEventsPayload, GameState, RecipeType } from '@types';
import { GameTimer } from './logic/timer';

class Store {
  private events = new EventEmitter<GameEventsPayload>();
  private timer = new GameTimer();

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

    // Save system (Level 2)
    saveTimestamp: null,

    // Game end conditions
    isGameOver: false,
    outOfIngredients: false,
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
  }

  resumeGame() {
    this.update({ status: 'playing' });
    this.timer.resume(
      (time) => {
        this.update({ timeLeft: time });
        this.emit(C.GAME_EVENTS.TIMER_TICK, time);
      },
      () => this.gameOver(),
      this.state.timeLeft,
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
      isGameOver: false,
      outOfIngredients: false,
    };
  }

  roundOver() {
    this.emit(C.GAME_EVENTS.SHELF_BLOCK, { isBlock: false });
    this.clearCauldron();
  }

  gameOver() {
    this.update({ status: C.GAME_OVER });
    this.resetGameState();
    this.emit(C.GAME_EVENTS.GAME_OVER, { isOver: true });
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

    this.update({ timeLeft: initialTime });

    this.timer.start(
      initialTime,
      (time) => {
        this.update({ timeLeft: time });
        this.emit(C.GAME_EVENTS.TIMER_TICK, time);
      },
      () => {
        this.gameOver();
      },
    );
  }

  /** Games Actions */
  addIngredientToCauldron(id: string) {
    const stock = this.state.shelfIngredients.find((ing) => ing.id === id);
    if (!stock || !stock.count) return;

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

      this.roundOver();
      return;
    }

    // fail
    this.loseLife();
    this.roundOver();
  }

  loseLife() {
    const lives = this.state.lives - 1;
    if (!lives) {
      this.gameOver();
      return;
    }
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
}

export const store = new Store();
