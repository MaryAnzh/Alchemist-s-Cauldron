export const GAME_EVENTS = {
  // header
  TIMER_TICK: 'timer:tick',
  SCORE_CHANGE: 'score:change',
  LIVES_CHANGE: 'lives:change',

  // Game flow
  GAME_OVER: 'game:over',
  ROUND_START: 'round:start',
  ROUND_OVER: 'round:over',
  PAUSE: 'game:pause',
  RESUME: 'game:resume',

  // Shelf
  SHELF_BLOCK: 'shelf:block',
  INGREDIENT_COUNT: 'ingredient:count',

  //Recipes
  RECIPE_CHANGED: 'recipe:changed',
  INGREDIENT_IN_CAULDRON: 'ingredient:inCauldron',

  CAULDRON_STATE_CHANGED: 'cauldron:stateChange',
  LEADERBOARD_UPDATED: 'leaderboard:update',
} as const;
