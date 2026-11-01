import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { GameState } from '@types';

import { ValidateState } from '../logic';
import { GameSave } from './GameSave';

vi.mock('../logic/validate', () => ({ ValidateState: vi.fn() }));

const makeStore = (saved: unknown = null) => ({
  load: vi.fn(() => saved),
  save: vi.fn(() => true),
  clear: vi.fn(),
});

describe('GameSave', () => {
  beforeEach(() => vi.mocked(ValidateState).mockReset());

  it('returns a valid saved game', () => {
    const state = { score: 10 };
    vi.mocked(ValidateState).mockReturnValue(true);
    const store = makeStore(state);

    expect(new GameSave(store).load()).toBe(state);
    expect(store.clear).not.toHaveBeenCalled();
  });

  it('clears and returns null for invalid data', () => {
    vi.mocked(ValidateState).mockReturnValue(false);
    const store = makeStore({ broken: true });

    expect(new GameSave(store).load()).toBeNull();
    expect(store.clear).toHaveBeenCalledWith('GAME_STATE');
  });

  it('returns null when nothing is saved', () => {
    expect(new GameSave(makeStore()).load()).toBeNull();
  });

  it('saves and clears through the storage', () => {
    const store = makeStore();
    const save = new GameSave(store);

    save.save({ score: 1 } as GameState);
    save.clear();

    expect(store.save).toHaveBeenCalledWith('GAME_STATE', { score: 1 });
    expect(store.clear).toHaveBeenCalledWith('GAME_STATE');
  });
});
