import type { GameDifficultType } from './state';

export type StatisticsType = {
  gamesPlayed: number;
  bestScore: number;
  averageScore: number;
  totalDurationSeconds: number;
  averageDurationSeconds: number;
  successfulBrews: number;
  failedBrews: number;
  reactionsTriggered: number;
};

export type DifficultyFilterType = 'all' | GameDifficultType;
