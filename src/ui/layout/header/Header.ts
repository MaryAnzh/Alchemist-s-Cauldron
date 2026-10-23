import type { ParentNodeType } from '@types';
import { Component } from '@ui';
import { Lives, Score, Timer } from './components';

type HeaderProps = ParentNodeType & {
  currentLivesCount: number;
  maxLives: number;
  showLives?: boolean;
  showPauseButton?: boolean;
};

export class Header extends Component {
  constructor({
    parentNode,
    currentLivesCount,
    maxLives,
    showLives = true,
    showPauseButton = true,
  }: HeaderProps) {
    super({ parentNode, tagName: 'header', className: 'app-header' });
    this.render(currentLivesCount, maxLives, showLives, showPauseButton);
  }

  render(
    currentLivesCount: number,
    maxLives: number,
    showLives: boolean,
    showPauseButton: boolean,
  ) {
    new Score({ parentNode: this.node, score: 0 });
    new Timer({ parentNode: this.node, showPauseButton });
    if (showLives) {
      new Lives({ parentNode: this.node, currentLivesCount, maxLives });
    }
  }
}
