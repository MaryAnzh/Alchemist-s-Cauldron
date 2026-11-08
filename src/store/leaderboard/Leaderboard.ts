import type { GameDifficultType, LeaderboardRowType, LeaderboardStorageType } from '@types';
import { ValidateLeaderboard } from '../logic/validate';
import { storage as defaultStorage } from '../storage/Storage';

export const LEADERBOARD_LIMIT = 10;

type LeaderboardStorage = {
  load: (key: 'LEADERBOARD') => unknown;
  save: (key: 'LEADERBOARD', value: LeaderboardStorageType) => boolean;
  clear: (key: 'LEADERBOARD') => void;
};

export const createEmptyLeaderboard = (): LeaderboardStorageType => ({
  easy: [],
  medium: [],
  hard: [],
});

export class Leaderboard {
  private data: LeaderboardStorageType;

  constructor(private readonly store: LeaderboardStorage = defaultStorage as LeaderboardStorage) {
    this.data = this.read() ?? createEmptyLeaderboard();
  }

  get(): LeaderboardStorageType {
    return this.data;
  }

  // Re-reads storage so changes from other tabs are visible when the dialog opens
  reload(): LeaderboardStorageType {
    this.data = this.read() ?? this.data;
    return this.data;
  }

  isRecord(difficulty: GameDifficultType, score: number): boolean {
    if (score <= 0) return false;

    const list = this.data[difficulty];
    if (list.length < LEADERBOARD_LIMIT) return true;

    return score >= (list.at(-1)?.score ?? 0);
  }

  add(difficulty: GameDifficultType, row: LeaderboardRowType): LeaderboardStorageType {
    const list = [...this.data[difficulty], row]
      .sort((a, b) => b.score - a.score)
      .slice(0, LEADERBOARD_LIMIT);

    this.data = { ...this.data, [difficulty]: list };
    this.store.save('LEADERBOARD', this.data);
    return this.data;
  }

  clear(): LeaderboardStorageType {
    this.data = createEmptyLeaderboard();
    this.store.save('LEADERBOARD', this.data);
    return this.data;
  }

  private read(): LeaderboardStorageType | null {
    const saved = this.store.load('LEADERBOARD');
    if (saved === null || saved === undefined) return null;

    if (!ValidateLeaderboard(saved as LeaderboardStorageType)) {
      this.store.clear('LEADERBOARD');
      return null;
    }
    return saved as LeaderboardStorageType;
  }
}
