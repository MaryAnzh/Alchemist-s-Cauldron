import { GAME_EVENTS } from '@constants';
import { Game } from '@pages';
import { store } from '@store';
import { Component, Header, Footer, StartGame } from '@ui';

export class App extends Component {
  root: HTMLElement;
  store = store;
  header: Header | null = null;
  main: Component | null = null;
  footer: Footer | null = null;

  startGameNode: StartGame | null = null;

  constructor(root: HTMLElement) {
    super({
      parentNode: root,
      tagName: 'div',
      className: 'app',
      attrs: { id: 'app' },
    });

    store.subscribe(GAME_EVENTS.GAME_OVER, () => {
      this.startGameNode?.destroy();
      this.startGameNode = null;
      this.node.innerHTML = '';

      this.startGameNode = new StartGame({
        parentNode: this.node,
        callback: this.handleStartGame,
      });
    });

    this.root = root;
  }

  init() {
    this.root.append(this.node);
    this.startGameNode = new StartGame({
      parentNode: this.node,
      callback: this.handleStartGame,
    });
  }

  renderGame() {
    this.startGameNode?.destroy();
    this.startGameNode = null;
    this.node.innerHTML = '';

    const {
      shelfIngredients,
      currentRecipe,
      cauldronIngredients,
      maxIngredients,
      lives,
      maxLives,
    } = this.store.getState();
    if (!currentRecipe) {
      return;
    }
    this.header = new Header({
      parentNode: this.node,
      maxLives,
      currentLivesCount: lives,
    });

    this.main = new Component({
      parentNode: this.node,
      tagName: 'main',
      className: 'app-main',
    });

    new Game({
      parentNode: this.main.node,
      ingredients: shelfIngredients,
      currentRecipe,
      currentIngredientsCount: cauldronIngredients.length,
      maxIngredients,
    });

    this.footer = new Footer({ parentNode: this.node, callback: () => this.store.brewCheck() });
  }

  public handleStartGame = () => {
    this.store.startNewGame();
    this.renderGame();
  };
}
