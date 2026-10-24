import type { GameState, LeaderboardStorageType, StorageKeysType } from '@types';

export class StorageHelper {
  save(key: StorageKeysType, state: GameState | LeaderboardStorageType): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      return true;
    } catch {
      return false;
    }
  }

  load(key: StorageKeysType): GameState | LeaderboardStorageType | null {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw) as GameState | LeaderboardStorageType;
    } catch {
      return null;
    }
  }

  clear(key: StorageKeysType) {
    try {
      localStorage.removeItem(key);
    } catch {
      // storage is unavailable, nothing to clear
    }
  }

  hasSave(key: StorageKeysType): boolean {
    try {
      return Boolean(localStorage.getItem(key));
    } catch {
      return false;
    }
  }
}

export const storage = new StorageHelper();
