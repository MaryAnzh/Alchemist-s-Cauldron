import type { GameDifficultType } from './state';

export type LeaderboardRowType = {
  name: string;
  score: number;
  date: Date;
};

export type LeaderboardStorageType = Record<GameDifficultType, LeaderboardRowType[]>;
