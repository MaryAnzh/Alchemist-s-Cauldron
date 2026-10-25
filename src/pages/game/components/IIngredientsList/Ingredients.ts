import { GAME_EVENTS, PLAYING } from '@constants';
import { store } from '@store';
import type { IconPickerType, IngredientType, ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';

type IngredientsProps = ParentNodeType & { ingredients: IngredientType[] };

const fmt = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : '0');

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

    store.subscribe(GAME_EVENTS.PAUSE, () => this.node.classList.add('is-paused'));
    store.subscribe(GAME_EVENTS.RESUME, () => this.node.classList.remove('is-paused'));

    this.render();
  }

  render() {
    const isHard = store.getState().difficulty === 'hard';
    if (isHard) {
      this.node.classList.add('app-ingredients_is-hard');
    }

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
      card.node.draggable = true;
      card.node.addEventListener('dragstart', (e) => {
        if (store.getState().status !== PLAYING) {
          e.preventDefault();
          return;
        }
        e.dataTransfer?.setData('text/plain', id);
        if (e.dataTransfer) e.dataTransfer.effectAllowed = 'copy';
        card.node.classList.add('is-dragging');
      });
      card.node.addEventListener('dragend', () => card.node.classList.remove('is-dragging'));

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

      if (!isHard) {
        const propsWrap = new Component({
          parentNode: card.node,
          className: 'app-ingredients_list_item_props',
          tagName: 'span',
        });
        [
          { value: temperature, icon: 'temperature' },
          { value: density, icon: 'density' },
          { value: magicPower, icon: 'magic' },
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
      } else {
        const tooltip = new Component({
          parentNode: card.node,
          tagName: 'span',
          className: 'app-ingredients_tooltip',
          attrs: { role: 'tooltip' },
        });
        (
          [
            ['Temperature', temperature],
            ['Density', density],
            ['Magic Power', magicPower],
          ] as const
        ).forEach(([label, value]) => {
          new Component({
            parentNode: tooltip.node,
            tagName: 'span',
            className: 'app-ingredients_tooltip_row',
            content: `${label}: ${fmt(value)}`,
          });
        });

        const placeTooltip = () => {
          const gap = 8;
          const cardRect = card.node.getBoundingClientRect();
          const { width, height } = tooltip.node.getBoundingClientRect();
          const { innerWidth: vw, innerHeight: vh } = window;
          const clamp = (v: number, max: number) => Math.max(gap, Math.min(v, max - gap));

          const flipLeft = cardRect.right + gap + width > vw - gap;
          const flipUp = cardRect.top + cardRect.height / 2 + height / 2 > vh - gap;
          tooltip.node.classList.toggle('app-ingredients_tooltip--left', flipLeft);
          tooltip.node.classList.toggle('app-ingredients_tooltip--up', flipUp);

          let left = flipLeft ? cardRect.left - gap - width : cardRect.right + gap;
          const sideFits = left >= gap;
          let top = flipUp ? cardRect.bottom - height : cardRect.top;

          if (!sideFits) {
            left = cardRect.left;
            top = cardRect.bottom + gap;
            tooltip.node.classList.toggle('app-ingredients_tooltip--up', false);
            if (top + height > vh - gap) {
              top = cardRect.top - gap - height;
              tooltip.node.classList.toggle('app-ingredients_tooltip--up', true);
            }
          }

          tooltip.node.style.left = `${clamp(left, vw - width + gap)}px`;
          tooltip.node.style.top = `${clamp(top, vh - height + gap)}px`;
        };

        card.node.addEventListener('mouseenter', placeTooltip);
        card.node.addEventListener('focusin', placeTooltip);
      }

      card.node.classList.toggle('app-ingredients_list_item--compact', isHard);

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
