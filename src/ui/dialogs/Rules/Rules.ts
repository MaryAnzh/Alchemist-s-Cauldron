import { Component, Button } from '@ui';
import type { ParentNodeType } from '@types';

type RulesProps = ParentNodeType & {
  onClose: () => void;
};

export class Rules extends Component {
  constructor({ parentNode, onClose }: RulesProps) {
    super({
      parentNode,
      tagName: 'div',
      className: 'app-rules',
    });

    this.render(onClose);
  }

  private render(onClose: () => void) {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-rules_title',
      content: 'Game Rules',
    });

    new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-rules_text',
      content: `
        • Combine ingredients to match the recipe ranges.
        • Each ingredient changes temperature, density and magic power.
        • Stay within the allowed tolerance for your difficulty.
        • Brew successfully to gain score and bonus time.
        • Fail — lose a life.
        • Lose all lives — game over.
        • Timer runs constantly unless paused.
        • Top‑10 scores are saved in the leaderboard.
      `,
    });

    new Button({
      parentNode: this.node,
      text: 'Close',
      color: 'magic',
      leftIcon: 'symbol',
      onClick: () => onClose(),
    });
  }
}
