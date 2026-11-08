import * as C from '@constants';
import type { GameState } from '@types';

export const createState = (): GameState => ({
  playerName: 'Alchemist',
  status: C.MENU,
  level: 1,
  difficulty: C.MEDIUM,

  score: 0,
  lives: C.LIVES[C.MEDIUM],
  maxLives: C.LIVES[C.MEDIUM],
  timeLeft: 0,

  currentRecipe: null,
  recipes: [],

  // Cauldron
  cauldronIngredients: [],
  cauldronValues: { density: 0, magicPower: 0, temperature: 0 },
  maxIngredients: C.MAX_INGREDIENTS[C.MEDIUM],

  // Shelf
  shelfIngredients: [],

  // Reactions (Level 3)
  enabledReactionIds: [...C.REACTION_IDS_BY_DIFFICULTY[C.MEDIUM]],
  activeReactions: [],
  lastReactionId: null,

  startTimestamp: 0,
  endTimestamp: 0,
});
