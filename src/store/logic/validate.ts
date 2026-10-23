import * as C from '@constants';
import type {
  cauldronValuesType,
  GameDifficultType,
  GameState,
  IngredientType,
  LeaderboardStorageType,
  ReactionId,
  RecipeType,
} from '@types';
const checkCauldronProps = (props: [number, number]): boolean =>
  Array.isArray(props) &&
  props.length === 2 &&
  Number.isFinite(props[0]) &&
  Number.isFinite(props[1]) &&
  props[0] <= props[1];

const checkIngredient = (item: unknown): boolean => {
  if (!item || typeof item !== 'object') return false;
  const i = item as Partial<IngredientType>;
  return (
    typeof i.id === 'string' &&
    typeof i.icon === 'string' &&
    typeof i.name === 'string' &&
    Number.isFinite(i.density) &&
    Number.isFinite(i.temperature) &&
    Number.isFinite(i.magicPower) &&
    (i.count === undefined || (Number.isFinite(i.count) && i.count >= 0))
  );
};

const checkShelfArr = (arr: unknown, d: GameDifficultType): boolean => {
  const size = d === 'hard' ? 8 : d === 'medium' ? 6 : 4;
  return Array.isArray(arr) && arr.length === size && arr.every(checkIngredient);
};

const checkCauldronArr = (arr: unknown, maxIngredients: number): boolean =>
  Array.isArray(arr) && arr.length <= maxIngredients && arr.every(checkIngredient);

const checkRecipe = (recipe: unknown, difficulty: GameDifficultType): boolean => {
  if (!recipe || typeof recipe !== 'object') return false;
  const r = recipe as RecipeType;
  return (
    Number.isFinite(r.id) &&
    typeof r.name === 'string' &&
    r.difficulty === difficulty &&
    checkCauldronProps(r.temperature) &&
    checkCauldronProps(r.density) &&
    checkCauldronProps(r.magicPower)
  );
};

const checkRecipeArr = (recipes: unknown, difficulty: GameDifficultType): boolean => {
  if (!Array.isArray(recipes)) return false;
  const invalidRecipes = recipes.filter((el) => !checkRecipe(el, difficulty));
  return invalidRecipes.length === 0;
};

const checkCauldronValues = (values: unknown): boolean => {
  if (!values || typeof values !== 'object') return false;
  const v = values as cauldronValuesType;
  return (
    Number.isFinite(v.density) && Number.isFinite(v.temperature) && Number.isFinite(v.magicPower)
  );
};

const isReactionId = (value: unknown): value is ReactionId =>
  C.REACTIONS.some(({ id }) => id === value);

const checkEnabledReactions = (value: unknown, difficulty: GameDifficultType): boolean => {
  const expected = C.REACTION_IDS_BY_DIFFICULTY[difficulty];

  return (
    Array.isArray(value) &&
    value.length === expected.length &&
    value.every((id: ReactionId, index: number) => isReactionId(id) && id === expected[index])
  );
};

const checkActiveReactions = (value: unknown, difficulty: GameDifficultType): boolean => {
  const enabled: readonly ReactionId[] = C.REACTION_IDS_BY_DIFFICULTY[difficulty];

  return (
    Array.isArray(value) &&
    value.every((id: ReactionId) => isReactionId(id) && enabled.includes(id))
  );
};

export const ValidateState = (state: unknown): boolean => {
  if (!state || typeof state !== 'object') return false;

  const s = state as Partial<GameState>;

  const isEasyLive =
    s.difficulty === 'easy' && typeof s.lives === 'number' && s.lives <= 5 && s.lives >= 0;
  const isHardMediumLive =
    (s.difficulty === 'hard' || s.difficulty === 'medium') &&
    typeof s.lives === 'number' &&
    s.lives <= 3 &&
    s.lives >= 0;
  const isValidLives = isEasyLive || isHardMediumLive;

  const isValidDifficulty =
    s.difficulty === 'easy' || s.difficulty === 'medium' || s.difficulty === 'hard';

  if (!isValidDifficulty || !isValidLives) return false;
  return (
    typeof s.playerName === 'string' &&
    (s.status === 'playing' || s.status === 'paused') &&
    (s.level === 1 || s.level === 2 || s.level === 3) &&
    typeof s.score === 'number' &&
    Number.isFinite(s.score) &&
    s.score >= 0 &&
    typeof s.timeLeft === 'number' &&
    Number.isFinite(s.timeLeft) &&
    s.timeLeft >= 0 &&
    s.maxIngredients === (s.difficulty === 'hard' ? 5 : 4) &&
    checkShelfArr(s.shelfIngredients, s.difficulty as GameDifficultType) &&
    checkRecipe(s.currentRecipe, s.difficulty as GameDifficultType) &&
    checkCauldronArr(s.cauldronIngredients, s.maxIngredients) &&
    checkCauldronValues(s.cauldronValues) &&
    Array.isArray(s.recipes) &&
    checkRecipeArr(s.recipes, s.difficulty as GameDifficultType) &&
    Array.isArray(s.activeReactions) &&
    checkEnabledReactions(s.enabledReactionIds, s.difficulty as GameDifficultType) &&
    checkActiveReactions(s.activeReactions, s.difficulty as GameDifficultType) &&
    (s.lastReactionId === null || isReactionId(s.lastReactionId)) &&
    Number.isFinite(s.startTimestamp) &&
    Number.isFinite(s.endTimestamp)
  );
};

export const ValidateLeaderboard = (
  data: LeaderboardStorageType,
): data is LeaderboardStorageType => {
  if (!data || typeof data !== 'object') return false;
  if (!Array.isArray(data.easy)) return false;
  if (!Array.isArray(data.medium)) return false;
  if (!Array.isArray(data.hard)) return false;

  let check = true;
  [data.easy, data.medium, data.hard].forEach((arr) => {
    arr.forEach((item) => {
      const checkArr =
        item &&
        typeof item === 'object' &&
        typeof item.name === 'string' &&
        typeof item.score === 'number' &&
        item.score > 0 &&
        (item.date instanceof Date ||
          typeof item.date === 'string' ||
          typeof item.date === 'number');
      if (!checkArr) {
        check = false;
      }
    });
  });
  return check;
};
