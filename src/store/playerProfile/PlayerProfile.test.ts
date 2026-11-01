import { describe, expect, it, vi } from 'vitest';
import { PlayerProfile } from './PlayerProfile';
import type { ProfileStorageType } from 'src/types/profile';

const make = (saved: ProfileStorageType | null = null) => {
  const save = vi.fn();
  const removeProfile = vi.fn();
  const player = new PlayerProfile({ load: () => saved, save, removeProfile });
  return { save, removeProfile, player };
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

  it('removes profile and its history', () => {
    const { player, removeProfile } = make();
    player.setName('Mary');
    expect(player.removeProfile()).toBe(true);
    expect(removeProfile).toHaveBeenCalledTimes(1);
    expect(player.isIncognito).toBe(true);
    expect(player.name).toBeNull();
  });
});
