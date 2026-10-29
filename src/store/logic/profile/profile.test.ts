import { describe, expect, it } from 'vitest';

import { PRESET } from '@constants';
import type { ProfileStorageType } from '@types';

import { ValidateProfile } from '../validate';

const validProfile: ProfileStorageType = {
  version: 1,
  name: 'Mary',
  avatar: { kind: PRESET, id: 'default' },
  history: [
    {
      playedAt: 1000,
      difficulty: 'easy',
      score: 20,
      reason: 'time',
      durationSeconds: 60,
      successfulBrews: 2,
      failedBrews: 1,
      reactionsTriggered: 0,
    },
  ],
  achievements: ['first-brew'],
};

describe('ValidateProfile', () => {
  it('accepts a valid profile', () => {
    expect(ValidateProfile(validProfile)).toBe(true);
  });

  it('accepts an empty initial name and empty history', () => {
    expect(
      ValidateProfile({
        ...validProfile,
        name: '',
        history: [],
        achievements: [],
      }),
    ).toBe(true);
  });

  it('rejects an unsupported version or invalid name', () => {
    expect(ValidateProfile({ ...validProfile, version: 2 })).toBe(false);
    expect(ValidateProfile({ ...validProfile, name: ' ' })).toBe(false);
    expect(ValidateProfile({ ...validProfile, name: 'A'.repeat(16) })).toBe(false);
  });

  it('rejects invalid avatar data', () => {
    expect(
      ValidateProfile({
        ...validProfile,
        avatar: { kind: 'image', dataUrl: 'javascript:alert(1)' },
      }),
    ).toBe(false);
  });

  it('rejects malformed records and duplicate achievements', () => {
    expect(
      ValidateProfile({
        ...validProfile,
        history: [{ ...validProfile.history[0], score: -1 }],
      }),
    ).toBe(false);

    expect(
      ValidateProfile({
        ...validProfile,
        achievements: ['first-brew', 'first-brew'],
      }),
    ).toBe(false);
  });
});
