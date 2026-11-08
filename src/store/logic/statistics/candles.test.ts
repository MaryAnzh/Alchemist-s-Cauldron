import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import { buildCandles, CANDLE_DAYS } from './candles';

const game = (playedAt: number, score: number) => ({ playedAt, score }) as GameRecordType;
const at = (day: number, hour: number) => new Date(2026, 0, day, hour).getTime();

describe('buildCandles', () => {
  it('returns no candles for empty history', () => {
    expect(buildCandles([])).toEqual([]);
  });

  it('builds open, close, high and low per local day in time order', () => {
    const candles = buildCandles([
      game(at(2, 20), 300),
      game(at(1, 18), 200),
      game(at(1, 9), 100),
      game(at(1, 12), 500),
    ]);

    expect(candles).toEqual([
      { day: new Date(2026, 0, 1).getTime(), games: 3, open: 100, close: 200, high: 500, low: 100 },
      { day: new Date(2026, 0, 2).getTime(), games: 1, open: 300, close: 300, high: 300, low: 300 },
    ]);
  });

  it('keeps only the last CANDLE_DAYS days', () => {
    const history = Array.from({ length: 12 }, (_, i) => game(at(i + 1, 12), 100 + i)).reverse();

    const candles = buildCandles(history);

    expect(candles).toHaveLength(CANDLE_DAYS);
    expect(candles[0].day).toBe(new Date(2026, 0, 3).getTime());
    expect(candles[CANDLE_DAYS - 1].day).toBe(new Date(2026, 0, 12).getTime());
  });
});
