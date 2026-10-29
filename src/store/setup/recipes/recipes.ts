import type { GameDifficultType, RecipeType } from '@types';
import { shuffle, type Rng } from '../random/random';

export const buildRecipeQueue = (
  pool: readonly RecipeType[],
  difficulty: GameDifficultType,
  rng: Rng = Math.random,
): RecipeType[] =>
  shuffle(
    pool.filter((recipe) => recipe.difficulty === difficulty),
    rng,
  );

type NextRecipe = { recipe: RecipeType | null; queue: RecipeType[] };

// Takes the last recipe of the queue; refills the queue when it is empty
export const takeNextRecipe = (
  queue: readonly RecipeType[],
  pool: readonly RecipeType[],
  difficulty: GameDifficultType,
  rng: Rng = Math.random,
): NextRecipe => {
  const source = queue.length > 0 ? queue : buildRecipeQueue(pool, difficulty, rng);
  const recipe = source.at(-1) ?? null;

  return { recipe, queue: source.slice(0, -1) };
};
