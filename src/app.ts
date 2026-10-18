import { GAME_EVENTS, PAUSED, PLAYING } from '@constants';
import { Game } from '@pages';
import { store } from '@store';
import { Component, Header, Footer, StartGame, Portal, Info, Pause } from '@ui';
import { storage } from './store/storage/Storage';

export class App extends Component {
  root: HTMLElement;
  store = store;
  portal!: Portal;

  header: Header | null = null;
  main: Component | null = null;
  footer: Footer | null = null;
  pause: Pause | null = null;

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

    store.subscribe(GAME_EVENTS.PAUSE, () => {
      this.pause = new Pause({
        parentNode: null,
        onBack: () => {
          this.store.continueGame();
        },
        onContinue: () => {
          this.store.startNewGame();
        },
      });
      const node = this.pause.node;
      if (!node) {
        return;
      }
      this.portal.mount(node, this.pause);

      this.portal.onClose = () => {
        this.store.continueGame();
      };
      this.portal.setBlur();
    });

    store.subscribe(GAME_EVENTS.RESUME, () => {
      this.pause?.destroy();
      this.portal.unmount();
    });

    // Pause when visibilitychange
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        store.pauseGame();
      }
    });

    //Pause from Space
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        const { status } = this.store.getState();

        if (status === PLAYING) {
          store.pauseGame();
        } else if (status === PAUSED) {
          store.continueGame();
        }
      }
    });

    this.root = root;
  }

  init() {
    this.root.append(this.node);
    this.portal = new Portal();

    if (storage.hasSave('GAME_STATE')) {
      // To Do action
    }

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
