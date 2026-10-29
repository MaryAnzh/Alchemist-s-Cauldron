import type { GAME_OVER_REASON, REACTION_IDS } from '@constants';
import type { KeysTemplateType } from './common';
import type { GameDifficultType } from './state';

export type DiapasonTye = [number, number];

export type RecipeType = {
  id: number;
  difficulty: GameDifficultType;
  name: string;
  temperature: DiapasonTye;
  density: DiapasonTye;
  magicPower: DiapasonTye;
};

export type IngredientType = {
  id: string;
  name: string;
  icon: string;
  temperature: number;
  density: number;
  magicPower: number;
  count?: number;
};

export type cauldronValuesType = Pick<IngredientType, 'temperature' | 'density' | 'magicPower'>;

export type ReactionId = KeysTemplateType<typeof REACTION_IDS>;

export type GameOverReasonType = 'time' | 'lives' | 'ingredients';

export type ReactionType = 'ingredients' | 'stats' | 'mix';

export type ReactionEffect = {
  timeDelta?: number;
  lifeDelta?: number;
  clearCauldron?: boolean;
};

export interface IReaction {
  id: ReactionId;
  type: ReactionType;
  isActive: (ingredients: IngredientType[], totals: cauldronValuesType) => boolean;
  applyValues: (values: cauldronValuesType) => cauldronValuesType;
  effect?: ReactionEffect;
}

export type GameOverReasonConstType = KeysTemplateType<typeof GAME_OVER_REASON>;
