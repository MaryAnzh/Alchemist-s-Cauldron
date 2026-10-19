import { Component, Button, Input } from '@ui';
import { store } from '@store';
import type { ParentNodeType } from '@types';

type GameOverProps = ParentNodeType & {
  isRecord: boolean;
  score: number;
};

export class GameOver extends Component {
  private name = '';
  private inputNode: Input | null = null;

  constructor({ parentNode, score, isRecord }: GameOverProps) {
    super({
      parentNode,
      tagName: 'div',
      className: 'app-game-over',
    });

    this.render(score, isRecord);
  }

  private render(score: number, isRecord: boolean) {
    new Component({
      parentNode: this.node,
      tagName: 'h1',
      className: 'app-game-over-title',
      content: 'GAME OVER',
    });

    new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-game-over-score',
      content: `Final Score: ${score}`,
    });

    if (isRecord) {
      this.inputNode = new Input({
        parentNode: this.node,
        placeholder: 'Enter your name (2–15 chars)',
        maxlength: '15',
      });

      this.inputNode.onInput((value) => {
        this.validateName(value);
      });
    }

    new Button({
      parentNode: this.node,
      text: 'SUBMIT SCORE',
      leftIcon: 'symbol',
      onClick: () => {
        if (!this.name) {
          this.inputNode?.setError('Enter valid name');
          return;
        }
        store.submitScore(this.name);
      },
    });

    new Button({
      parentNode: this.node,
      text: 'REPLAY',
      leftIcon: 'symbol',
      onClick: () => {
        store.startNewGame();
      },
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
