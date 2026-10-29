import type { IngredientType } from '@types';
import { randomInt, shuffle, type Rng } from './random';

export const STOCK_MIN = 2;
export const STOCK_MAX = 15;

export const buildShelf = (
  ingredients: readonly IngredientType[],
  size: number,
  rng: Rng = Math.random,
): IngredientType[] =>
  shuffle(ingredients, rng)
    .slice(0, size)
    .map((ingredient) => ({ ...ingredient, count: randomInt(STOCK_MIN, STOCK_MAX, rng) }));
