import { Component, Button, Input } from '@ui';
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
  private name = '';
  private inputNode: Input | null = null;

  constructor({ parentNode, score, isRecord, reason }: GameOverProps) {
    super({
      parentNode,
      tagName: 'div',
      className: 'app-game-over',
    });

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

    new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: 'app-game-over_wrap_score',
      content: `Final Score: ${score}`,
    });

    if (isRecord) {
      this.inputNode = new Input({
        parentNode: wrap.node,
        placeholder: 'Enter your name (2–15 chars)',
        maxlength: '15',
        className: 'app-game-over_wrap_input',
      });

      this.inputNode.onInput((value) => {
        this.validateName(value);
      });
    }

    if (isRecord) {
      new Button({
        parentNode: wrap.node,
        className: 'app-game-over_wrap_back',
        text: 'SUBMIT SCORE',
        leftIcon: 'symbol',
        onClick: () => {
          if (!this.name) {
            this.inputNode?.setError('Enter valid name');
            return;
          }
          store.submitScore(this.name);
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

  private validateName(value: string) {
    const regex = /^[A-Za-z0-9 _-]{2,15}$/;

    if (!regex.test(value)) {
      this.inputNode?.setError('Name must be 2–15 chars: letters, digits, space, _ or -');
      this.name = '';
      return;
    }

    this.inputNode?.setError('');
    this.name = value;
  }
}
