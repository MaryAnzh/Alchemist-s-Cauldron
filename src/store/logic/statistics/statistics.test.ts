import { describe, expect, it } from 'vitest';
import { EMPTY_STATISTICS } from '@constants';
import type { GameRecordType } from '@types';
import {
  buildStatistics,
  filterHistoryByDifficulty,
  formatDuration,
  getRecentHistory,
} from './statistics';

const make = (overrides: Partial<GameRecordType> = {}): GameRecordType => ({
  playedAt: 1000,
  difficulty: 'easy',
  score: 10,
  reason: 'time',
  durationSeconds: 60,
  successfulBrews: 1,
  failedBrews: 0,
  reactionsTriggered: 0,
  ...overrides,
});

describe('buildStatistics', () => {
  it('returns zeros for an empty history', () => {
    expect(buildStatistics([])).toEqual({ ...EMPTY_STATISTICS });
  });

  it('returns the record values for a single game', () => {
    const stats = buildStatistics([make({ score: 30, durationSeconds: 90, failedBrews: 2 })]);
    expect(stats).toMatchObject({
      gamesPlayed: 1,
      bestScore: 30,
      averageScore: 30,
      averageDurationSeconds: 90,
      failedBrews: 2,
    });
  });

  it('aggregates several games', () => {
    const stats = buildStatistics([
      make({ score: 10, durationSeconds: 60, successfulBrews: 2 }),
      make({ score: 40, durationSeconds: 120, successfulBrews: 3, reactionsTriggered: 1 }),
    ]);
    expect(stats).toEqual({
      gamesPlayed: 2,
      bestScore: 40,
      averageScore: 25,
      totalDurationSeconds: 180,
      averageDurationSeconds: 90,
      successfulBrews: 5,
      failedBrews: 0,
      reactionsTriggered: 1,
    });
  });
});

describe('getRecentHistory', () => {
  const history = [make({ score: 3 }), make({ score: 2 }), make({ score: 1 })];

  it('returns the first N records', () => {
    expect(getRecentHistory(history, 2).map((r) => r.score)).toEqual([3, 2]);
  });

  it('returns an empty list for a zero or negative limit', () => {
    expect(getRecentHistory(history, 0)).toEqual([]);
    expect(getRecentHistory(history, -1)).toEqual([]);
  });
});

describe('filterHistoryByDifficulty', () => {
  const history = [
    make({ difficulty: 'easy' }),
    make({ difficulty: 'hard' }),
    make({ difficulty: 'easy' }),
  ];

  it('returns everything for "all"', () => {
    expect(filterHistoryByDifficulty(history, 'all')).toHaveLength(3);
  });

  it('keeps only the chosen difficulty', () => {
    expect(filterHistoryByDifficulty(history, 'easy')).toHaveLength(2);
    expect(filterHistoryByDifficulty(history, 'medium')).toEqual([]);
  });
});

describe('formatDuration', () => {
  it('formats seconds and minutes', () => {
    expect(formatDuration(0)).toBe('0m 0s');
    expect(formatDuration(75)).toBe('1m 15s');
  });

  it('switches to hours and never goes negative', () => {
    expect(formatDuration(3700)).toBe('1h 1m');
    expect(formatDuration(-5)).toBe('0m 0s');
  });
});
