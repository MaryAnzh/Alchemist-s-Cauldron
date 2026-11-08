import { SCORE } from '@constants';
import type { GameDifficultType, GameOverReasonConstType, GameRecordType } from '@types';

type RandomType = () => number;

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const DAYS = 42;
const WEEKDAY_MAX_GAMES = 3;
const WEEKEND_MAX_GAMES = 6;
const REST_DAY_CHANCE = 0.25;

const DIFFICULTIES: GameDifficultType[] = ['easy', 'medium', 'hard'];
const REASONS: GameOverReasonConstType[] = ['time', 'lives', 'ingredients'];

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
    const weekday = new Date(now - daysAgo * DAY_MS).getDay();
    const isWeekend = weekday === 0 || weekday === 6;
    // Older games have fewer successful brews, so the charts show an improvement.
    const trend = 0.6 + 0.4 * (1 - daysAgo / (DAYS - 1));
    const games =
      random() < REST_DAY_CHANCE
        ? 0
        : between(1, isWeekend ? WEEKEND_MAX_GAMES : WEEKDAY_MAX_GAMES, random);

    for (let game = 0; game < games; game++) {
      const difficulty = pick(DIFFICULTIES, random);
      const successfulBrews = Math.max(1, Math.round(between(3, 8, random) * trend));

      history.push({
        playedAt: now - daysAgo * DAY_MS - game * HOUR_MS,
        difficulty,
        score: successfulBrews * SCORE[difficulty],
        reason: pick(REASONS, random),
        durationSeconds: between(60, 600, random),
        successfulBrews,
        failedBrews: between(0, 4, random),
        reactionsTriggered: between(0, 5, random),
      });
    }
  }

  return history;
};
