import { EventEmitter } from './events';
import { GAME_EVENTS, INGREDIENTS, RECIPES } from '@constants';
import type {
  cauldronValuesType,
  DifficultyType,
  GameStateType,
  IngredientType,
  RecipeType,
} from '@types';

type GameState = {
  playerName: string;
  status: GameStateType;
  level: 1 | 2 | 3;
  difficulty: DifficultyType;

  // HUD
  score: number;
  timeLeft: number;
  lives: number;

  // Recipe
  currentRecipe: RecipeType | null;
  recipes: RecipeType[];

  // Cauldron
  cauldronIngredients: IngredientType[];
  cauldronValues: cauldronValuesType;
  maxIngredients: number;

  // Shelf
  shelfIngredients: IngredientType[];

  // Reactions (Level 3)
  activeReactions: string[];
  lastReactionId: string | null;

  // Save system (Level 2)
  saveTimestamp: number | null;

  // Game end conditions
  isGameOver: boolean;
  outOfIngredients: boolean;
};

class Store {
  private events = new EventEmitter();
  private state: GameState = {
    playerName: 'Alchemist',
    status: 'menu',
    level: 1,
    difficulty: 'medium',

    score: 0,
    lives: 3,
    timeLeft: 0,

    currentRecipe: null,
    recipes: [],

    // Cauldron
    cauldronIngredients: [],
    cauldronValues: { density: 0, magicPower: 0, temperature: 0 },
    maxIngredients: 4,

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

  public subscribe(event: string, listener: Function) {
    this.events.on(event, listener);
  }

  private emit(event: string, payload?: unknown) {
    this.events.emit(event, payload);
  }

  private update(partial: Partial<GameState>) {
    this.state = { ...this.state, ...partial };
    this.emit(GAME_EVENTS.STATE_UPDATE, this.state);
  }

  /** main game actions */
  public startNewGame = () => {
    this.resetGameState();

    this.initShelf();
    this.pickRandomRecipe();
    this.state.status = 'playing';

    return this.getState();
  };

  resetGameState() {
    this.state = {
      ...this.state,
      score: 0,
      lives: 3,
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

  gameOver() {
    //ToDo add logic
  }

  /** Inits data */
  initShelf() {
    const count = this.state.difficulty === 'easy' ? 4 : this.state.difficulty === 'medium' ? 6 : 8;

    const shuffled = [...INGREDIENTS].sort(() => Math.random() - 0.5);
    const shelfIngredients = shuffled.slice(0, count);

    shelfIngredients.forEach((ing) => {
      ing.count = Math.floor(Math.random() * 14) + 2;
    });

    this.update({ shelfIngredients });
    this.emit(GAME_EVENTS.INGREDIENTS_CHANGED, { shelfIngredients });
  }

  pickRandomRecipe() {
    if (this.state.recipes.length === 0) {
      this.state.recipes = RECIPES.filter((r) => r.difficulty === this.state.difficulty).sort(
        () => Math.random() - 0.5,
      ) as RecipeType[];
    }
    const currentRecipe = this.state.recipes.at(-1);
    this.state.recipes.pop();

    this.update({
      currentRecipe,
    });

    this.emit(GAME_EVENTS.RECIPE_CHANGED, currentRecipe);
  }

  setTimer() {
    //Todo
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

    this.update({
      cauldronIngredients: [...this.state.cauldronIngredients, stock],
      cauldronValues: values,
    });

    this.emit(GAME_EVENTS.CAULDRON_STATE_CHANGED, values);
  }

  brewCheck() {
    const recipe = this.state.currentRecipe;
    if (!recipe) return;

    const tolerance =
      this.state.difficulty === 'easy' ? 12 : this.state.difficulty === 'medium' ? 8 : 5;

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
      this.addScore(
        this.state.difficulty === 'easy' ? 100 : this.state.difficulty === 'medium' ? 200 : 300,
      );
      //ToDo add timer reset

      this.clearCauldron();
      this.pickRandomRecipe();
      return;
    }

    // fail
    this.loseLife();
    this.clearCauldron();
  }

  loseLife() {
    const lives = this.state.lives - 1;
    if (!lives) {
      this.gameOver();
      return;
    }
    this.update({ lives });
  }

  addScore(score: number) {
    this.update({ score: this.state.score + score });
  }

  clearCauldron() {
    this.update({
      cauldronIngredients: [],
      cauldronValues: { temperature: 0, density: 0, magicPower: 0 },
    });

    this.emit(GAME_EVENTS.CAULDRON_STATE_CHANGED, this.state.cauldronValues);
  }
}

export const store = new Store();
