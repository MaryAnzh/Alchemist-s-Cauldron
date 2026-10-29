export const PLAYER_NAME_REGEX = /^[A-Za-z0-9 _-]{2,15}$/;

export const isValidPlayerName = (value: string): boolean =>
  PLAYER_NAME_REGEX.test(value) && value.trim() === value;
