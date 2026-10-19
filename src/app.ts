import { GAME_EVENTS, PAUSED, PLAYING } from '@constants';
import { Game } from '@pages';
import { store } from '@store';
import { Component, Header, Footer, StartGame, Portal, Info, Pause, GameOver } from '@ui';
import { storage } from './store/storage/Storage';

export class App extends Component {
  root: HTMLElement;
  store = store;
  portal!: Portal;

  header: Header | null = null;
  main: Component | null = null;
  footer: Footer | null = null;
  pause: Pause | null = null;
  isDocumentHidden: boolean = false;

  startGameNode: StartGame | null = null;

  constructor(root: HTMLElement) {
    super({
      parentNode: root,
      tagName: 'div',
      className: 'app',
      attrs: { id: 'app' },
    });

    this.root = root;

    // GAME OVER
    store.subscribe(GAME_EVENTS.GAME_OVER, ({ score, isRecord }) => {
      if (this.isDocumentHidden) return;

      this.startGameNode?.destroy();
      this.startGameNode = null;
      this.node.innerHTML = '';

      this.renderGameOver(score, isRecord);
    });

    // ROUND OVER
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

    // PAUSE → local dialog
    store.subscribe(GAME_EVENTS.PAUSE, ({ auto }) => {
      if (auto) return;
      this.renderPauseDialog();
    });

    // RESUME
    store.subscribe(GAME_EVENTS.RESUME, () => {
      this.pause?.destroy();
      this.portal.unmount();
    });

    // visibilitychange - auto pause
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.isDocumentHidden = true;
        const state = store.getState();

        if (state.status === PLAYING) {
          const remaining = Math.max(0, Math.floor((state.endTimestamp - Date.now()) / 1000));

          this.store.pageHidden(remaining);
        }
      } else {
        this.isDocumentHidden = false;
        const state = store.getState();
        if (state.status === PAUSED) {
          this.renderPauseDialog();
        }
      }
    });

    // Space pause
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();

        const { status } = this.store.getState();

        if (status === PLAYING) {
          this.store.pauseGame();
        } else if (status === PAUSED) {
          this.store.resumeGame();
        }
      }
    });
  }

  init() {
    this.root.append(this.node);
    this.portal = new Portal();

    if (storage.hasSave('GAME_STATE')) {
      // To Do action
    }
    this.renderGameOver(400, true);
    // this.renderStartView();
  }

  renderStartView() {
    this.pause?.destroy();
    this.portal.unmount();
    this.node.innerHTML = '';

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

  renderPauseDialog() {
    this.pause = new Pause({
      parentNode: null,

      onBack: () => {
        this.store.startNewGame();
        this.renderStartView();
      },

      onContinue: () => {
        this.store.resumeGame();
      },
    });

    const node = this.pause.node;
    if (!node) return;

    this.portal.mount(node, this.pause);
    this.portal.onClose = () => {
      this.store.resumeGame();
    };
    this.portal.setBlur();
  }
  renderGameOver(score: number, isRecord: boolean) {
    new GameOver({ parentNode: this.node, score, isRecord });
  }

  public handleStartGame = () => {
    this.store.startNewGame();
    this.renderGame();
  };
}
