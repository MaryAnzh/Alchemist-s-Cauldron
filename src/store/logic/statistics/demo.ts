import type { GameDifficultType, GameOverReasonConstType, GameRecordType } from '@types';

type RandomType = () => number;

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const DAYS = 14;
const MAX_GAMES_PER_DAY = 3;

const DIFFICULTIES: GameDifficultType[] = ['easy', 'medium', 'hard'];
const REASONS: GameOverReasonConstType[] = ['time', 'lives', 'ingredients'];
const SCORE_RANGE: Record<GameDifficultType, [number, number]> = {
  easy: [20, 80],
  medium: [50, 150],
  hard: [100, 250],
};

const between = (min: number, max: number, random: RandomType) =>
  min + Math.floor(random() * (max - min + 1));

const pick = <T>(items: readonly T[], random: RandomType): T =>
  items[Math.floor(random() * items.length)];

export const buildDemoHistory = (
  now: number,
  random: RandomType = Math.random,
): GameRecordType[] => {
  const history: GameRecordType[] = [];

  for (let daysAgo = 0; daysAgo < DAYS; daysAgo++) {
    const trend = 0.8 + 0.4 * (1 - daysAgo / (DAYS - 1));
    const games = between(0, MAX_GAMES_PER_DAY, random);

    for (let game = 0; game < games; game++) {
      const difficulty = pick(DIFFICULTIES, random);
      const [min, max] = SCORE_RANGE[difficulty];

      history.push({
        playedAt: now - daysAgo * DAY_MS - game * HOUR_MS,
        difficulty,
        score: Math.round(between(min, max, random) * trend),
        reason: pick(REASONS, random),
        durationSeconds: between(60, 600, random),
        successfulBrews: between(2, 12, random),
        failedBrews: between(0, 4, random),
        reactionsTriggered: between(0, 5, random),
      });
    }
  }

  return history;
};
