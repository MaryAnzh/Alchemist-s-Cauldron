import { AVATAR_MIME_TYPES, MAX_AVATAR_FILE_BYTES, PRESET } from '@constants';
import type { ProfileAvatarType } from '@types';

export const isValidAvatarUrl = (value: string): boolean =>
  value.length <= 2048 && /^https:\/\/\S+$/.test(value);

export const getAvatarFileError = (file: Pick<File, 'type' | 'size'>): string | null => {
  if (!AVATAR_MIME_TYPES.includes(file.type)) return 'Use a PNG, JPEG or WebP image';
  if (file.size > MAX_AVATAR_FILE_BYTES) return 'Image is too large (max 85 KB)';
  return null;
};

export const getAvatarSrc = (avatar: ProfileAvatarType | null): string | null => {
  if (!avatar || avatar.kind === PRESET) return null;
  return avatar.kind === 'image' ? avatar.dataUrl : avatar.url;
};
export const PLAYER_NAME_REGEX = /^[A-Za-z0-9 _-]{2,15}$/;

export const isValidPlayerName = (value: string): boolean =>
  PLAYER_NAME_REGEX.test(value) && value.trim() === value;
