import { describe, expect, it } from 'vitest';
import type { IngredientType } from '@types';
import { seeded } from '../testUtils';
import { buildShelf, STOCK_MAX, STOCK_MIN } from './shelf';

const pool = Array.from({ length: 8 }, (_, i) => ({
  id: `ing-${i}`,
  name: `Ingredient ${i}`,
  count: 0,
})) as unknown as IngredientType[];

describe('buildShelf', () => {
  it('returns the requested number of unique ingredients', () => {
    const shelf = buildShelf(pool, 4, seeded(3));

    expect(shelf).toHaveLength(4);
    expect(new Set(shelf.map((i) => i.id)).size).toBe(4);
  });

  it('keeps every stock within the allowed range', () => {
    for (let seed = 0; seed < 50; seed++) {
      buildShelf(pool, 6, seeded(seed)).forEach(({ count }) => {
        expect(count).toBeGreaterThanOrEqual(STOCK_MIN);
        expect(count).toBeLessThanOrEqual(STOCK_MAX);
      });
    }
  });

  it('copies ingredients instead of changing the source', () => {
    const shelf = buildShelf(pool, 8, seeded(5));

    expect(pool.every(({ count }) => count === 0)).toBe(true);
    expect(shelf.some((item) => pool.includes(item))).toBe(false);
  });

  it('returns the whole pool when the size is bigger', () => {
    expect(buildShelf(pool, 20, seeded(1))).toHaveLength(8);
  });

  it('does not always pick the same ingredients', () => {
    const picks = new Set(
      Array.from({ length: 20 }, (_, seed) =>
        buildShelf(pool, 4, seeded(seed))
          .map((i) => i.id)
          .join(),
      ),
    );
    expect(picks.size).toBeGreaterThan(1);
  });
});
