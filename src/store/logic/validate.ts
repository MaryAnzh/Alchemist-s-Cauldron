import type {
  cauldronValuesType,
  GameDifficultType,
  GameState,
  LeaderboardStorageType,
  RecipeType,
} from '@types';

const checkCauldronProps = (props: [number, number]): boolean =>
  Array.isArray(props) &&
  props.length === 2 &&
  typeof props[0] === 'number' &&
  typeof props[1] === 'number';

const checkIngredientsArr = (ing: unknown, d: GameDifficultType): boolean => {
  if (!Array.isArray(ing)) return false;
  const isCorrectLength =
    (d === 'hard' && ing.length === 8) || ((d === 'easy' || d === 'medium') && ing.length === 6);

  if (!isCorrectLength) return false;

  let isCheck = true;
  ing.forEach((item) => {
    if (!item || typeof item !== 'object') {
      isCheck = false;
      return;
    }
    const { id, icon, density, magicPower, temperature, name } = item;
    const elCheck =
      typeof id === 'string' &&
      typeof icon === 'string' &&
      typeof name === 'string' &&
      checkCauldronProps(density) &&
      checkCauldronProps(temperature) &&
      checkCauldronProps(magicPower);
    if (!elCheck) {
      isCheck = false;
    }
  });
  return isCheck;
};

const checkRecipe = (recipe: unknown): boolean => {
  if (!recipe || typeof recipe !== 'object') return false;
  const r = recipe as RecipeType;
  return (
    typeof r.id === 'string' &&
    typeof r.name === 'string' &&
    (r.difficulty === 'easy' || r.difficulty === 'hard' || r.difficulty === 'medium') &&
    checkCauldronProps(r.temperature) &&
    checkCauldronProps(r.density) &&
    checkCauldronProps(r.magicPower)
  );
};

const checkRecipeArr = (recipes: unknown): boolean => {
  if (!Array.isArray(recipes)) return false;
  const invalidRecipes = recipes.filter((el) => !checkRecipe(el));
  return invalidRecipes.length === 0;
};

const checkCauldronValues = (values: unknown): boolean => {
  if (!values || typeof values !== 'object') return false;
  const v = values as cauldronValuesType;
  return (
    typeof v.density === 'number' &&
    typeof v.temperature === 'number' &&
    typeof v.magicPower === 'number'
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
  // тут чекке пишет что returnvj;tn ,snm undefined  должно возвращать булиан как поправить не ломая логикув
  return (
    typeof s.playerName === 'string' &&
    (s.status === 'menu' ||
      s.status === 'playing' ||
      s.status === 'game-over' ||
      s.status === 'paused') &&
    (s.level === 1 || s.level === 2 || s.level === 3) &&
    typeof s.score === 'number' &&
    s.score >= 0 &&
    typeof s.timeLeft === 'number' &&
    s.timeLeft >= 0 &&
    typeof s.maxIngredients === 'number' &&
    s.maxIngredients > 0 &&
    Array.isArray(s.shelfIngredients) &&
    checkIngredientsArr(s.shelfIngredients, s.difficulty as GameDifficultType) &&
    (s.currentRecipe === null || checkRecipe(s.currentRecipe)) &&
    Array.isArray(s.cauldronIngredients) &&
    checkIngredientsArr(s.cauldronIngredients, s.difficulty as GameDifficultType) &&
    checkCauldronValues(s.cauldronValues) &&
    Array.isArray(s.recipes) &&
    checkRecipeArr(s.recipes) &&
    Boolean(s.activeReactions) &&
    Array.isArray(s.activeReactions) &&
    typeof s.startTimestamp === 'number' &&
    ((s.endTimestamp !== undefined && typeof s.endTimestamp === 'number') ||
      s.endTimestamp === undefined)
  );
};

export const ValidateLeaderboard = (
  data: LeaderboardStorageType,
): data is LeaderboardStorageType => {
  if (typeof data !== 'object') return false;
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
