import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Component, Menu } from '@ui';
import { Button } from '@ui';

type FooterProps = ParentNodeType & { isStartState?: boolean; callback: () => void };

export class Footer extends Component {
  isStartState: boolean = false;
  callback: () => void;
  mainBtn!: Button;
  currentClassName = ';';

  constructor({ parentNode, isStartState, callback }: FooterProps) {
    super({
      parentNode,
      tagName: isStartState ? 'div' : 'footer',
      className: isStartState ? 'app-start-menu' : 'app-footer',
    });
    this.isStartState = isStartState ?? false;
    this.callback = callback;
    this.currentClassName = isStartState ? 'app-start-menu' : 'app-footer';

    if (!isStartState) {
      store.subscribe(GAME_EVENTS.INGREDIENT_IN_CAULDRON, (value: number) => {
        if (value === 0) {
          this.mainBtn.node.setAttribute('disabled', 'true');
        } else {
          this.mainBtn.node.removeAttribute('disabled');
        }
      });

      store.subscribe(GAME_EVENTS.ROUND_START, () => {
        this.mainBtn.node.removeAttribute('disabled');
      });
    }

    this.render();
  }

  render() {
    new Button({
      parentNode: this.node,
      className: `${this.currentClassName}_rules-btn`,
      color: 'magic-icon',
      text: 'Rules',
      onClick: () => {
        store.showRules();
      },
    });

    this.mainBtn = new Button({
      parentNode: this.node,
      className: `${this.currentClassName}_main-btn`,
      color: 'magic',
      text: this.isStartState ? 'Start Game' : 'Brew',
      leftIcon: 'symbol',
      rightIcon: 'symbol',
      onClick: () => this.callback(),
    });
    if (!this.isStartState) {
      this.mainBtn.setDisabled(true);
    }

    new Menu({
      parentNode: this.node,
      className: `${this.currentClassName}_menu`,
      position: this.isStartState ? 'bottom' : 'top',
    });
  }

  destroy(): void {
    this.mainBtn.node.onclick = null;

    super.destroy();
  }
}
