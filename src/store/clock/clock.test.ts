import { describe, expect, it } from 'vitest';

import { remainingSeconds, shiftedSeconds } from './clock';

describe('clock', () => {
  it('rounds the remaining time down', () => {
    expect(remainingSeconds(10_900, 0)).toBe(10);
  });

  it('never returns negative time', () => {
    expect(remainingSeconds(1000, 5000)).toBe(0);
  });

  it('adds the delta to the remaining time', () => {
    expect(shiftedSeconds(60_000, 0, 10)).toBe(70);
    expect(shiftedSeconds(60_000, 0, -10)).toBe(50);
  });

  it('can go below zero so the caller can end the game', () => {
    expect(shiftedSeconds(5000, 0, -10)).toBeLessThan(0);
  });
});
