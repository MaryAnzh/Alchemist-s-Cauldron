import { Component } from '@ui';
import { Header } from './ui/layout/header/Header';

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
  };
}
