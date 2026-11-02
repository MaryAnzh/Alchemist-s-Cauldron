import type { GameDifficultType, GameOverReasonType, GameRecordType, SessionStats } from '@types';
import { MAX_HISTORY_LENGTH } from '@constants';

type BuildArgs = {
  stats: SessionStats;
  difficulty: GameDifficultType;
  score: number;
  reason: GameOverReasonType;
  now: number;
  gameId?: string;
};

export const buildGameRecord = ({
  stats,
  difficulty,
  score,
  reason,
  now,
  gameId,
}: BuildArgs): GameRecordType => ({
  playedAt: now,
  difficulty,
  score: Math.max(0, score),
  reason,
  durationSeconds: Math.max(0, Math.round((now - stats.startedAt) / 1000)),
  successfulBrews: stats.successfulBrews,
  failedBrews: stats.failedBrews,
  reactionsTriggered: stats.reactionsTriggered,
  gameId,
});

export const hasRecord = (history: GameRecordType[], gameId?: string): boolean =>
  gameId !== undefined && history.some((record) => record.gameId === gameId);

export const createSessionStats = (startedAt: number): SessionStats => ({
  startedAt,
  successfulBrews: 0,
  failedBrews: 0,
  reactionsTriggered: 0,
});

// newest first, capped
export const appendRecord = (history: GameRecordType[], record: GameRecordType) =>
  [record, ...history].slice(0, MAX_HISTORY_LENGTH);
