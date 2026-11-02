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
