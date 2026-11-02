import { describe, expect, it } from 'vitest';
import type { GameRecordType } from '@types';
import { buildReasonBreakdown } from './reasons';

const record = (reason: GameRecordType['reason']) => ({ reason }) as GameRecordType;

describe('buildReasonBreakdown', () => {
  it('returns zeros for empty history', () => {
    expect(buildReasonBreakdown([])).toEqual([
      { reason: 'time', games: 0, share: 0 },
      { reason: 'lives', games: 0, share: 0 },
      { reason: 'ingredients', games: 0, share: 0 },
    ]);
  });

  it('counts games and shares per reason', () => {
    expect(
      buildReasonBreakdown([record('time'), record('lives'), record('time'), record('time')]),
    ).toEqual([
      { reason: 'time', games: 3, share: 0.75 },
      { reason: 'lives', games: 1, share: 0.25 },
      { reason: 'ingredients', games: 0, share: 0 },
    ]);
  });
});
