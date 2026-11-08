import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import {
  appendRecord,
  buildGameRecord,
  createSessionStats,
  hasRecord,
  restoreSessionStats,
} from './gameRecord';

describe('buildGameRecord', () => {
  it('builds a record from session stats', () => {
    const stats = { ...createSessionStats(1000), successfulBrews: 3, failedBrews: 1 };
    const record = buildGameRecord({
      stats,
      difficulty: 'hard',
      score: 40,
      reason: 'lives',
      now: 61_000,
    });
    expect(record).toMatchObject({
      difficulty: 'hard',
      score: 40,
      reason: 'lives',
      durationSeconds: 60,
      successfulBrews: 3,
      failedBrews: 1,
      reactionsTriggered: 0,
    });
  });

  it('never returns negative duration or score', () => {
    const record = buildGameRecord({
      stats: createSessionStats(5000),
      difficulty: 'easy',
      score: -5,
      reason: 'time',
      now: 1000,
    });
    expect(record.durationSeconds).toBe(0);
    expect(record.score).toBe(0);
  });

  it('stores the game id and detects it in history', () => {
    const record = buildGameRecord({
      stats: createSessionStats(0),
      difficulty: 'easy',
      score: 1,
      reason: 'time',
      now: 1000,
      gameId: 'abc',
    });
    expect(record.gameId).toBe('abc');
    expect(hasRecord([record], 'abc')).toBe(true);
    expect(hasRecord([record], 'other')).toBe(false);
    expect(hasRecord([record], undefined)).toBe(false);
  });
});

describe('appendRecord', () => {
  const make = (score: number): GameRecordType =>
    buildGameRecord({
      stats: createSessionStats(0),
      difficulty: 'easy',
      score,
      reason: 'time',
      now: 1000,
    });

  it('puts the newest record first and caps history at 50', () => {
    let history: GameRecordType[] = [];
    for (let i = 1; i <= 55; i++) history = appendRecord(history, make(i));
    expect(history).toHaveLength(50);
    expect(history[0].score).toBe(55);
  });
});

describe('restoreSessionStats', () => {
  it('creates fresh stats when nothing was saved', () => {
    expect(restoreSessionStats(undefined, 5000)).toEqual(createSessionStats(5000));
  });

  it('restores counters and shifts startedAt by the saved elapsed time', () => {
    const stats = restoreSessionStats(
      { successfulBrews: 2, failedBrews: 1, reactionsTriggered: 3, elapsedMs: 60_000 },
      100_000,
    );
    expect(stats).toEqual({
      startedAt: 40_000,
      successfulBrews: 2,
      failedBrews: 1,
      reactionsTriggered: 3,
    });
  });

  it('keeps duration counting active play time after continuing', () => {
    const stats = restoreSessionStats(
      { successfulBrews: 0, failedBrews: 0, reactionsTriggered: 0, elapsedMs: 60_000 },
      100_000,
    );
    const record = buildGameRecord({
      stats,
      difficulty: 'easy',
      score: 1,
      reason: 'time',
      now: 130_000,
    });
    expect(record.durationSeconds).toBe(90);
  });
});
