import type { ParentNodeType } from '@types';
import { Component } from '@ui';
import { Lives, Score, Timer } from './components';

type HeaderProps = ParentNodeType & {
  currentLivesCount: number;
  maxLives: number;
};

export class Header extends Component {
  constructor({ parentNode, currentLivesCount, maxLives }: HeaderProps) {
    super({ parentNode, tagName: 'header', className: 'app-header' });
    this.render(currentLivesCount, maxLives);
  }

  render(currentLivesCount: number, maxLives: number) {
    new Score({ parentNode: this.node, score: 0 });
    new Timer({ parentNode: this.node });
    new Lives({ parentNode: this.node, currentLivesCount, maxLives });
  }
}
