import { describe, expect, it } from 'vitest';
import type { RecipeType } from '@types';
import { seeded } from '../testUtils';
import { buildRecipeQueue, takeNextRecipe } from './recipes';

const make = (id: number, difficulty: string) => ({ id, difficulty }) as unknown as RecipeType;

const pool = [
  make(1, 'easy'),
  make(2, 'easy'),
  make(3, 'easy'),
  make(4, 'medium'),
  make(5, 'hard'),
];

describe('buildRecipeQueue', () => {
  it('contains only recipes of the chosen difficulty', () => {
    const queue = buildRecipeQueue(pool, 'easy', seeded(1));

    expect(queue.map((r) => r.id).sort()).toEqual([1, 2, 3]);
  });

  it('is empty when the difficulty has no recipes', () => {
    expect(buildRecipeQueue([make(1, 'easy')], 'hard')).toEqual([]);
  });
});

describe('takeNextRecipe', () => {
  it('takes the last recipe and returns the rest without changing the input', () => {
    const queue = [pool[0], pool[1], pool[2]];
    const { recipe, queue: rest } = takeNextRecipe(queue, pool, 'easy');

    expect(recipe).toBe(pool[2]);
    expect(rest).toEqual([pool[0], pool[1]]);
    expect(queue).toHaveLength(3);
  });

  it('refills the queue when it is empty', () => {
    const { recipe, queue } = takeNextRecipe([], pool, 'easy', seeded(2));

    expect(recipe?.difficulty).toBe('easy');
    expect(queue).toHaveLength(2);
  });

  it('uses every recipe once before repeating', () => {
    let queue: RecipeType[] = [];
    const seen: number[] = [];

    for (let i = 0; i < 3; i++) {
      const next = takeNextRecipe(queue, pool, 'easy', seeded(4));
      seen.push((next.recipe as RecipeType).id);
      queue = next.queue;
    }

    expect(seen.sort()).toEqual([1, 2, 3]);
  });

  it('returns no recipe when nothing matches', () => {
    expect(takeNextRecipe([], [make(1, 'easy')], 'hard')).toEqual({ recipe: null, queue: [] });
  });
});
