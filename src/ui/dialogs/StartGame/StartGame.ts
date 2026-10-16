import type { ParentNodeType } from '@types';
import { Component, Footer, Icon } from '@ui';

type StartGameProps = ParentNodeType & { callback: () => void };

export class StartGame extends Component {
  callback: () => void;
  child!: Footer;

  constructor({ parentNode, callback }: StartGameProps) {
    super({ parentNode, tagName: 'div', className: 'app-start-game-dialog' });
    this.callback = callback;
    this.render();
  }

  render() {
    new Icon({
      parentNode: this.node,
      className: 'app-start-game-dialog_icon',
      icon: 'symbol',
    });
    this.child = new Footer({ parentNode: this.node, isStartState: true, callback: this.callback });
  }

  destroy(): void {
    this.child.destroy();
    super.destroy();
  }
}
