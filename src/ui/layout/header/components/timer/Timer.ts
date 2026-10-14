import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type TimerProps = ParentNodeType;

export class Timer extends Component {
  timerNode!: Component;
  timer: number = 0;

  constructor({ parentNode }: TimerProps) {
    super({ parentNode, tagName: 'div', className: 'app-timer' });
    this.render();
  }

  render() {
    new Icon({
      parentNode: this.node,
      icon: 'symbol',
      variant: 'magic-icon',
      className: 'app-timer_icon',
    });
    new Component({
      parentNode: this.node,
      tagName: 'span',
      className: 'app-timer_text',
      content: 'Time: ',
    });
    this.timerNode = new Component({
      parentNode: this.node,
      tagName: 'span',
      className: 'app-timer_count',
      content: `${this.timer}`,
    });
  }
}
