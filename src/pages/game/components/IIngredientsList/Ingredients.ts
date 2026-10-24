import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { IconPickerType, IngredientType, ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';

type IngredientsProps = ParentNodeType & { ingredients: IngredientType[] };

export class IngredientsList extends Component {
  ingredients: IngredientType[] = [];
  ingredientsDate: {
    id: string;
    card: HTMLElement;
    countNode: HTMLElement;
    iconNode: HTMLElement;
    count: number | null;
  }[] = [];

  constructor({ parentNode, ingredients }: IngredientsProps) {
    super({ parentNode, tagName: 'div', className: 'app-ingredients' });
    this.ingredients = ingredients;

    store.subscribe(GAME_EVENTS.INGREDIENT_COUNT, ({ id, count }) => {
      const item = this.ingredientsDate.find((el) => el.id === id);
      if (!item) {
        return;
      }

      if (count === 0) {
        item.card.style.opacity = '0.5';
        item.card.style.pointerEvents = 'none';
        item.card.setAttribute('disabled', 'true');
        item.iconNode.innerHTML = '';
      }
      item.countNode.textContent = count.toString();
      item.count = count ?? null;
    });

    store.subscribe(GAME_EVENTS.SHELF_BLOCK, ({ isBlock }) => {
      this.ingredientsDate.forEach(({ card, count }) => {
        const isBlocked = isBlock || !count;

        card.style.opacity = isBlocked ? '0.5' : '1';
        card.style.pointerEvents = isBlocked ? 'none' : 'all';
        if (isBlock) {
          card.setAttribute('disabled', 'true');
        } else {
          card.removeAttribute('disabled');
        }
      });
    });

    this.render();
  }

  render() {
    const wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-ingredients_list',
    });

    if (this.ingredients.length === 0) {
      new Component({
        parentNode: wrap.node,
        tagName: 'p',
        className: 'app-ingredients_empty',
        content: 'Shelf is empty',
      });
    }

    this.ingredients.forEach((ing) => {
      const { name, temperature, density, magicPower, count, id, icon } = ing;

      const card = new Component({
        parentNode: wrap.node,
        tagName: 'button',
        className: 'app-ingredients_list_item',
      });
      card.node.onclick = () => store.addIngredientToCauldron(id);

      const ingIcon = new Icon({
        parentNode: card.node,
        className: 'app-ingredients_list_item_icon',
        icon: icon as IconPickerType,
        variant: 'magic',
      });

      new Component({
        parentNode: card.node,
        className: 'app-ingredients_list_item_title',
        tagName: 'span',
        content: name,
      });

      const propsWrap = new Component({
        parentNode: card.node,
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
      });

      const countNode = new Component({
        parentNode: card.node,
        className: 'app-ingredients_list_item_count',
        tagName: 'span',
        content: count ? count.toString() : '0',
      });

      this.ingredientsDate.push({
        id,
        card: card.node,
        countNode: countNode.node,
        iconNode: ingIcon.node,
        count: count ?? null,
      });
    });

    const mobile = new Component({
      parentNode: this.node,
      className: 'app-ingredients_mobile',
      tagName: 'div',
    });

    new Button({
      parentNode: mobile.node,
      leftIcon: 'battle',
      color: 'magic-icon-2',
    });
  }
}
