import type { ParentNodeType } from '@types';
import { Component } from '@ui';

type PresentationProps = ParentNodeType;

export class Presentation extends Component {
  constructor({ parentNode }: PresentationProps) {
    super({ parentNode, className: 'app-presentation', content: 'Presentation' });
  }
}
