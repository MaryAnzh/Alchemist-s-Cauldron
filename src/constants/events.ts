export const GAME_EVENTS = {
  // Core
  STATE_UPDATE: 'state:update',

  // Timer
  TIMER_TICK: 'timer:tick',

  // Game flow
  GAME_OVER: 'game:over',
  PAUSE: 'game:pause',
  RESUME: 'game:resume',

  // Shelf
  INGREDIENTS_CHANGED: 'shelf:ingredients-changed',

  // Cauldron
  CAULDRON_STATE_CHANGED: 'cauldron:state-changed',

  // Recipes
  RECIPE_CHANGED: 'recipe:changed',
  INGREDIENTS_IN_STOCK: 'ingredients:stock',
  OUT_STOCK: 'out:stock',
  INGREDIENTS_LIMIT: 'ingredient:limit',
  SHELF_UPDATE: 'shelf:update',
} as const;
