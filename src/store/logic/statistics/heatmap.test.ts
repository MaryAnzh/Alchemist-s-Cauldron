import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import { buildHeatmap, HEATMAP_DAYS } from './heatmap';

const NOW = new Date(2026, 0, 31, 12).getTime();
const game = (playedAt: number) => ({ playedAt }) as GameRecordType;
const at = (day: number, hour = 12) => new Date(2026, 0, day, hour).getTime();

describe('buildHeatmap', () => {
  it('returns one empty cell per day, ending today', () => {
    const cells = buildHeatmap([], NOW);

    expect(cells).toHaveLength(HEATMAP_DAYS);
    expect(cells[HEATMAP_DAYS - 1].day).toBe(new Date(2026, 0, 31).getTime());
    expect(cells.every((cell) => cell.games === 0 && cell.level === 0)).toBe(true);
  });

  it('scales levels by the busiest day and ignores days outside the window', () => {
    const cells = buildHeatmap(
      [game(at(31, 9)), game(at(31, 18)), game(at(30)), game(new Date(2025, 0, 1).getTime())],
      NOW,
    );

    expect(cells[HEATMAP_DAYS - 1]).toMatchObject({ games: 2, level: 4 });
    expect(cells[HEATMAP_DAYS - 2]).toMatchObject({ games: 1, level: 2 });
    expect(cells[HEATMAP_DAYS - 3]).toMatchObject({ games: 0, level: 0 });
    expect(cells.reduce((sum, cell) => sum + cell.games, 0)).toBe(3);
  });
});
