import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import { buildDifficultyBreakdown } from './difficulty';

const record = (difficulty: GameRecordType['difficulty']) => ({ difficulty }) as GameRecordType;

describe('buildDifficultyBreakdown', () => {
  it('returns zeros for empty history', () => {
    expect(buildDifficultyBreakdown([])).toEqual([
      { difficulty: 'easy', games: 0, share: 0 },
      { difficulty: 'medium', games: 0, share: 0 },
      { difficulty: 'hard', games: 0, share: 0 },
    ]);
  });

  it('counts games and shares per level', () => {
    const result = buildDifficultyBreakdown([
      record('easy'),
      record('easy'),
      record('hard'),
      record('medium'),
    ]);
    expect(result).toEqual([
      { difficulty: 'easy', games: 2, share: 0.5 },
      { difficulty: 'medium', games: 1, share: 0.25 },
      { difficulty: 'hard', games: 1, share: 0.25 },
    ]);
  });
});
