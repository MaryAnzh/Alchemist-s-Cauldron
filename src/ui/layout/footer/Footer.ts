import type { ParentNodeType } from '@types';
import { Component } from '@ui';
import { Button } from '@ui';

type FooterProps = ParentNodeType & { isStartState?: boolean; callback: () => void };

export class Footer extends Component {
  isStartState: boolean = false;
  callback: () => void;
  mainBtn!: Button;

  constructor({ parentNode, isStartState, callback }: FooterProps) {
    super({
      parentNode,
      tagName: isStartState ? 'div' : 'footer',
      className: isStartState ? 'app-start-state' : 'app-footer',
    });
    this.isStartState = isStartState ?? false;
    this.callback = callback;

    this.render();
  }

  render() {
    new Button({
      parentNode: this.node,
      color: 'magic-icon',
      text: 'N',
    });

    this.mainBtn = new Button({
      parentNode: this.node,
      color: 'magic',
      text: this.isStartState ? 'Start Game' : 'Brew',
      leftIcon: 'symbol',
      rightIcon: 'symbol',
    });
    this.mainBtn.node.onclick = () => this.callback();

    new Button({
      parentNode: this.node,
      color: 'magic-icon',
      text: 'S',
    });
  }
  destroy(): void {
    this.mainBtn.node.onclick = null;

    super.destroy();
  }
}
