import type { GameOverReasonType, GameRecordType } from '@types';

export type ReasonShareType = { reason: GameOverReasonType; games: number; share: number };

const REASONS: GameOverReasonType[] = ['time', 'lives', 'ingredients'];

export const buildReasonBreakdown = (history: GameRecordType[]): ReasonShareType[] =>
  REASONS.map((reason) => {
    const games = history.filter((record) => record.reason === reason).length;
    return { reason, games, share: history.length === 0 ? 0 : games / history.length };
  });
