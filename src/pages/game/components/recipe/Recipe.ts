import type { ParentNodeType } from '@types';
import { Component } from '@ui';

type RecipeProps = ParentNodeType;

export class Recipe extends Component {
  constructor({ parentNode }: RecipeProps) {
    super({ parentNode, tagName: 'div', className: 'app-recipe' });
    this.render();
  }

  render() {}
}
