import type { ParentNodeType, RecipeType } from '@types';
import { Component, Icon } from '@ui';

type RecipeProps = ParentNodeType & {
  currentRecipe: RecipeType;
  currentIngredientsCount: number;
  maxIngredients: number;
};

export class Recipe extends Component {
  ingredientsCountNode!: Component;

  constructor({ parentNode, currentRecipe, currentIngredientsCount, maxIngredients }: RecipeProps) {
    super({ parentNode, tagName: 'div', className: 'app-recipe' });

    this.render(currentRecipe, currentIngredientsCount, maxIngredients);
  }

  render(
    { name, temperature, density, magicPower }: RecipeType,
    currentIngredientsCount: number,
    maxIngredients: number,
  ) {
    new Icon({
      parentNode: this.node,
      icon: 'parchment',
      className: 'app-recipe_bg',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-recipe_title',
      content: name,
    });

    const values = new Component({
      parentNode: this.node,
      tagName: 'ul',
      className: 'app-recipe_value-wrap',
    });
    [
      { name: 'temperature', value: temperature },
      { name: 'density', value: density },
      { name: 'magicPower', value: magicPower },
    ].map(({ name, value }) => {
      const li = new Component({
        parentNode: values.node,
        tagName: 'li',
        className: 'app-recipe_value-wrap_value',
      });
      new Component({
        parentNode: li.node,
        tagName: 'span',
        className: 'app-recipe_value-wrap_value_name',
        content: name,
      });
      new Component({
        parentNode: li.node,
        tagName: 'span',
        className: 'app-recipe_value-wrap_value_v',
        content: value.join(' - '),
      });
    });

    const ingredientsCountWrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-recipe_ingredients-count',
    });

    new Component({
      parentNode: ingredientsCountWrap.node,
      tagName: 'span',
      content: 'Ingredients: ',
    });
    this.ingredientsCountNode = new Component({
      parentNode: ingredientsCountWrap.node,
      tagName: 'span',
      content: currentIngredientsCount.toString(),
    });
    new Component({
      parentNode: ingredientsCountWrap.node,
      tagName: 'span',
      content: ' / ',
    });
    new Component({
      parentNode: ingredientsCountWrap.node,
      tagName: 'span',
      content: maxIngredients.toString(),
    });
  }
}
