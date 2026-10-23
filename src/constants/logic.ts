import { EASY, HARD, MEDIUM, MENU, PLAYING, PAUSED, GAME_OVER } from './dictionary';

export const GAME_DIFFICULT = {
  [EASY]: EASY,
  [MEDIUM]: MEDIUM,
  [HARD]: HARD,
};

export const GAME_STATUS = {
  [MENU]: MENU,
  [PLAYING]: PLAYING,
  [PAUSED]: PAUSED,
  [GAME_OVER]: GAME_OVER,
} as const;

export const TIMER = {
  [EASY]: {
    gameTime: 180,
    bonus: 15,
  },
  [MEDIUM]: {
    gameTime: 150,
    bonus: 10,
  },
  [HARD]: {
    gameTime: 150,
    bonus: 5,
  },
} as const;

export const TOLERANCE = {
  [EASY]: 12,
  [MEDIUM]: 8,
  [HARD]: 5,
} as const;

export const LIVES = {
  [EASY]: 5,
  [MEDIUM]: 3,
  [HARD]: 3,
} as const;

export const MAX_INGREDIENTS = {
  [EASY]: 4,
  [MEDIUM]: 4,
  [HARD]: 5,
} as const;

export const SHELF_SIZE = {
  [EASY]: 4,
  [MEDIUM]: 6,
  [HARD]: 8,
} as const;

export const SCORE = {
  [EASY]: 100,
  [MEDIUM]: 200,
  [HARD]: 300,
} as const;
