import type { IconPickerType, ParentNodeType } from '@types';
import { Component, Icon } from '@ui';
import { RangeLine } from '../RangeLine/RangeLine';

type RangeSliderProps = ParentNodeType & {
  label: string;
  range: { min: number; max: number };
  value: number;
  icon: IconPickerType;
};

export class RangeSlider extends Component {
  nodeClassName = 'app-range-slider';
  range: { min: number; max: number };
  value: number = 0;

  constructor({ parentNode, label, range, value, icon }: RangeSliderProps) {
    super({ parentNode, tagName: 'div', className: 'app-range-slider' });
    this.range = range;
    this.value = value;

    this.render(label, icon);
  }

  render(label: string, icon: IconPickerType) {
    new Icon({
      parentNode: this.node,
      icon,
      variant: 'magic-icon',
      className: this.setClassName('icon'),
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      content: label,
      className: this.setClassName('title'),
    });
    new RangeLine({
      parentNode: this.node,
      rangeMax: this.range.max,
      rangeMin: this.range.min,
      value: 4,
    });
  }

  setClassName = (name: string) => `${this.nodeClassName}_${name}`;
}
