import type { GameState } from '@types';

import { ValidateState } from '../logic';
import { storage as defaultStorage } from '../storage/Storage';

type GameSaveStorage = {
  load: (key: 'GAME_STATE') => unknown;
  save: (key: 'GAME_STATE', value: GameState) => boolean;
  clear: (key: 'GAME_STATE') => void;
};

export class GameSave {
  constructor(private readonly store: GameSaveStorage = defaultStorage as GameSaveStorage) {}

  save(state: GameState): boolean {
    return this.store.save('GAME_STATE', state);
  }

  load(): GameState | null {
    const saved = this.store.load('GAME_STATE');

    if (!saved || !ValidateState(saved)) {
      this.store.clear('GAME_STATE');
      return null;
    }
    return saved as GameState;
  }

  clear(): void {
    this.store.clear('GAME_STATE');
  }
}
