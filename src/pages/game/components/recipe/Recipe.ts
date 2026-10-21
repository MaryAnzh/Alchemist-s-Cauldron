import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { ParentNodeType, RecipeType } from '@types';
import { Button, Component, Icon } from '@ui';

type RecipeProps = ParentNodeType & {
  currentRecipe: RecipeType;
  currentIngredientsCount: number;
  maxIngredients: number;
};

export class Recipe extends Component {
  ingredientsCountNode!: Component;
  recipeWrap: Component | null = null;
  isMobileRecipeShow = false;
  toggleBtn!: Button;

  constructor({ parentNode, currentIngredientsCount, currentRecipe, maxIngredients }: RecipeProps) {
    super({ parentNode, tagName: 'div', className: 'app-recipe' });

    store.subscribe(GAME_EVENTS.INGREDIENT_IN_CAULDRON, (value: number) => {
      this.ingredientsCountNode.node.textContent = value.toString();
    });

    store.subscribe(GAME_EVENTS.RECIPE_CHANGED, ({ recipe, ingInCauldron }) => {
      if (!this.recipeWrap) {
        return;
      }

      const { maxIngredients } = store.getState();

      this.recipeWrap.node.innerHTML = '';

      this.renderRecipe(recipe, ingInCauldron, maxIngredients);
    });

    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('resize', this.onClose);

    this.render(currentRecipe, currentIngredientsCount, maxIngredients);
  }

  renderRecipe(
    { name, temperature, density, magicPower }: RecipeType,
    currentIngredientsCount: number,
    maxIngredients: number,
  ) {
    if (!this.recipeWrap) {
      return;
    }
    const recipeClass = 'app-recipe_wrap';

    const wrap = this.recipeWrap;

    new Icon({
      parentNode: wrap.node,
      icon: 'parchment',
      className: `${recipeClass}_bg`,
    });

    new Component({
      parentNode: wrap.node,
      tagName: 'h2',
      className: `${recipeClass}_title`,
      content: name,
    });

    const values = new Component({
      parentNode: wrap.node,
      tagName: 'ul',
      className: `${recipeClass}_value-wrap`,
    });
    [
      { name: 'temperature', value: temperature },
      { name: 'density', value: density },
      { name: 'magicPower', value: magicPower },
    ].forEach(({ name, value }) => {
      const li = new Component({
        parentNode: values.node,
        tagName: 'li',
        className: `${recipeClass}_value-wrap_value`,
      });
      new Component({
        parentNode: li.node,
        tagName: 'span',
        className: `${recipeClass}_value-wrap_value_name`,
        content: name,
      });
      new Component({
        parentNode: li.node,
        tagName: 'span',
        className: `${recipeClass}_value-wrap_value_v`,
        content: value.join(' - '),
      });
    });

    const ingredientsCountWrap = new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: `${recipeClass}_ingredients-count`,
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

  render(data: RecipeType, currentIngredientsCount: number, maxIngredients: number) {
    this.recipeWrap = new Component({
      parentNode: this.node,
      className: 'app-recipe_wrap',
    });

    this.renderRecipe(data, currentIngredientsCount, maxIngredients);

    const mobile = new Component({
      parentNode: this.node,
      className: 'app-recipe_mobile',
      tagName: 'div',
    });

    this.toggleBtn = new Button({
      parentNode: mobile.node,
      leftIcon: 'parchment_horizontal',
      className: 'app-recipe_mobile_btn',
      color: 'magic-icon-2',
      onClick: () => {
        if (this.isMobileRecipeShow) {
          this.onClose();
          this.isMobileRecipeShow = false;
          this.toggleBtn.setLeftIcon('parchment_horizontal');
          return;
        }
        if (!this.isMobileRecipeShow) {
          this.onOpen();
          this.isMobileRecipeShow = true;
          this.toggleBtn.setLeftIcon('close');

          return;
        }
      },
    });
  }

  onOpen() {
    this.recipeWrap?.node.classList.add('app-recipe_wrap_mobile');
    this.isMobileRecipeShow = true;
  }
  onClose() {
    this.recipeWrap?.node.classList.remove('app-recipe_wrap_mobile');
    this.isMobileRecipeShow = false;
  }

  private handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node;

    if (this.isMobileRecipeShow && !this.node.contains(target)) {
      this.onClose();
      this.toggleBtn.setLeftIcon('parchment_horizontal');
    }
  };

  destroy(): void {
    this.isMobileRecipeShow = false;
    this.recipeWrap?.node.classList.remove('app-recipe_wrap_mobile');
    document.removeEventListener('click', this.handleOutsideClick);

    super.destroy();
  }
}
