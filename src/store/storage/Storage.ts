import type { GameState, LeaderboardStorageType, StorageKeysType } from '@types';

export class StorageHelper {
  save(key: StorageKeysType, state: GameState | LeaderboardStorageType) {
    const data = JSON.stringify(state);
    localStorage.setItem(key, data);
  }

  load(key: StorageKeysType): GameState | LeaderboardStorageType | null {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as GameState | LeaderboardStorageType;
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
