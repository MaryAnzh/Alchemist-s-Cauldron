import type { IngredientType, ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type IngredientsProps = ParentNodeType & { ingredients: IngredientType[] };

export class IngredientsList extends Component {
  ingredients: IngredientType[] = [];
  ingredientsNode: Component[] = [];

  constructor({ parentNode, ingredients }: IngredientsProps) {
    super({ parentNode, tagName: 'div', className: 'app-ingredients' });
    this.ingredients = ingredients;
    this.render();
  }

  render() {
    const ul = new Component({
      parentNode: this.node,
      tagName: 'ul',
      className: 'app-ingredients_list',
    });
    this.ingredients.forEach(({ name, temperature, density, magicPower, count }) => {
      const li = new Component({
        parentNode: ul.node,
        tagName: 'li',
        className: 'app-ingredients_list_item',
      });

      new Icon({
        parentNode: li.node,
        className: 'app-ingredients_list_item_icon',
        icon: 'symbol',
      });

      new Component({
        parentNode: li.node,
        className: 'app-ingredients_list_item_title',
        tagName: 'h2',
        content: name,
      });
      new Component({
        parentNode: li.node,
        className: 'app-ingredients_list_item_text',
        tagName: 'span',
        content: `t: ${temperature}, d: ${density}, m: ${magicPower}`,
      });
      new Component({
        parentNode: li.node,
        className: 'app-ingredients_list_item_count',
        tagName: 'span',
        content: count ? count.toString() : '0',
      });
    });
  }
}
