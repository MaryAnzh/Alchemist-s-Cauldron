import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';

type RangeLineProps = ParentNodeType & {
  rangeMin: number;
  rangeMax: number;
  value: number;
  step?: number;
};

export class RangeLine extends Component {
  step = 5;
  constructor({ parentNode, rangeMax, rangeMin, step = 5 }: RangeLineProps) {
    super({ parentNode, tagName: 'span', className: 'app-range-line' });
    this.step = step;

    this.render(rangeMax, rangeMin);
  }

  render(rangeMax: number, rangeMin: number) {
    new Icon({
      parentNode: this.node,
      className: this.setClass('left-stop'),
      icon: 'stop',
    });

    new Icon({
      parentNode: this.node,
      className: this.setClass('arrow'),
      icon: 'arrow',
    });

    new Icon({
      parentNode: this.node,
      className: this.setClass('right-stop'),
      icon: 'stop',
    });
  }

  setClass(name: string) {
    return `app-range-line_${name}`;
  }
}
