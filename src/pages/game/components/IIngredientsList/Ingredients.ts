import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { IconPickerType, IngredientType, ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type IngredientsProps = ParentNodeType & { ingredients: IngredientType[] };

export class IngredientsList extends Component {
  ingredients: IngredientType[] = [];
  ingredientsNode: { id: string; el: Component }[] = [];

  constructor({ parentNode, ingredients }: IngredientsProps) {
    super({ parentNode, tagName: 'div', className: 'app-ingredients' });
    this.ingredients = ingredients;

    store.subscribe(GAME_EVENTS.SHELF_UPDATE, (ingredients: IngredientType[]) => {
      this.ingredients = ingredients;
      this.render();
    });

    store.subscribe(GAME_EVENTS.INGREDIENTS_IN_STOCK, ({ id }: IngredientType) => {
      const item = this.ingredientsNode.find((el) => id == el.id);
      if (!item) {
        return;
      }
      item.el.node.style.opacity = '0.5';
      item.el.node.style.pointerEvents = 'none';
    });

    store.subscribe(GAME_EVENTS.INGREDIENTS_LIMIT, (isLimit: boolean) => {
      if (isLimit) {
        this.ingredientsNode.forEach(({ el }) => {
          el.node.style.opacity = '0.5';
          el.node.style.pointerEvents = 'none';
        });
      }
    });

    this.render();
  }

  render() {
    const ul = new Component({
      parentNode: this.node,
      tagName: 'ul',
      className: 'app-ingredients_list',
    });
    this.ingredients.forEach(({ name, temperature, density, magicPower, count, id }) => {
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
      const propsWrap = new Component({
        parentNode: li.node,
        className: 'app-ingredients_list_item_props',
        tagName: 'span',
      });
      [
        { value: temperature, icon: 'symbol' },
        { value: density, icon: 'drop' },
        { value: magicPower, icon: 'symbol' },
      ].forEach(({ value, icon }) => {
        new Icon({
          parentNode: propsWrap.node,
          icon: icon as IconPickerType,
          className: 'app-ingredients_list_item_props_icon',
        });
        new Component({
          parentNode: propsWrap.node,
          className: 'app-ingredients_list_item_props_value',
          content: value.toString(),
        });

        this.ingredientsNode.push({ id, el: li });
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
