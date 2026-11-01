import { describe, expect, it } from 'vitest';

import { SCORE, TIMER, TOLERANCE } from '@constants';
import type { RecipeType } from '@types';

import { applyBrewReward, isBrewSuccess } from './brew';

const recipe = {
  temperature: [10, 20],
  density: [10, 20],
  magicPower: [10, 20],
} as RecipeType;

const values = (v: number) => ({ temperature: v, density: v, magicPower: v });

describe('isBrewSuccess', () => {
  it('accepts values inside the range', () => {
    expect(isBrewSuccess(recipe, values(15), 'medium')).toBe(true);
  });

  it('accepts values on the edge of the tolerance', () => {
    const edge = 20 + TOLERANCE.medium;
    expect(isBrewSuccess(recipe, values(edge), 'medium')).toBe(true);
  });

  it('rejects values beyond the tolerance', () => {
    expect(isBrewSuccess(recipe, values(21 + TOLERANCE.medium), 'medium')).toBe(false);
  });

  it('fails when a single parameter is out of range', () => {
    expect(isBrewSuccess(recipe, { ...values(15), density: 100 }, 'medium')).toBe(false);
  });

  it('uses a stricter tolerance on hard', () => {
    const value = 20 + TOLERANCE.easy;
    expect(isBrewSuccess(recipe, values(value), 'easy')).toBe(true);
    expect(isBrewSuccess(recipe, values(value), 'hard')).toBe(false);
  });
});

describe('applyBrewReward', () => {
  it('adds the score and the time bonus', () => {
    const result = applyBrewReward({ timeLeft: 10, score: 5, difficulty: 'easy' });
    expect(result.score).toBe(5 + SCORE.easy);
    expect(result.timeLeft).toBe(Math.min(TIMER.easy.gameTime, 10 + TIMER.easy.bonus));
  });

  it('never exceeds the initial game time', () => {
    const { timeLeft } = applyBrewReward({
      timeLeft: TIMER.hard.gameTime,
      score: 0,
      difficulty: 'hard',
    });
    expect(timeLeft).toBe(TIMER.hard.gameTime);
  });
});
