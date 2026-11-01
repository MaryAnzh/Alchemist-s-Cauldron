import { describe, expect, it } from 'vitest';
import { randomInt, shuffle } from './random';
import { seeded } from '../testUtils';

describe('shuffle', () => {
  it('keeps all items and does not change the source', () => {
    const source = [1, 2, 3, 4, 5];
    const result = shuffle(source, seeded(1));

    expect(source).toEqual([1, 2, 3, 4, 5]);
    expect([...result].sort()).toEqual(source);
  });

  it('is deterministic for the same generator', () => {
    expect(shuffle([1, 2, 3, 4, 5], seeded(7))).toEqual(shuffle([1, 2, 3, 4, 5], seeded(7)));
  });

  it('follows the generator (exact result for a constant 0)', () => {
    expect(shuffle([1, 2, 3], () => 0)).toEqual([2, 3, 1]);
  });

  it('handles empty and single-item arrays', () => {
    expect(shuffle([])).toEqual([]);
    expect(shuffle([1])).toEqual([1]);
  });
});

describe('randomInt', () => {
  it('returns both bounds', () => {
    expect(randomInt(2, 15, () => 0)).toBe(2);
    expect(randomInt(2, 15, () => 0.999999)).toBe(15);
  });
});
