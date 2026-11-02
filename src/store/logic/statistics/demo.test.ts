import { describe, expect, it } from 'vitest';
import { buildDemoHistory } from './demo';
import { SCORE } from '@constants';

const NOW = Date.UTC(2026, 0, 15, 12);
const DAY_MS = 24 * 60 * 60 * 1000;

const seeded = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647;
};

describe('buildDemoHistory', () => {
  it('is deterministic for the same random sequence', () => {
    expect(buildDemoHistory(NOW, seeded(42))).toEqual(buildDemoHistory(NOW, seeded(42)));
  });

  it('keeps games newest first and never in the future', () => {
    const times = buildDemoHistory(NOW, seeded(7)).map((r) => r.playedAt);
    expect(times).toEqual([...times].sort((a, b) => b - a));
    expect(Math.max(...times)).toBeLessThanOrEqual(NOW);
  });

  it('covers no more than two weeks', () => {
    buildDemoHistory(NOW, seeded(7)).forEach((r) => {
      expect(NOW - r.playedAt).toBeLessThan(14 * DAY_MS);
    });
  });

  it('produces plausible values', () => {
    buildDemoHistory(NOW, seeded(3)).forEach((r) => {
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.durationSeconds).toBeGreaterThan(0);
    });
  });

  it('creates the maximum number of games when every roll is high', () => {
    expect(buildDemoHistory(NOW, () => 0.999)).toHaveLength(14 * 3);
  });

  it('derives the score from successful brews and difficulty', () => {
    buildDemoHistory(NOW, seeded(11)).forEach((r) => {
      expect(r.score).toBe(r.successfulBrews * SCORE[r.difficulty]);
    });
  });
});
