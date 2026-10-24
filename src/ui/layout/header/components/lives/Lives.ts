import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';
import { arrayFromNumber } from '@utils';

type LivesProps = ParentNodeType & {
  maxLives: number;
  currentLivesCount: number;
};

export class Lives extends Component {
  maxLives: number;
  currentLivesCount: number;

  constructor({ parentNode, currentLivesCount, maxLives }: LivesProps) {
    super({ parentNode, tagName: 'div', className: 'app-lives' });
    this.maxLives = maxLives;
    this.currentLivesCount = currentLivesCount;

    store.subscribe(GAME_EVENTS.LIVES_CHANGE, ({ lives }) => {
      this.currentLivesCount = lives;
      this.render();
    });

    this.render();
  }

  render() {
    this.node.innerHTML = '';

    const lostLive = this.maxLives - this.currentLivesCount;
    if (lostLive > 0) {
      arrayFromNumber(lostLive).forEach(() => {
        new Icon({
          parentNode: this.node,
          icon: 'heart_empty',
        });
      });
    }
    arrayFromNumber(this.currentLivesCount).forEach(() => {
      new Icon({
        parentNode: this.node,
        icon: 'heart',
      });
    });
  }
}
