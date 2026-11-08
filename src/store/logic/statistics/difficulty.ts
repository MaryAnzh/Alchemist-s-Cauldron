import { EASY, HARD, MEDIUM } from '@constants';
import type { DifficultyFilterType, GameRecordType } from '@types';

export type DifficultyLevelType = Exclude<DifficultyFilterType, 'all'>;
export type DifficultyShareType = { difficulty: DifficultyLevelType; games: number; share: number };

const LEVELS: DifficultyLevelType[] = [EASY, MEDIUM, HARD];

export const buildDifficultyBreakdown = (history: GameRecordType[]): DifficultyShareType[] =>
  LEVELS.map((difficulty) => {
    const games = history.filter((record) => record.difficulty === difficulty).length;
    return { difficulty, games, share: history.length === 0 ? 0 : games / history.length };
  });
