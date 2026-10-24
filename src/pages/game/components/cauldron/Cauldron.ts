import { GAME_EVENTS, PLAYING } from '@constants';
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

    const canDrop = () => {
      const s = store.getState();
      return s.status === PLAYING && s.cauldronIngredients.length < s.maxIngredients;
    };

    pot.node.addEventListener('dragover', (e) => {
      if (!canDrop()) return;
      e.preventDefault();
      pot.node.classList.add(`${CLASS}_pot--over`);
    });
    pot.node.addEventListener('dragleave', (e) => {
      if (!pot.node.contains(e.relatedTarget as Node | null)) {
        pot.node.classList.remove(`${CLASS}_pot--over`);
      }
    });
    pot.node.addEventListener('drop', (e) => {
      e.preventDefault();
      pot.node.classList.remove(`${CLASS}_pot--over`);
      const id = e.dataTransfer?.getData('text/plain');
      if (id && canDrop()) store.addIngredientToCauldron(id);
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
