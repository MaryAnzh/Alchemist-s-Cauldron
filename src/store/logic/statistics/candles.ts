import type { GameRecordType } from '@types';

export const CANDLE_DAYS = 10;

export type CandleType = {
  day: number;
  games: number;
  open: number;
  close: number;
  high: number;
  low: number;
};

const startOfDay = (timestamp: number) => {
  const date = new Date(timestamp);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
};

export const buildCandles = (history: GameRecordType[]): CandleType[] => {
  const scoresByDay = new Map<number, number[]>();

  [...history]
    .sort((a, b) => a.playedAt - b.playedAt)
    .forEach(({ playedAt, score }) => {
      const day = startOfDay(playedAt);
      scoresByDay.set(day, [...(scoresByDay.get(day) ?? []), score]);
    });

  return [...scoresByDay].slice(-CANDLE_DAYS).map(([day, scores]) => ({
    day,
    games: scores.length,
    open: scores[0],
    close: scores[scores.length - 1],
    high: Math.max(...scores),
    low: Math.min(...scores),
  }));
};
