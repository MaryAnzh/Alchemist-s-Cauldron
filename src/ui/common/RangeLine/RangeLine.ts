import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';
import { arrayFromNumber } from '@utils';

type RangeLineProps = ParentNodeType & {
  rangeMin: number;
  rangeMax: number;
  value: number;
  step?: number;
};

export class RangeLine extends Component {
  rangeNem = 7;
  step = 10;
  rangeZone = this.rangeNem * this.step;
  rangeZoneOnePercent = this.rangeZone / 100;
  value = 0;

  leftStopper!: Icon;
  rightStopper!: Icon;
  arrow!: Icon;
  min!: number;
  max!: number;

  constructor({ parentNode, rangeMax, rangeMin, value }: RangeLineProps) {
    super({ parentNode, tagName: 'span', className: 'app-range-line' });

    this.render(rangeMax, rangeMin, value);
  }

  render(rangeMax: number, rangeMin: number, value: number) {
    const scale = this.generateScale(rangeMin, rangeMax);
    this.min = scale.at(0) ?? 0;
    this.max = scale.at(-1) ?? this.rangeNem * this.step;

    this.leftStopper = new Icon({
      parentNode: this.node,
      className: this.setClass('left-stop'),
      icon: 'stop',
    });
    this.leftStopper.node.style.left = this.getStopperPosition(rangeMin);

    this.arrow = new Icon({
      parentNode: this.node,
      className: this.setClass('arrow'),
      icon: 'arrow',
    });
    this.arrow.node.style.left = this.getStopperPosition(value);

    this.rightStopper = new Icon({
      parentNode: this.node,
      className: this.setClass('right-stop'),
      icon: 'stop',
    });
    this.rightStopper.node.style.left = this.getStopperPosition(rangeMax);

    const stopNumLeft = new Component({
      parentNode: this.node,
      tagName: 'span',
      className: this.setClass('stop-num-left'),
      content: rangeMin.toString(),
    });
    stopNumLeft.node.style.left = this.getStopperPosition(rangeMin);

    const stopNumRight = new Component({
      parentNode: this.node,
      tagName: 'span',
      className: this.setClass('stop-num-right'),
      content: rangeMax.toString(),
    });
    stopNumRight.node.style.left = this.getStopperPosition(rangeMax);

    const line = new Component({ parentNode: this.node, className: this.setClass('count') });
    scale.forEach((el, i) => {
      const nem = new Component({
        parentNode: line.node,
        tagName: 'span',
        content: el.toString(),
      });
      if (i > 0 && i < scale.length - 1) {
        nem.node.style.left = this.getStopperPosition(el);
      }
    });
  }

  setClass(name: string) {
    return `app-range-line_${name}`;
  }

  getStopperPosition(value: number): string {
    const range = this.max - this.min;

    const percent = (value - this.min) / range;
    return `${percent * 100}%`;
  }

  roundToStep(n: number) {
    return Math.round(n / this.step) * this.step;
  }

  private generateScale(rangeMin: number, rangeMax: number): number[] {
    const half = 2;
    const midRaw = (rangeMin + rangeMax) / half;
    const mid = this.roundToStep(midRaw);

    let count = this.rangeNem;
    let arr = arrayFromNumber(count, mid - Math.floor(count / 2) * this.step, this.step);

    while (arr[0] > 0 || arr[arr.length - 1] < 0) {
      count += 1;
      arr = arrayFromNumber(count, mid - Math.floor(count / 2) * this.step, this.step);
    }
    this.rangeNem = count;

    return arr;
  }

  public updateRange = (value: number) => {
    this.arrow.node.style.left = this.getStopperPosition(value);
  };
}
