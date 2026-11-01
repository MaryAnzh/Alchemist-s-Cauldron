import { Component, Button } from '@ui';
import { store } from '@store';
import type { GameOverReasonType, ParentNodeType } from '@types';

const REASON_TEXT: Record<GameOverReasonType, string> = {
  time: 'Time is up',
  lives: 'No lives left',
  ingredients: 'Out of ingredients',
} as const;

type GameOverProps = ParentNodeType & {
  isRecord: boolean;
  score: number;
  reason: GameOverReasonType;
};

export class GameOver extends Component {
  private score: number;
  private submit!: Button;

  constructor({ parentNode, score, isRecord, reason }: GameOverProps) {
    super({
      parentNode,
      tagName: 'div',
      className: 'app-game-over',
    });

    this.score = score;
    this.render(score, isRecord, reason);
  }

  private render(score: number, isRecord: boolean, reason: GameOverReasonType) {
    const wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-game-over_wrap',
    });

    new Component({
      parentNode: wrap.node,
      tagName: 'h1',
      className: 'app-game-over_wrap_title',
      content: 'GAME OVER',
    });

    new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: 'app-game-over_wrap_reason',
      content: REASON_TEXT[reason],
    });

    const name = store.getUserName();

    new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: 'app-game-over_wrap_score',
      content: `Final ${name} Score: ${score}`,
    });

    if (isRecord && name) {
      this.submit = new Button({
        parentNode: wrap.node,
        className: 'app-game-over_wrap_back',
        text: 'SUBMIT SCORE',
        leftIcon: 'symbol',
        onClick: () => {
          this.submit.setDisabled(true);
          store.submitScore(name, this.score);
        },
        color: 'magic',
      });
    }

    new Button({
      parentNode: wrap.node,
      className: 'app-game-over_wrap_replay',
      text: 'PLAY AGAIN',
      leftIcon: 'symbol',
      onClick: () => {
        store.startNewGame();
      },
      color: 'magic',
    });
  }
}
