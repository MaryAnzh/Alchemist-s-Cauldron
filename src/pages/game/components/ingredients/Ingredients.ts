import type { ParentNodeType } from '@types';
import { Component } from '@ui';

type IngredientsProps = ParentNodeType;

export class Ingredients extends Component {
  constructor({ parentNode }: IngredientsProps) {
    super({ parentNode, tagName: 'div', className: 'app-ingredients' });
    this.render();
  }

  render() {}
}
