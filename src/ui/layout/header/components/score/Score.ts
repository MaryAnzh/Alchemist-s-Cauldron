import type { ParentNodeType } from '@types';
import { Component } from '@ui';

type ScoreProps = ParentNodeType;

export class Score extends Component {
  constructor({ parentNode }: ScoreProps) {
    super({ parentNode, tagName: 'div', className: 'app-score', content: 'Score: 0' });
  }
}
