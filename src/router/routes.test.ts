import { describe, expect, it } from 'vitest';
import { parseHash } from './routes';
import { ROUTES } from '@constants';

describe('parseHash', () => {
  it('returns HOME for empty or root hash', () => {
    expect(parseHash('')).toBe(ROUTES.HOME);
    expect(parseHash('#/')).toBe(ROUTES.HOME);
  });
  it('parses known routes', () => {
    expect(parseHash('#/profile')).toBe(ROUTES.PROFILE);
    expect(parseHash('#/profile/stats')).toBe(ROUTES.STATS);
  });
  it('ignores trailing slash and query', () => {
    expect(parseHash('#/profile/')).toBe(ROUTES.PROFILE);
    expect(parseHash('#/profile?x=1')).toBe(ROUTES.PROFILE);
  });
  it('falls back to HOME for unknown routes', () => {
    expect(parseHash('#/nope')).toBe(ROUTES.HOME);
  });
});
