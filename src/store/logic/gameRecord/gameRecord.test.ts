import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import { appendRecord, buildGameRecord, createSessionStats } from './gameRecord';

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
