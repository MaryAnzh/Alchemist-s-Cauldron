import type { GameState, LeaderboardRowType, StorageKeysType } from '@types';

export class StorageHelper {
  save(key: StorageKeysType, state: GameState | LeaderboardRowType[]) {
    const data = JSON.stringify(state);
    localStorage.setItem(key, data);
  }

  load(key: StorageKeysType): GameState | LeaderboardRowType[] | null {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as GameState | LeaderboardRowType[];
    } catch {
      return null;
    }
  }

  clear(key: StorageKeysType) {
    localStorage.removeItem(key);
  }

  hasSave(key: StorageKeysType): boolean {
    return Boolean(localStorage.getItem(key));
  }
}

export const storage = new StorageHelper();
