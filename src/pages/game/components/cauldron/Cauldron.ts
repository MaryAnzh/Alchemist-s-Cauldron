import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type CauldronProps = ParentNodeType;

export class Cauldron extends Component {
  constructor({ parentNode }: CauldronProps) {
    super({ parentNode, tagName: 'div', className: 'app-cauldron' });
    this.render();
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
      className: 'app-cauldron_cauldron-wrap',
    });
    new Icon({
      parentNode: wrap.node,
      icon: 'cauldron',
      className: 'app-cauldron_cauldron-wrap_cauldron',
    });
    new Icon({
      parentNode: wrap.node,
      icon: 'symbol',
      className: 'app-cauldron_cauldron-wrap_icon',
    });
  }
}
