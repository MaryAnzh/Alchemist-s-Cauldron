import type { ParentNodeType } from '@types';
import { Component } from '@ui';
import { Ingredients, Cauldron, Recipe } from './components';

type GameProps = ParentNodeType;

export class Game extends Component {
  constructor({ parentNode }: GameProps) {
    super({ parentNode, tagName: 'div', className: 'app-game' });
    this.render();
  }

  render() {
    new Ingredients({ parentNode: this.node });
    new Cauldron({ parentNode: this.node });
    new Recipe({ parentNode: this.node });
  }
}
