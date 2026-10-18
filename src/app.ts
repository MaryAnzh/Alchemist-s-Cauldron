import { GAME_EVENTS } from '@constants';
import { Game } from '@pages';
import { store } from '@store';
import { Component, Header, Footer, StartGame, Portal, Info } from '@ui';
import { storage } from './store/storage/Storage';
import type { LeaderboardRowType } from '@types';
import { Leaderboard } from './ui/view/Leaderboard/Leaderboard';

const mock: LeaderboardRowType[] = [
  {
    name: 'MagusPrime',
    score: 1450,
    date: '02.10.2026 12:00',
  },
  {
    name: 'AlchemystX',
    score: 1320,
    date: '02.10.2026 09:45',
  },
  {
    name: 'Veneficus',
    score: 1195,
    date: '01.10.2026 23:10',
  },
  {
    name: 'Elixirion',
    score: 1080,
    date: '01.10.2026 18:30',
  },
  {
    name: 'PotionMaster',
    score: 970,
    date: '01.10.2026 15:05',
  },
  {
    name: 'Chemicus',
    score: 860,
    date: '01.10.2026 11:50',
  },
  {
    name: 'UmbraAlchemy',
    score: 765,
    date: '30.09.2026 22:40',
  },
  {
    name: 'CorvusFial',
    score: 650,
    date: '30.09.2026 19:15',
  },
  {
    name: 'NightRetort',
    score: 560,
    date: '30.09.2026 16:00',
  },
  {
    name: 'MysticMixture',
    score: 480,
    date: '30.09.2026 12:25',
  },
];

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
    this.store.saveToStorage('LEADERBOARD', mock);
    new Leaderboard({ parentNode: this.node, onBack: () => {}, onClean: () => {} });
    // if (storage.hasSave('GAME_STATE')) {
    //   // To Do action
    // }

    // this.startGameNode = new StartGame({
    //   parentNode: this.node,
    //   callback: this.handleStartGame,
    // });
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
