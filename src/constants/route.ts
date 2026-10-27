import { HOME, PRESENTATION, PROFILE } from './dictionary';

export const ROUTES = {
  [HOME]: '/',
  [PROFILE]: '/profile',
  STATS: '/profile/stats',
  [PRESENTATION]: '/presentation',
} as const;
