import { BOTTOM, GAME_EVENTS, TOP } from '@constants';
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
  menu: Menu | null = null;
  rulesBtn: Button | null = null;

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
    }

    this.render();
  }

  render() {
    this.rulesBtn = new Button({
      parentNode: this.node,
      className: `${this.currentClassName}_rules-btn`,
      color: 'magic-icon',
      leftIcon: 'book',
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
      this.mainBtn.setDisabled(!store.getState().cauldronIngredients.length);
    }

    this.menu = new Menu({
      parentNode: this.node,
      className: `${this.currentClassName}_menu`,
      position: this.isStartState ? BOTTOM : TOP,
      triggerIcon: 'settings',
    });
  }

  destroy(): void {
    this.rulesBtn?.destroy();
    this.mainBtn.destroy();
    this.menu?.destroy();

    super.destroy();
  }
}
