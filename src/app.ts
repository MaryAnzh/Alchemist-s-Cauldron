import { GAME_EVENTS } from '@constants';
import { Game } from '@pages';
import { store } from '@store';
import { Component, Header, Footer, StartGame, Portal, Info } from '@ui';

export class App extends Component {
  root: HTMLElement;
  store = store;
  portal!: Portal;

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

    store.subscribe(GAME_EVENTS.ROUND_OVER, ({ score, lives, time, variant }) => {
      if (lives === 0) {
        return;
      }

      const handleClose = () => {
        this.store.newRound();
        this.portal.unmount();
      };

      const info = new Info({
        parentNode: null,
        score,
        lives,
        timeLeft: time,
        variant,
        onClose: handleClose,
      });
      this.portal.mount(info.node, info);
      this.portal.onClose = handleClose;
    });

    this.root = root;
  }

  init() {
    this.root.append(this.node);
    this.portal = new Portal();

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
