import { Component, Header, Footer } from '@ui';

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
    new Component({
      parentNode: this.node,
      tagName: 'main',
      className: 'app-main',
      content: 'Main',
    });
    new Footer({ parentNode: this.node });
  };
}
