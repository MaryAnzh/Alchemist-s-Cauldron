import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';

type CauldronProps = ParentNodeType;

const CLASS = 'app-cauldron_cauldron-wrap';

export class Cauldron extends Component {
  potion!: Component;
  pourBtn!: Button;

  constructor({ parentNode }: CauldronProps) {
    super({ parentNode, tagName: 'div', className: 'app-cauldron' });

    store.subscribe(GAME_EVENTS.CAULDRON_STATE_CHANGED, () => this.updatePotion());

    this.render();
    this.updatePotion();
  }

  render() {
    new Component({
      parentNode: this.node,
      tagName: 'h1',
      className: 'app-cauldron_title',
      content: `Alchemist's Cauldron`,
    });
    const wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: CLASS,
    });

    // Layers, bottom to top: back wall -> potion -> front wall
    const pot = new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: `${CLASS}_pot`,
    });
    new Icon({ parentNode: pot.node, icon: 'cauldron_back', className: `${CLASS}_back` });
    this.potion = new Component({
      parentNode: pot.node,
      tagName: 'div',
      className: `${CLASS}_potion`,
    });
    new Icon({ parentNode: pot.node, icon: 'cauldron_front', className: `${CLASS}_front` });

    new Icon({
      parentNode: wrap.node,
      icon: 'symbol',
      className: `${CLASS}_icon`,
    });

    this.pourBtn = new Button({
      parentNode: this.node,
      className: `app-cauldron_pour`,
      color: 'magic',
      text: 'Pour Out (−10s)',
      onClick: () => store.pourOut(),
    });
    this.pourBtn.setDisabled(true);
  }

  private updatePotion() {
    const hasIngredients = store.getState().cauldronIngredients.length > 0;
    this.potion.node.classList.toggle(`${CLASS}_potion--filled`, hasIngredients);
    this.pourBtn.setDisabled(!hasIngredients);
  }
}
