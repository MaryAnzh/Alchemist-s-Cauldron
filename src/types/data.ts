import type { REACTION_IDS } from '@constants';
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
