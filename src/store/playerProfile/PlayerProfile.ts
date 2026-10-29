import type { GameRecordType, ProfileStorageType } from '@types';

import { appendRecord, isValidPlayerName } from '../logic';
import { createDefaultProfile, profileService } from '../storage/ProfileService';
import { ERROR_PERSIST_PROFILE } from 'src/constants/dictionary';

type ProfileStorage = Pick<typeof profileService, 'loadOrCreate' | 'save'>;

export class PlayerProfile {
  private profile: ProfileStorageType;
  private service: ProfileStorage;

  constructor(service: ProfileStorage = profileService) {
    this.service = service;
    try {
      this.profile = service.loadOrCreate();
    } catch {
      this.profile = createDefaultProfile();
    }
  }

  get name() {
    return this.profile.name;
  }

  get isIncognito() {
    return this.profile.name === '';
  }

  setName(raw: string): boolean {
    const name = raw.trim();
    if (!isValidPlayerName(name)) return false;
    return this.persist({ ...this.profile, name });
  }

  addRecord(record: GameRecordType): boolean {
    if (this.isIncognito) return false;
    return this.persist({ ...this.profile, history: appendRecord(this.profile.history, record) });
  }

  private persist(next: ProfileStorageType): boolean {
    try {
      this.service.save(next);
      this.profile = next;
      return true;
    } catch {
      throw new Error(ERROR_PERSIST_PROFILE);
      return false;
    }
  }
}
