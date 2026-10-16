export type DifficultyType = 'easy' | 'medium' | 'hard';
export type DiapasonTye = [number, number];

export type RecipeType = {
  id: number;
  difficulty: DifficultyType;
  name: string;
  temperature: DiapasonTye;
  density: DiapasonTye;
  magicPower: DiapasonTye;
};

export type IngredientType = {
  id: string;
  name: string;
  icon: string;
  temperature: number;
  density: number;
  magicPower: number;
  count?: number;
};

export type cauldronValuesType = Pick<IngredientType, 'temperature' | 'density' | 'magicPower'>;
