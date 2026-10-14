import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type ScoreProps = ParentNodeType & { score: number };

export class Score extends Component {
  score?: number;
  countNode!: Component;

  constructor({ parentNode, score }: ScoreProps) {
    super({ parentNode, tagName: 'div', className: 'app-score' });
    this.score = score ?? 0;

    //ToDo
    // store.subscribe('score:changed', (value: string) => {
    //   this.countNode.node.textContent = value;
    // });

    this.render();
  }

  render() {
    new Icon({
      parentNode: this.node,
      icon: 'symbol',
      variant: 'magic-icon',
      className: 'app-score_icon',
    });
    new Component({
      parentNode: this.node,
      tagName: 'span',
      className: 'app-score_text',
      content: 'Score: ',
    });
    this.countNode = new Component({
      parentNode: this.node,
      tagName: 'span',
      className: 'app-score_count',
      content: `${this.score}`,
    });
  }
}
