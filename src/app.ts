import { Component, Header, Footer } from '@ui';
import { Game } from './pages/game/Game';

export class App extends Component {
  root: HTMLElement;

  constructor(root: HTMLElement) {
    super({
      parentNode: root,
      tagName: 'div',
      className: 'app',
      attrs: { id: 'app' },
    });
    this.root = root;
  }

  init = () => {
    this.root.append(this.node);
    new Header({ parentNode: this.node });
    const main = new Component({
      parentNode: this.node,
      tagName: 'main',
      className: 'app-main',
    });
    new Game({ parentNode: main.node });
    new Footer({ parentNode: this.node });
  };
}
