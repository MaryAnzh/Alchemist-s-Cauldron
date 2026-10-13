import { Component } from '@ui';

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
  };
}
