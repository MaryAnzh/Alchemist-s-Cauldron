import type { ParentNodeType } from '@types';
import { Component } from '@ui';

type TimerProps = ParentNodeType;

export class Timer extends Component {
  constructor({ parentNode }: TimerProps) {
    super({ parentNode, tagName: 'div', className: 'app-timer', content: 'Timer: 0' });
  }
}
