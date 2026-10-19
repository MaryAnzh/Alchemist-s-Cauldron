import { GAME_EVENTS as GE } from '@constants';
import type { GameState } from './state';
import type { cauldronValuesType, RecipeType } from './data';
import type { LeaderboardRowType } from './leaderboard';

export type GameEventsPayload = {
  [GE.TIMER_TICK]: number;
  [GE.LIVES_CHANGE]: { lives: number };
  [GE.SCORE_CHANGE]: number;

  [GE.GAME_OVER]: { isRecord: boolean; score: number };
  [GE.ROUND_OVER]: { score: number; lives: number; time: number; variant: 'success' | 'fail' };
  [GE.ROUND_START]: { isStart: boolean };
  [GE.PAUSE]: { auto: boolean };
  [GE.RESUME]: GameState;

  [GE.SHELF_BLOCK]: { isBlock: boolean };
  [GE.INGREDIENT_COUNT]: { id: string; count: number };

  [GE.RECIPE_CHANGED]: { recipe: RecipeType; ingInCauldron: number };
  [GE.INGREDIENT_IN_CAULDRON]: number;

  [GE.CAULDRON_STATE_CHANGED]: { values: cauldronValuesType };
  [GE.LEADERBOARD_UPDATED]: LeaderboardRowType[];
};
