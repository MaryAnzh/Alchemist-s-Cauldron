import { Component, Button } from '@ui';
import type { ParentNodeType } from '@types';

type RulesProps = ParentNodeType & {
  onClose: () => void;
};

export class Rules extends Component {
  rules = [
    'Click Start Game button',
    'To pause the game, hover over the clock icon and click it, or switch to another tab',
    'Look at recipe required ranges for temperature, density and magic power.',
    'Pick ingredients from the shelf and add them to the cauldron to change these three parameters.',
    'Watch the bars: each ingredient increases or decreases temperature, density and magic power.',
    'Your goal is to keep all three parameters inside the recipe ranges when you press Brew.',
    'If all parameters are within the ranges, the brew is successful and you gain score and bonus time.',
    'If at least one parameter is out of range, the brew fails and you lose one life.',
    'When you lose all lives, run out of time or run out of ingredients, the game ends. A score above 0 that makes the Top-10 can be added to the leaderboard.',
  ];

  constructor({ parentNode, onClose }: RulesProps) {
    super({
      parentNode,
      tagName: 'div',
      className: 'app-rules',
    });

    this.render(onClose);
  }

  private render(onClose: () => void) {
    const wrap = new Component({
      parentNode: this.node,
      className: 'app-rules_wrap',
      tagName: 'div',
    });

    new Component({
      parentNode: wrap.node,
      tagName: 'h2',
      className: 'app-rules_wrap_title',
      content: 'Game Rules',
    });

    const list = new Component({
      parentNode: wrap.node,
      tagName: 'ul',
      className: 'app-rules_wrap_list',
    });
    this.rules.forEach((rule) => {
      new Component({
        parentNode: list.node,
        tagName: 'li',
        content: rule,
      });
    });

    new Button({
      parentNode: wrap.node,
      className: 'app-rules_wrap_btn',
      text: 'Close',
      color: 'magic',
      leftIcon: 'symbol',
      onClick: () => onClose(),
    });
  }
}
