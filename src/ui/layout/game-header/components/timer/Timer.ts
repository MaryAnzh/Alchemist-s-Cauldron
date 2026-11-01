import { GAME_EVENTS, TIMER } from '@constants';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';

type TimerProps = ParentNodeType & { showPauseButton?: boolean };

const DANGER_TIME = 15;

export class Timer extends Component {
  timerNode!: Component;
  barFill!: Component;

  constructor({ parentNode, showPauseButton = true }: TimerProps) {
    super({ parentNode, tagName: 'div', className: 'app-timer' });

    store.subscribe(GAME_EVENTS.TIMER_TICK, (time: number) => {
      this.update(time);
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

    const info = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-timer_info',
    });

    const row = new Component({
      parentNode: info.node,
      tagName: 'div',
      className: 'app-timer_row',
    });

    new Component({
      parentNode: row.node,
      tagName: 'span',
      className: 'app-timer_text',
      content: 'Time: ',
    });

    this.timerNode = new Component({
      parentNode: row.node,
      tagName: 'span',
      className: 'app-timer_count',
      content: '0',
    });

    const bar = new Component({
      parentNode: info.node,
      tagName: 'div',
      className: 'app-timer_bar',
    });

    this.barFill = new Component({
      parentNode: bar.node,
      tagName: 'div',
      className: 'app-timer_bar_fill',
    });
    this.barFill.node.style.transform = 'scaleX(0)';
  }

  private update(time: number) {
    const { difficulty } = store.getState();
    const total = TIMER[difficulty].gameTime;
    const ratio = Math.max(0, Math.min(1, time / total));

    this.timerNode.node.textContent = this.formatTime(time);
    this.barFill.node.style.transform = `scaleX(${ratio})`;
    this.node.classList.toggle('app-timer--danger', time > 0 && time < DANGER_TIME);
  }

  private formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const mm = minutes.toString().padStart(2, '0');
    const ss = seconds.toString().padStart(2, '0');

    return `${mm}:${ss}`;
  }
}
