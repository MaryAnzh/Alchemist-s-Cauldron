import { GAME_EVENTS, HOME, PAUSED, PLAYING, PRESENTATION, ROUTES } from '@constants';
import { store } from '@store';
import {
  Component,
  GameHeader,
  Footer,
  StartGame,
  Portal,
  Pause,
  GameOver,
  Leaderboard,
  Rules,
} from '@ui';
import type { GameOverReasonType, LeaderboardStorageType, RecipeType } from '@types';

import { Game, Profile, Presentation } from '@pages';
import { router, type RoutePath } from '@router';
import { Header } from './ui/layout/header/Header';

export class App extends Component {
  root: HTMLElement;
  appWrap!: Component;
  store = store;
  currentPage: Component | null = null;
  currentView: Component | null = null;
  portal!: Portal;

  GameHeader: GameHeader | null = null;
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

    this.root = root;

    store.subscribe(GAME_EVENTS.GAME_START, () => {
      this.renderGameView();
    });

    // ROUND OVER: feedback is shown by the cauldron animation, the next round starts at once
    store.subscribe(GAME_EVENTS.ROUND_OVER, () => {
      this.store.newRound();
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

    store.subscribe(GAME_EVENTS.SHOW_LEADERBOARD, (leaderboard) => {
      this.renderLeaderboardDialog(leaderboard);
    });

    store.subscribe(GAME_EVENTS.SHOW_RULES, () => {
      this.renderRulesDialog();
    });

    // GAME OVER
    store.subscribe(GAME_EVENTS.GAME_OVER, ({ score, isRecord, reason }) => {
      this.renderGameOverView(score, isRecord, reason);
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.store.getState().status === PLAYING) {
        this.store.pauseGame();
      }
    });

    window.addEventListener('pagehide', () => this.store.saveGame());

    // Keyboard shortcuts: one handler, active only while playing
    document.addEventListener('keydown', (e) => this.handleHotkeys(e));

    this.render();
  }

  render() {
    this.node.innerHTML = '';

    new Header({
      parentNode: this.node,
      router,
    });

    this.appWrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-wrap',
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

    router.onChange((route) => this.handleRoute(route));
    this.handleRoute(router.current());
  }

  renderStartView() {
    this.portal.unmount();

    const view = new StartGame({
      parentNode: this.appWrap.node,
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
      parentNode: this.appWrap.node,
      tagName: 'div',
      className: 'app-game-view',
    });

    // GameHeader
    new GameHeader({
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

  renderGameOverView(score: number, isRecord: boolean, reason: GameOverReasonType) {
    this.portal.unmount();

    const view = new GameOver({
      parentNode: this.appWrap.node,
      score,
      isRecord,
      reason,
    });

    this.setView(view);
  }

  renderLeaderboardDialog(leaderboard: LeaderboardStorageType) {
    const state = this.store.getState();

    if (state.status === PLAYING) {
      this.store.pauseGame();
    }

    const view = new Leaderboard({
      parentNode: null,
      onBack: () => this.closeLeaderboardDialog(),
      onClean: () => this.store.clearLeaderboard(),
      data: leaderboard,
    });

    this.portal.mount(view.node, view);
    this.portal.setBlur();
  }

  renderPauseDialog() {
    const pause = new Pause({
      parentNode: null,
      onBack: () => {
        this.store.exitToMenu();
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

  private handleHotkeys(e: KeyboardEvent) {
    if (this.store.getState().status !== PLAYING) return;
    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;

    const target = e.target instanceof Element ? e.target : null;
    if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

    if (target?.closest('button, a') && (e.code === 'Space' || e.code === 'Enter')) return;

    const digit = /^(?:Digit|Numpad)([1-9])$/.exec(e.code);
    if (digit) {
      const ingredient = this.store.getState().shelfIngredients[Number(digit[1]) - 1];
      if (ingredient) this.store.addIngredientToCauldron(ingredient.id);
      e.preventDefault();
      return;
    }

    switch (e.code) {
      case 'KeyB':
        this.store.brewCheck();
        break;
      case 'KeyX':
        this.store.pourOut();
        break;
      case 'KeyP':
      case 'Escape':
        this.store.pauseGame();
        break;
      default:
        return;
    }
    e.preventDefault();
  }

  private handleRoute(route: RoutePath) {
    this.currentView?.destroy();
    if (route === ROUTES[HOME]) {
      this.renderStartView();
      return;
    }
    if (route === ROUTES[PRESENTATION]) {
      this.renderPresentationView();
      return;
    }
    this.renderProfileView();
  }

  renderProfileView() {
    const { status } = this.store.getState();
    if (status === PLAYING || status === PAUSED) this.store.exitToMenu();
    this.portal.unmount();

    this.setView(new Profile({ parentNode: this.appWrap.node, router }));
  }

  renderPresentationView() {
    const { status } = this.store.getState();
    if (status === PLAYING || status === PAUSED) this.store.exitToMenu();
    this.portal.unmount();

    this.setView(new Presentation({ parentNode: this.appWrap.node }));
  }
}
