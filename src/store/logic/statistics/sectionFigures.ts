import type { GameRecordType, StatisticsSectionIdType } from '@types';
import { buildBrewShares, buildStatistics, formatDuration, getRecentHistory } from './statistics';
import { buildDifficultyBreakdown } from './difficulty';
import { buildReasonBreakdown } from './reasons';
import { buildBrewsHistogram, formatBinLabel } from './histogram';
import { buildCandles } from './candles';

export type FigureType = { label: string; value: string };

const LABEL = {
  GAMES: 'Games',
  BEST: 'Best score',
  AVERAGE: 'Average score',
  TIME: 'Time in game',
  LAST_SCORE: 'Last score',
  LAST_DIFFICULTY: 'Last difficulty',
  SUCCESS_RATE: 'Success rate',
  SUCCESSFUL: 'Successful brews',
  FAILED: 'Failed brews',
  DAYS_SHOWN: 'Days shown',
  BEST_DAY: 'Best day',
  COMMON_BREWS: 'Most common brews',
  ACTIVE_DAYS: 'Active days',
  BUSIEST_DAY: 'Busiest day',
} as const;

const percent = (share: number) => `${Math.round(share * 100)}%`;

const SECTION_FIGURES: Record<
  StatisticsSectionIdType,
  (history: GameRecordType[]) => FigureType[]
> = {
  summary: (history) => {
    const stats = buildStatistics(history);
    return [
      { label: LABEL.GAMES, value: `${stats.gamesPlayed}` },
      { label: LABEL.BEST, value: `${stats.bestScore}` },
      { label: LABEL.AVERAGE, value: `${stats.averageScore}` },
      { label: LABEL.TIME, value: formatDuration(stats.totalDurationSeconds) },
    ];
  },
  chart: (history) => {
    const stats = buildStatistics(history);
    return [
      { label: LABEL.AVERAGE, value: `${stats.averageScore}` },
      { label: LABEL.BEST, value: `${stats.bestScore}` },
    ];
  },
  difficulty: (history) =>
    buildDifficultyBreakdown(history).map(({ difficulty, share }) => ({
      label: difficulty,
      value: percent(share),
    })),
  recent: (history) => {
    const [last] = getRecentHistory(history, 1);
    return [
      { label: LABEL.LAST_SCORE, value: `${last.score}` },
      { label: LABEL.LAST_DIFFICULTY, value: last.difficulty },
    ];
  },
  reasons: (history) =>
    buildReasonBreakdown(history).map(({ reason, share }) => ({
      label: reason,
      value: percent(share),
    })),
  brews: (history) => {
    const [success, failed] = buildBrewShares(history);
    return [
      { label: LABEL.SUCCESSFUL, value: `${success.games}` },
      { label: LABEL.FAILED, value: `${failed.games}` },
      { label: LABEL.SUCCESS_RATE, value: percent(success.share) },
    ];
  },
  candles: (history) => {
    const candles = buildCandles(history);
    return [
      { label: LABEL.DAYS_SHOWN, value: `${candles.length}` },
      { label: LABEL.BEST_DAY, value: `${Math.max(...candles.map((c) => c.high))}` },
    ];
  },
  histogram: (history) => {
    const bins = buildBrewsHistogram(history);
    const common = bins.reduce((best, bin) => (bin.games > best.games ? bin : best));
    return [{ label: LABEL.COMMON_BREWS, value: formatBinLabel(common) }];
  },
  heatmap: (history) => {
    const gamesByDay = new Map<string, number>();
    history.forEach(({ playedAt }) => {
      const day = new Date(playedAt).toDateString();
      gamesByDay.set(day, (gamesByDay.get(day) ?? 0) + 1);
    });
    return [
      { label: LABEL.ACTIVE_DAYS, value: `${gamesByDay.size}` },
      { label: LABEL.BUSIEST_DAY, value: `${Math.max(...gamesByDay.values())}` },
    ];
  },
};

export const buildSectionFigures = (
  section: StatisticsSectionIdType,
  history: GameRecordType[],
): FigureType[] => (history.length === 0 ? [] : SECTION_FIGURES[section](history));
