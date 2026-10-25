import { GAME_EVENTS as GE } from '@constants';
import type { GameState } from './state';
import type { cauldronValuesType, GameOverReasonType, ReactionId, RecipeType } from './data';
import type { LeaderboardStorageType } from './leaderboard';

export type GameEventsPayload = {
  [GE.TIMER_TICK]: number;
  [GE.LIVES_CHANGE]: { lives: number };
  [GE.SCORE_CHANGE]: number;

  [GE.GAME_START]: GameState;
  [GE.GAME_OVER]: { isRecord: boolean; score: number; reason: GameOverReasonType };
  [GE.ROUND_OVER]: { score: number; lives: number; time: number; variant: 'success' | 'fail' };
  [GE.ROUND_START]: { isStart: boolean };
  [GE.PAUSE]: { auto: boolean };
  [GE.RESUME]: GameState;

  [GE.SHELF_BLOCK]: { isBlock: boolean };
  [GE.INGREDIENT_COUNT]: { id: string; count: number };

  [GE.RECIPE_CHANGED]: { recipe: RecipeType; ingInCauldron: number };
  [GE.REACTION_FIRED]: { id: ReactionId; name: string };
  [GE.INGREDIENT_IN_CAULDRON]: number;

  [GE.CAULDRON_STATE_CHANGED]: { values: cauldronValuesType };
  [GE.SHOW_LEADERBOARD]: LeaderboardStorageType;
  [GE.PAGE_HIDDEN]: boolean;
  [GE.SHOW_RULES]: boolean;
};
