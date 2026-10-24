import type { IngredientType, ParentNodeType, RecipeType } from '@types';
import { Component } from '@ui';
import { IngredientsList, Cauldron, Recipe, Ranges } from './components';

type GameProps = ParentNodeType & {
  ingredients: IngredientType[];
  currentRecipe: RecipeType | null;
  currentIngredientsCount: number;
  maxIngredients: number;
};

export class Game extends Component {
  constructor({
    parentNode,
    ingredients,
    currentRecipe,
    currentIngredientsCount,
    maxIngredients,
  }: GameProps) {
    super({ parentNode, tagName: 'div', className: 'app-game' });
    this.render(ingredients, currentRecipe, currentIngredientsCount, maxIngredients);
  }

  render(
    ingredients: IngredientType[],
    currentRecipe: RecipeType | null,
    currentIngredientsCount: number,
    maxIngredients: number,
  ) {
    new IngredientsList({ parentNode: this.node, ingredients });
    new Cauldron({ parentNode: this.node });

    if (!currentRecipe) return;

    new Recipe({ parentNode: this.node, currentRecipe, currentIngredientsCount, maxIngredients });
    new Ranges({
      parentNode: this.node,
      ranges: currentRecipe,
    });
  }
}
