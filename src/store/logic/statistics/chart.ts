import type { GameRecordType } from '@types';
import { startOfDay, startOfWeek } from './date';

export type ChartPointType = { x: number; y: number };
export type ChartModeType = 'game' | 'days' | 'week';
export type ScorePointType = { playedAt: number; score: number; games?: number };

// History is stored newest first; the chart reads left to right in time.
export const getScoreSeries = (history: GameRecordType[]): ScorePointType[] =>
  history.map(({ playedAt, score }) => ({ playedAt, score })).reverse();

const bucketStart = (mode: Exclude<ChartModeType, 'game'>, timestamp: number) =>
  mode === 'week' ? startOfWeek(timestamp) : startOfDay(timestamp);

export const getChartSeries = (
  history: GameRecordType[],
  mode: ChartModeType,
): ScorePointType[] => {
  if (mode === 'game') return getScoreSeries(history);

  const buckets = new Map<number, { total: number; games: number }>();
  history.forEach(({ playedAt, score }) => {
    const start = bucketStart(mode, playedAt);
    const bucket = buckets.get(start) ?? { total: 0, games: 0 };
    bucket.total += score;
    bucket.games += 1;
    buckets.set(start, bucket);
  });

  return [...buckets.entries()]
    .sort(([a], [b]) => a - b)
    .map(([playedAt, { total, games }]) => ({
      playedAt,
      score: Math.round(total / games),
      games,
    }));
};

export const toChartPoints = (
  series: ScorePointType[],
  width: number,
  height: number,
): ChartPointType[] => {
  if (series.length === 0) return [];

  const maxScore = Math.max(1, ...series.map((p) => p.score));

  return series.map((point, index) => ({
    x: series.length > 1 ? (index * width) / (series.length - 1) : width / 2,
    y: height - (point.score / maxScore) * height,
  }));
};

export const buildLinePath = (points: ChartPointType[]): string =>
  points
    .map(({ x, y }, index) => `${index === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(' ');

const playedAtFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

export const formatPlayedAt = (playedAt: number): string => playedAtFormatter.format(playedAt);

export const formatScoreLabel = ({ score, playedAt }: ScorePointType): string =>
  `${score} pts · ${formatPlayedAt(playedAt)}`;

const dayFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });

export const formatChartLabel = (point: ScorePointType, mode: ChartModeType): string => {
  if (mode === 'game') return formatScoreLabel(point);

  const games = point.games ?? 0;
  const prefix = mode === 'week' ? 'Week of ' : '';
  return `${point.score} avg · ${games} ${games === 1 ? 'game' : 'games'} · ${prefix}${dayFormatter.format(point.playedAt)}`;
};
