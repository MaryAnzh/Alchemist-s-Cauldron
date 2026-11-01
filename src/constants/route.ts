import { ACCOUNT, HOME, PRESENTATION, PROFILE, STATS } from './dictionary';

export const ROUTES = {
  [HOME]: '/',
  [PROFILE]: '/profile',
  [ACCOUNT]: '/profile/account',
  [STATS]: '/profile/stats',
  [PRESENTATION]: '/presentation',
} as const;

export const ROUTES_MAP = [
  { name: HOME, path: ROUTES[HOME] },
  { name: PROFILE, path: ROUTES[PROFILE] },
  { name: PRESENTATION, path: ROUTES[PRESENTATION] },
];

export const ROUTER_EVENTS = {
  PATH_CHANGE: 'path:change',
};

export const PAGE_ALIAS = {
  [ROUTES[HOME]]: HOME,
  [ROUTES[PROFILE]]: PROFILE,
  [ROUTES[PRESENTATION]]: PRESENTATION,
};

export const getSection = (url: string) =>
  ROUTES_MAP.find(({ path }) => url === path || url.startsWith(`${path}/`));
