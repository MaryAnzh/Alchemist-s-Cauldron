import type { ParentNodeType } from '@types';
import { Component } from '@ui';

type LivesProps = ParentNodeType;

export class Lives extends Component {
  constructor({ parentNode }: LivesProps) {
    super({ parentNode, tagName: 'div', className: 'app-lives', content: 'Lives: 0' });
  }
}
