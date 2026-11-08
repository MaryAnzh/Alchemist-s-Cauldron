import { SCORE, TIMER, TOLERANCE } from '@constants';
import type { cauldronValuesType, GameDifficultType, RecipeType } from '@types';

const inRange = (value: number, [min = 0, max = 0]: readonly number[], tolerance: number) =>
  value >= min - tolerance && value <= max + tolerance;

export const isBrewSuccess = (
  recipe: RecipeType,
  values: cauldronValuesType,
  difficulty: GameDifficultType,
): boolean => {
  const tolerance = TOLERANCE[difficulty];

  return (
    inRange(values.temperature, recipe.temperature, tolerance) &&
    inRange(values.density, recipe.density, tolerance) &&
    inRange(values.magicPower, recipe.magicPower, tolerance)
  );
};

type RewardArgs = { timeLeft: number; score: number; difficulty: GameDifficultType };

export const applyBrewReward = ({ timeLeft, score, difficulty }: RewardArgs) => ({
  timeLeft: Math.min(TIMER[difficulty].gameTime, TIMER[difficulty].bonus + timeLeft),
  score: SCORE[difficulty] + score,
});
