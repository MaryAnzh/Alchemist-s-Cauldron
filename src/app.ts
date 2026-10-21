import { GAME_EVENTS, PAUSED, PLAYING } from '@constants';
import { Game } from '@pages';
import { store } from '@store';
import {
  Component,
  Header,
  Footer,
  StartGame,
  Portal,
  Info,
  Pause,
  GameOver,
  Leaderboard,
} from '@ui';
import { storage } from './store/storage/Storage';
import type { RecipeType } from '@types';
import { Rules } from './ui/dialogs/Rules/Rules';

export class App extends Component {
  root: HTMLElement;
  store = store;
  currentView: Component | null = null;
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

    store.subscribe(GAME_EVENTS.GAME_START, () => {
      this.renderGameView();
    });

    // GAME OVER
    store.subscribe(GAME_EVENTS.GAME_OVER, ({ score, isRecord }) => {
      if (this.isDocumentHidden) return;
      this.renderGameOverView(score, isRecord);
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
      this.portal.unmount();
    });

    store.subscribe(GAME_EVENTS.LEADERBOARD_UPDATED, () => {
      this.renderLeaderboardDialog();
    });

    store.subscribe(GAME_EVENTS.SHOW_RULES, () => {
      this.renderRulesDialog();
    });

    // visibilitychange - auto pause
    // document.addEventListener('visibilitychange', () => {
    //   if (document.hidden) {
    //     this.isDocumentHidden = true;
    //     const state = store.getState();
    //     if (state.status === PLAYING) {
    //       const remaining = Math.max(0, Math.floor((state.endTimestamp - Date.now()) / 1000));

    //       this.store.pageHidden(remaining);
    //       this.renderPauseDialog();
    //     }
    //   } else {
    //     this.isDocumentHidden = false;
    //   }
    // });

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

  private setView(view: Component) {
    if (this.currentView) {
      this.currentView.destroy();
    }
    this.currentView = view;
  }

  init() {
    this.root.append(this.node);
    this.portal = new Portal();
    if (storage.hasSave('GAME_STATE')) {
      // To Do action
    }
    this.renderStartView();
  }

  renderStartView() {
    this.portal.unmount();

    const view = new StartGame({
      parentNode: this.node,
      callback: () => this.handleStartGame(),
    });

    this.setView(view);
  }

  renderGameView() {
    this.portal.unmount();

    const {
      shelfIngredients,
      currentRecipe,
      cauldronIngredients,
      maxIngredients,
      lives,
      maxLives,
    } = this.store.getState();

    const view = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-game-view',
    });

    // header
    new Header({
      parentNode: view.node,
      maxLives,
      currentLivesCount: lives,
    });

    // main
    const main = new Component({
      parentNode: view.node,
      tagName: 'main',
      className: 'app-main',
    });

    new Game({
      parentNode: main.node,
      ingredients: shelfIngredients,
      currentRecipe: currentRecipe as RecipeType,
      currentIngredientsCount: cauldronIngredients.length,
      maxIngredients,
    });

    // footer
    new Footer({
      parentNode: view.node,
      callback: () => this.store.brewCheck(),
    });

    this.setView(view);
  }

  renderGameOverView(score: number, isRecord: boolean) {
    this.portal.unmount();

    const view = new GameOver({
      parentNode: this.node,
      score,
      isRecord,
    });

    this.setView(view);
  }

  renderLeaderboardDialog() {
    const state = this.store.getState();

    if (state.status === PLAYING) {
      this.store.pauseGame();
    }

    const view = new Leaderboard({
      parentNode: null,
      onBack: () => this.closeLeaderboardDialog(),
      onClean: () => this.store.clearLeaderboard(),
    });

    this.portal.mount(view.node, view);
    this.portal.setBlur();
  }

  renderPauseDialog() {
    const pause = new Pause({
      parentNode: null,
      onBack: () => {
        this.store.startNewGame();
        this.renderStartView();
      },
      onContinue: () => {
        this.store.resumeGame();
      },
    });

    this.portal.mount(pause.node, pause);
    this.portal.onClose = () => this.store.resumeGame();
    this.portal.setBlur();
  }

  renderRulesDialog() {
    const state = this.store.getState();

    if (state.status === PLAYING) {
      this.store.pauseGame();
    }

    const rules = new Rules({
      parentNode: null,
      onClose: () => {
        if (this.store.getState().status === PAUSED) {
          this.store.resumeGame();
        }
        this.portal.unmount();
      },
    });

    this.portal.mount(rules.node, rules);
    this.portal.setBlur();
  }

  closeLeaderboardDialog() {
    const state = this.store.getState();

    if (state.status === PAUSED) {
      this.store.resumeGame();
    }

    this.portal.unmount();
  }

  public handleStartGame = () => {
    this.store.startNewGame();
  };
}
