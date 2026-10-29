import { describe, expect, it, vi } from 'vitest';
import { PlayerProfile } from './PlayerProfile';
import { createDefaultProfile } from '../storage/ProfileService';

const make = () => {
  const save = vi.fn();
  return { save, player: new PlayerProfile({ loadOrCreate: createDefaultProfile, save }) };
};

describe('PlayerProfile', () => {
  it('starts incognito and does not record games', () => {
    const { player, save } = make();
    expect(player.isIncognito).toBe(true);
    expect(player.addRecord({} as never)).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it('rejects invalid names and saves valid ones', () => {
    const { player, save } = make();
    expect(player.setName('a')).toBe(false);
    expect(player.setName(' Mary ')).toBe(true);
    expect(player.name).toBe('Mary');
    expect(save).toHaveBeenCalledTimes(1);
  });
});
