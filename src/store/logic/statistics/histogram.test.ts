import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import { buildBrewsHistogram, formatBinLabel } from './histogram';

const record = (successfulBrews: number) => ({ successfulBrews }) as GameRecordType;

describe('buildBrewsHistogram', () => {
  it('returns one empty bin for empty history', () => {
    expect(buildBrewsHistogram([])).toEqual([{ from: 0, to: 0, games: 0 }]);
  });

  it('groups games into bins sized by the maximum', () => {
    const bins = buildBrewsHistogram([0, 1, 1, 3, 9].map(record));
    expect(bins.map((bin) => bin.games)).toEqual([3, 1, 0, 0, 1]);
    expect(bins[0]).toEqual({ from: 0, to: 1, games: 3 });
    expect(bins[4]).toEqual({ from: 8, to: 9, games: 1 });
  });
});

describe('formatBinLabel', () => {
  it('shows a single value or a range', () => {
    expect(formatBinLabel({ from: 0, to: 0, games: 0 })).toBe('0');
    expect(formatBinLabel({ from: 2, to: 3, games: 0 })).toBe('2–3');
  });
});
