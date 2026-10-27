import { HOME, ROUTES } from '@constants';

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

const KNOWN: string[] = Object.values(ROUTES);

export function parseHash(hash: string): RoutePath {
  const path = hash.replace(/^#/, '').split('?')[0].replace(/\/+$/, '') || '/';
  return KNOWN.includes(path) ? (path as RoutePath) : ROUTES[HOME];
}
