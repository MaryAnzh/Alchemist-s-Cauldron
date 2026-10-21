import type { ParentNodeType } from '@types';
import { Button, Component, Icon } from '@ui';
import { arrayFromNumber, formatTime } from '@utils';

type InfoProps = ParentNodeType & {
  variant: 'success' | 'fail';
  score: number;
  lives: number;
  timeLeft: number;
  onClose: () => void;
};

export class Info extends Component {
  constructor({ parentNode, lives, score, timeLeft, variant, onClose }: InfoProps) {
    super({ parentNode, tagName: 'div', className: 'app-info' });

    this.render(variant, score, lives, timeLeft, onClose);
  }

  render(
    variant: 'success' | 'fail',
    score: number,
    lives: number,
    timeLeft: number,
    onClose: () => void,
  ) {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-info_title',
      content:
        variant === 'success'
          ? 'You have prepared a magical potion!'
          : 'Wrong mixture, try again...',
    });

    const list = new Component({
      parentNode: this.node,
      tagName: 'ul',
      className: 'app-info_list',
    });
    [
      { name: 'Score', value: score },
      { name: 'lives', value: lives },
      { name: 'Time left', value: timeLeft },
    ].forEach(({ name, value }) => {
      const item = new Component({
        parentNode: list.node,
        tagName: 'li',
        className: 'app-info_list_item',
      });
      new Component({
        parentNode: item.node,
        tagName: 'span',
        className: 'app-info_list_item_name',
        content: `${name}: `,
      });
      if (name === 'lives') {
        arrayFromNumber(value).forEach(() => {
          new Icon({
            parentNode: item.node,
            icon: 'stroke_heart',
            className: 'app-info_list_item_icon',
          });
        });
        return;
      }
      new Component({
        parentNode: item.node,
        tagName: 'span',
        className: 'app-info_list_item_name',
        content: name === 'Time left' ? formatTime(value) : value.toString(),
      });
    });
    const btn = new Button({
      parentNode: this.node,
      className: 'app-info_btn',
      text: 'Continue',
      color: 'magic',
    });
    btn.node.onclick = () => onClose();
  }
}
