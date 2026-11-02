import { EMPTY_STATISTICS } from '@constants';
import type { DifficultyFilterType, GameRecordType, StatisticsType } from '@types';

const sumBy = (history: GameRecordType[], pick: (r: GameRecordType) => number) =>
  history.reduce((total, record) => total + pick(record), 0);

export const buildStatistics = (history: GameRecordType[]): StatisticsType => {
  if (history.length === 0) return { ...EMPTY_STATISTICS };

  const games = history.length;
  const totalDuration = sumBy(history, (r) => r.durationSeconds);

  return {
    gamesPlayed: games,
    bestScore: Math.max(...history.map((r) => r.score)),
    averageScore: Math.round(sumBy(history, (r) => r.score) / games),
    totalDurationSeconds: totalDuration,
    averageDurationSeconds: Math.round(totalDuration / games),
    successfulBrews: sumBy(history, (r) => r.successfulBrews),
    failedBrews: sumBy(history, (r) => r.failedBrews),
    reactionsTriggered: sumBy(history, (r) => r.reactionsTriggered),
  };
};

// history хранится от новых записей к старым
export const getRecentHistory = (history: GameRecordType[], limit: number): GameRecordType[] =>
  history.slice(0, Math.max(0, limit));

export const filterHistoryByDifficulty = (
  history: GameRecordType[],
  filter: DifficultyFilterType,
): GameRecordType[] =>
  filter === 'all' ? history : history.filter((record) => record.difficulty === filter);
