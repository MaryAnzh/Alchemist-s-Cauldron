import type { ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';

type PauseProps = ParentNodeType & {
  onBack: () => void;
  onContinue: () => void;
};

export class Pause extends Component {
  constructor({ parentNode, onBack, onContinue }: PauseProps) {
    super({ parentNode, tagName: 'div', className: 'app-pause' });

    this.render(onBack, onContinue);
  }

  render(onBack: () => void, onContinue: () => void) {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-pause_title',
      content: 'Game on pause',
    });

    new Icon({
      parentNode: this.node,
      icon: 'symbol',
      size: 'lg',
      className: 'app-pause_icon',
    });

    const btnWrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-pause_btn-wrap',
    });
    new Button({
      parentNode: btnWrap.node,
      className: 'app-pause_btn-wrap_continue',
      text: 'Continue',
      color: 'magic',
      onClick: onContinue,
    });
    new Button({
      parentNode: btnWrap.node,
      className: 'app-pause_btn-wrap_continue',
      text: 'Back to menu',
      color: 'arrow-left',
      onClick: onBack,
    });
  }
}
