import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import { buildLinePath, getScoreSeries, toChartPoints } from './chart';

const make = (playedAt: number, score: number): GameRecordType => ({
  playedAt,
  difficulty: 'easy',
  score,
  reason: 'time',
  durationSeconds: 60,
  successfulBrews: 1,
  failedBrews: 0,
  reactionsTriggered: 0,
});

describe('getScoreSeries', () => {
  it('returns scores oldest first without mutating the history', () => {
    const history = [make(3, 300), make(2, 200), make(1, 100)];
    const series = getScoreSeries(history);

    expect(series.map((p) => p.score)).toEqual([100, 200, 300]);
    expect(history[0].playedAt).toBe(3);
  });
});

describe('toChartPoints', () => {
  it('returns no points for an empty series', () => {
    expect(toChartPoints([], 100, 50)).toEqual([]);
  });

  it('centers a single point horizontally', () => {
    expect(toChartPoints([{ playedAt: 1, score: 100 }], 100, 50)).toEqual([{ x: 50, y: 0 }]);
  });

  it('places the highest score at the top and zero at the bottom', () => {
    const points = toChartPoints(
      [
        { playedAt: 1, score: 0 },
        { playedAt: 2, score: 200 },
      ],
      100,
      50,
    );
    expect(points).toEqual([
      { x: 0, y: 50 },
      { x: 100, y: 0 },
    ]);
  });
});

describe('buildLinePath', () => {
  it('builds an SVG path from points', () => {
    expect(
      buildLinePath([
        { x: 0, y: 5 },
        { x: 10, y: 2.5 },
      ]),
    ).toBe('M0.00 5.00 L10.00 2.50');
  });

  it('returns an empty string when there are no points', () => {
    expect(buildLinePath([])).toBe('');
  });
});
