import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';

type TimerProps = ParentNodeType & { showPauseButton?: boolean };

export class Timer extends Component {
  timerNode!: Component;
  timer: number = 0;

  constructor({ parentNode, showPauseButton = true }: TimerProps) {
    super({ parentNode, tagName: 'div', className: 'app-timer' });

    store.subscribe(GAME_EVENTS.TIMER_TICK, (time: number) => {
      this.timerNode.node.textContent = this.formatTime(time);
    });

    this.render(showPauseButton);
  }

  render(showPauseButton: boolean) {
    if (showPauseButton) {
      const btnWrap = new Component({
        parentNode: this.node,
        tagName: 'div',
        className: 'app-timer_btn-wrap',
      });
      new Button({
        parentNode: btnWrap.node,
        leftIcon: 'clock',
        className: 'app-timer_btn-wrap_btn',
        color: 'magic-icon-2',
        onClick: () => store.pauseGame(),
      });
      new Icon({
        parentNode: btnWrap.node,
        icon: 'pause',
        className: 'app-timer_btn-wrap_pause',
      });
    }

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
