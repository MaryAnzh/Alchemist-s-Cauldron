export const GAME_EVENTS = {
  // Core
  STATE_UPDATE: 'state:update',

  // Score / Lives / Timer
  SCORE_CHANGED: 'score:changed',
  LIVES_CHANGED: 'lives:changed',
  TIMER_CHANGED: 'timer:changed',

  // Game flow
  GAME_OVER: 'game:over',
  GAME_RESTART: 'game:restart',
  LEVEL_CHANGED: 'level:changed',

  // Cauldron
  INGREDIENT_ADDED: 'cauldron:ingredient-added',
  INGREDIENTS_CHANGED: 'cauldron:ingredients-changed',
  CAULDRON_STATE_CHANGED: 'cauldron:state-changed',
  BREW_RESULT: 'cauldron:brew-result',
  BREW_EXPLOSION: 'cauldron:explosion',

  // Recipes
  RECIPE_DISCOVERED: 'recipe:discovered',
  RECIPE_FAILED: 'recipe:failed',

  RECIPE_CHANGED: 'recipe:changed',
} as const;
