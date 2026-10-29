import type { ProfileStorageType } from '@types';
import { ValidateProfile } from '../logic/validate';
import { storage } from './Storage';
import {
  ERROR_INVALID_PROFILE,
  ERROR_UNABLE_TO_SAVE_PROFILE,
  PRESET,
} from 'src/constants/dictionary';

export function createDefaultProfile(): ProfileStorageType {
  return {
    version: 1,
    name: '',
    avatar: { kind: PRESET, id: 'default' },
    history: [],
    achievements: [],
  };
}

class ProfileService {
  load(): ProfileStorageType | null {
    const saved = storage.load('PROFILE');

    if (saved === null) return null;

    if (!ValidateProfile(saved)) {
      storage.clear('PROFILE');
      return null;
    }

    return saved;
  }

  save(profile: ProfileStorageType): void {
    if (!ValidateProfile(profile)) {
      throw new Error(ERROR_INVALID_PROFILE);
    }

    if (!storage.save('PROFILE', profile)) {
      throw new Error(ERROR_UNABLE_TO_SAVE_PROFILE);
    }
  }

  loadOrCreate(): ProfileStorageType {
    const saved = this.load();
    if (saved) return saved;

    const profile = createDefaultProfile();
    this.save(profile);
    return profile;
  }

  removeProfile(): void {
    storage.clear('PROFILE');
  }
}

export const profileService = new ProfileService();
