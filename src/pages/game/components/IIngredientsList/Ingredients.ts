import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { IconPickerType, IngredientType, ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type IngredientsProps = ParentNodeType & { ingredients: IngredientType[] };

export class IngredientsList extends Component {
  ingredients: IngredientType[] = [];
  ingredientsNode: { id: string; el: Component }[] = [];
  inStockCount: { id: string; el: Component }[] = [];

  constructor({ parentNode, ingredients }: IngredientsProps) {
    super({ parentNode, tagName: 'div', className: 'app-ingredients' });
    this.ingredients = ingredients;

    store.subscribe(
      GAME_EVENTS.INGREDIENT_COUNT,
      ({ id, count }: Pick<IngredientType, 'id' | 'count'>) => {
        const item = this.ingredientsNode.find((el) => id == el.id);
        const countNode = this.inStockCount.find((el) => id === el.id);
        if (!item) {
          return;
        }
        if (!countNode) {
          return;
        }
        if (count === 0) {
          item.el.node.style.opacity = '0.5';
          item.el.node.style.pointerEvents = 'none';
        }
        countNode.el.node.textContent = count ? count.toString() : 'out';
      },
    );

    store.subscribe(GAME_EVENTS.SHELF_BLOCK, ({ isBlock }) => {
      if (isBlock) {
        this.ingredientsNode.forEach(({ el }) => {
          el.node.style.opacity = '0.5';
          el.node.style.pointerEvents = 'none';
        });
      }
      if (!isBlock) {
        this.ingredientsNode.forEach(({ el, id }) => {
          const count = this.inStockCount.find((el) => el.id === id);

          if (count?.el.node.textContent === '0') {
            return;
          }
          el.node.style.opacity = '1';
          el.node.style.pointerEvents = 'all';
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
    this.ingredients.forEach((ing) => {
      const { name, temperature, density, magicPower, count, id, icon } = ing;

      const li = new Component({
        parentNode: ul.node,
        tagName: 'li',
        className: 'app-ingredients_list_item',
      });
      li.node.onclick = () => store.addIngredientToCauldron(id);

      new Icon({
        parentNode: li.node,
        className: 'app-ingredients_list_item_icon',
        icon: icon as IconPickerType,
        variant: 'magic',
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

      const inStock = new Component({
        parentNode: li.node,
        className: 'app-ingredients_list_item_count',
        tagName: 'span',
        content: count ? count.toString() : '0',
      });
      this.inStockCount.push({ id, el: inStock });
    });
  }
}
