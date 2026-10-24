import { STORAGE_KEYS, type GAME_DIFFICULT, type GAME_STATUS } from '@constants';
import type { KeysTemplateType } from './common';
import type { cauldronValuesType, IngredientType, ReactionId, RecipeType } from './data';

export type GameStatusType = KeysTemplateType<typeof GAME_STATUS>; // 'menu' | 'plating' | 'game-over' | 'paused'
export type GameDifficultType = KeysTemplateType<typeof GAME_DIFFICULT>; //"easy"|"medium"|"hard";

export type GameState = {
  playerName: string;
  status: GameStatusType;
  level: 1 | 2 | 3;
  maxLives: 3 | 5;
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

  startTimestamp: number;
  endTimestamp: number;

  // Reactions (Level 3)
  enabledReactionIds: ReactionId[];
  activeReactions: ReactionId[];
  lastReactionId: ReactionId | null;
};

export type StorageKeysType = keyof typeof STORAGE_KEYS;
