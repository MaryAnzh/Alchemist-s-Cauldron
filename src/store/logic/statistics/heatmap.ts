import type { GameRecordType } from '@types';
import { shiftDay, startOfDay } from './date';

export const HEATMAP_DAYS = 42;
export const HEATMAP_LEVELS = 4;

export type HeatmapCellType = { day: number; games: number; level: number };

export const buildHeatmap = (history: GameRecordType[], now = Date.now()): HeatmapCellType[] => {
  const gamesByDay = new Map<number, number>();
  history.forEach(({ playedAt }) => {
    const day = startOfDay(playedAt);
    gamesByDay.set(day, (gamesByDay.get(day) ?? 0) + 1);
  });

  const today = startOfDay(now);
  const cells = Array.from({ length: HEATMAP_DAYS }, (_, index) => {
    const day = shiftDay(today, index - (HEATMAP_DAYS - 1));
    return { day, games: gamesByDay.get(day) ?? 0 };
  });

  const busiest = Math.max(0, ...cells.map((cell) => cell.games));
  return cells.map(({ day, games }) => ({
    day,
    games,
    level: busiest === 0 ? 0 : Math.ceil((games / busiest) * HEATMAP_LEVELS),
  }));
};
