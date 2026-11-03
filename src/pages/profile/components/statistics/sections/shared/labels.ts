import type { GameOverReasonType } from '@types';
import { EASY, HARD, MEDIUM } from 'src/constants/dictionary';

export const DIFFICULTY_LABELS: Record<typeof EASY | typeof MEDIUM | typeof HARD, string> = {
  [EASY]: 'Easy',
  [MEDIUM]: 'Medium',
  [HARD]: 'Hard',
};

export const REASON_LABELS: Record<GameOverReasonType, string> = {
  time: 'Time is up',
  lives: 'No lives left',
  ingredients: 'Out of ingredients',
};

export const BREW_LABELS: Record<'successful' | 'failed', string> = {
  successful: 'Successful',
  failed: 'Failed',
};

export const DAY_FORMATTER = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'numeric' });

export const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
});
