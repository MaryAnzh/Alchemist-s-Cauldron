import { Game } from '@pages';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Component, Footer, Header } from '@ui';

type StartGameProps = ParentNodeType & { callback: () => void };

export class StartGame extends Component {
  callback: () => void;
  child!: Footer;

  constructor({ parentNode, callback }: StartGameProps) {
    super({ parentNode, tagName: 'div', className: 'app-start-game-dialog' });
    this.callback = callback;
    this.render();
  }

  render() {
    const { maxIngredients } = store.getState();

    new Header({
      parentNode: this.node,
      currentLivesCount: 0,
      maxLives: 0,
      showLives: false,
      showPauseButton: false,
    });

    new Game({
      parentNode: this.node,
      currentIngredientsCount: 0,
      currentRecipe: null,
      ingredients: [],
      maxIngredients,
    });

    this.child = new Footer({ parentNode: this.node, isStartState: true, callback: this.callback });
  }

  destroy(): void {
    this.child.destroy();
    super.destroy();
  }
}
