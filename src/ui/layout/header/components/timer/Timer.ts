import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type TimerProps = ParentNodeType;

export class Timer extends Component {
  timerNode!: Component;
  timer: number = 0;

  constructor({ parentNode }: TimerProps) {
    super({ parentNode, tagName: 'div', className: 'app-timer' });

    store.subscribe(GAME_EVENTS.TIMER_TICK, (time: number) => {
      this.timerNode.node.textContent = this.formatTime(time);
    });

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

  private formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const mm = minutes.toString().padStart(2, '0');
    const ss = seconds.toString().padStart(2, '0');

    return `${mm}:${ss}`;
  }
}
