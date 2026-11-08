import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import {
  buildLinePath,
  formatChartLabel,
  getChartSeries,
  getScoreSeries,
  toChartPoints,
} from './chart';

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

describe('getChartSeries', () => {
  const at = (day: number, hour = 12) => new Date(2026, 0, day, hour).getTime();
  const record = (playedAt: number, score: number) => ({ playedAt, score }) as GameRecordType;
  // Newest first, as in the store.
  const history = [
    record(at(6), 300),
    record(at(5, 18), 100),
    record(at(5, 9), 200),
    record(at(1), 50),
  ];

  it('keeps one point per game, oldest first, in game mode', () => {
    expect(getChartSeries(history, 'game').map((p) => p.score)).toEqual([50, 200, 100, 300]);
  });

  it('averages scores per day', () => {
    const series = getChartSeries(history, 'days');

    expect(series.map((p) => p.score)).toEqual([50, 150, 300]);
    expect(series.map((p) => p.games)).toEqual([1, 2, 1]);
  });

  it('averages scores per week, starting on Monday', () => {
    const series = getChartSeries(history, 'week');

    expect(series.map((p) => p.playedAt)).toEqual([
      new Date(2025, 11, 29).getTime(),
      new Date(2026, 0, 5).getTime(),
    ]);
    expect(series.map((p) => p.score)).toEqual([50, 200]);
    expect(series.map((p) => p.games)).toEqual([1, 3]);
  });

  it('returns an empty series for empty history', () => {
    expect(getChartSeries([], 'days')).toEqual([]);
  });

  it('formats bucket labels with average and game count', () => {
    expect(formatChartLabel({ playedAt: at(5), score: 150, games: 2 }, 'days')).toBe(
      '150 avg · 2 games · Jan 5',
    );
  });
});
