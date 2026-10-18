import type { GAME_DIFFICULT, GAME_STATUS } from '@constants';
import type { KeysTemplateType } from './common';
import type { cauldronValuesType, IngredientType, RecipeType } from './data';

export type GameStatusType = KeysTemplateType<typeof GAME_STATUS>;
export type GameDifficultType = KeysTemplateType<typeof GAME_DIFFICULT>;

export type GameState = {
  playerName: string;
  status: GameStatusType;
  level: 1 | 2 | 3;
  maxLives: 3 | 4;
  difficulty: GameDifficultType;

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
