import { HOME, PRESENTATION, PROFILE } from './dictionary';

export const ROUTES = {
  [HOME]: '/',
  [PROFILE]: '/profile',
  STATS: '/profile/stats',
  [PRESENTATION]: '/presentation',
} as const;

export const ROUTES_MAP = [
  { name: HOME, path: ROUTES[HOME] },
  { name: PROFILE, path: ROUTES[PROFILE] },
  { name: PRESENTATION, path: ROUTES[PRESENTATION] },
];
