import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

const CLASS = 'app-mini-cauldron';

const BUBBLES = [
  { x: 20, y: 40 },
  { x: 45, y: 25 },
  { x: 65, y: 50 },
  { x: 35, y: 62 },
  { x: 78, y: 30 },
];

type MiniCauldronProps = ParentNodeType & {
  className?: string;
};

export class MiniCauldron extends Component {
  constructor({ parentNode, className }: MiniCauldronProps) {
    super({ parentNode, tagName: 'div', className: [CLASS, className ? className : ''] });

    this.render();
  }

  render() {
    const pot = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: `${CLASS}_pot`,
    });

    new Icon({ parentNode: pot.node, icon: 'cauldron_back', className: `${CLASS}_back` });

    new Component({
      parentNode: pot.node,
      tagName: 'div',
      className: `${CLASS}_potion`,
    });

    BUBBLES.forEach(({ x, y }, i) => {
      const bubble = new Component({
        parentNode: pot.node,
        tagName: 'span',
        className: `${CLASS}_bubble`,
      });
      bubble.node.style.setProperty('--x', `${x}%`);
      bubble.node.style.setProperty('--y', `${y}%`);
      bubble.node.style.setProperty('--i', i.toString());
    });

    new Icon({ parentNode: pot.node, icon: 'cauldron_front', className: `${CLASS}_front` });
  }
}
