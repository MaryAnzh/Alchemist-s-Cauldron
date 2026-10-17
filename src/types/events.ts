import { GAME_EVENTS as GE } from '@constants';
import type { GameState } from './state';
import type { cauldronValuesType, RecipeType } from './data';

export type GameEventsPayload = {
  [GE.TIMER_TICK]: number;
  [GE.LIVES_CHANGE]: { lives: number };
  [GE.SCORE_CHANGE]: number;

  [GE.GAME_OVER]: { isOver: boolean };
  [GE.ROUND_OVER]: void;
  [GE.PAUSE]: void;
  [GE.RESUME]: GameState;

  [GE.SHELF_BLOCK]: { isBlock: boolean };
  [GE.INGREDIENT_COUNT]: { id: string; count: number };

  [GE.RECIPE_CHANGED]: { recipe: RecipeType; ingInCauldron: number };
  [GE.INGREDIENT_IN_CAULDRON]: number;

  [GE.CAULDRON_STATE_CHANGED]: { values: cauldronValuesType };
};
