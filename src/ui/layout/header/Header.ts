import type { ParentNodeType } from '@types';
import { Component } from '@ui';
import { Lives, Score, Timer } from './components';

type HeaderProps = ParentNodeType;

export class Header extends Component {
  constructor({ parentNode }: HeaderProps) {
    super({ parentNode, tagName: 'header', className: 'app-header' });
    this.render();
  }

  render() {
    new Score({ parentNode: this.node, score: 0 });
    new Timer({ parentNode: this.node });
    new Lives({ parentNode: this.node });
  }
}
