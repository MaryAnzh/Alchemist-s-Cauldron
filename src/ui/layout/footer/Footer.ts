import { GAME_EVENTS } from '@constants';
import { store } from '@store';
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

    if (!isStartState) {
      store.subscribe(GAME_EVENTS.INGREDIENT_IN_CAULDRON, (value: number) => {
        this.mainBtn.setDisabled(value === 0);
      });

      store.subscribe(GAME_EVENTS.ROUND_START, () => {
        this.mainBtn.setDisabled(true);
      });
    }

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
    if (!this.isStartState) {
      this.mainBtn.setDisabled(true);
    }
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
