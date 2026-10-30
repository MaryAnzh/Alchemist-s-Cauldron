import type { GameRecordType, ProfileAvatarType, ProfileStorageType } from '@types';
import { createDefaultProfile, profileService } from '../storage/ProfileService';
import { appendRecord, isValidPlayerName } from '../logic';

type ProfileStorage = Pick<typeof profileService, 'load' | 'save' | 'removeProfile'>;

export class PlayerProfile {
  private profile: ProfileStorageType | null = null;
  private service: ProfileStorage;

  constructor(service: ProfileStorage = profileService) {
    this.service = service;
    try {
      this.profile = service.load();
    } catch {
      this.profile = null;
    }
  }

  get name(): string | null {
    return this.profile?.name ?? null;
  }

  get isIncognito(): boolean {
    return this.profile === null;
  }

  setName(raw: string): boolean {
    const name = raw.trim();
    if (!isValidPlayerName(name)) return false;
    const base = this.profile ?? createDefaultProfile();
    return this.persist({ ...base, name });
  }

  get avatar(): ProfileAvatarType | null {
    return this.profile?.avatar ?? null;
  }

  setAvatar(avatar: ProfileAvatarType): boolean {
    if (!this.profile) return false;
    return this.persist({ ...this.profile, avatar });
  }

  addRecord(record: GameRecordType): boolean {
    if (!this.profile) return false;
    return this.persist({ ...this.profile, history: appendRecord(this.profile.history, record) });
  }

  removeProfile(): boolean {
    if (!this.profile) return false;
    this.service.removeProfile();
    this.profile = null;
    return true;
  }

  private persist(next: ProfileStorageType): boolean {
    this.service.save(next); // при ошибке бросает исключение
    this.profile = next;
    return true;
  }
}
