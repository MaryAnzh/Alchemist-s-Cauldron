import type { GameRecordType } from '@types';

export type ScorePointType = { playedAt: number; score: number };
export type ChartPointType = { x: number; y: number };

// History is stored newest first; the chart reads left to right in time.
export const getScoreSeries = (history: GameRecordType[]): ScorePointType[] =>
  history.map(({ playedAt, score }) => ({ playedAt, score })).reverse();

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
