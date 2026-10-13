import type { ParentNodeType } from '@types';
import { Component } from '@ui';
import { Button } from '@ui';

type FooterProps = ParentNodeType;

export class Footer extends Component {
  constructor({ parentNode }: FooterProps) {
    super({ parentNode, tagName: 'footer', className: 'app-footer' });
    this.render();
  }

  render() {
    new Button({
      parentNode: this.node,
      color: 'magic',
      text: 'Brew',
      leftIcon: 'symbol',
      rightIcon: 'symbol',
    });
  }
}
