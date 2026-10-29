import type { PRESET } from '@constants';
import type { GameOverReasonConstType } from './data';
import type { GameDifficultType } from './state';

export type ProfileAvatarType =
  | { kind: typeof PRESET; id: 'default' | 'phoenix' | 'dragon' | 'moon' }
  | { kind: 'image'; dataUrl: string };

export type GameRecordType = {
  playedAt: number;
  difficulty: GameDifficultType;
  score: number;
  reason: GameOverReasonConstType;
  durationSeconds: number;
  successfulBrews: number;
  failedBrews: number;
  reactionsTriggered: number;
};

export type ProfileStorageType = {
  version: 1;
  name: string;
  avatar: ProfileAvatarType;
  history: GameRecordType[];
  achievements: string[];
};
