import type { ParentNodeType, RecipeType } from '@types';
import { Component, RangeSlider } from '@ui';

type RangesProps = ParentNodeType & {
  ranges: RecipeType;
};

export class Ranges extends Component {
  ingredientsCountNode!: Component;

  constructor({ parentNode, ranges }: RangesProps) {
    super({ parentNode, tagName: 'div', className: 'app-ranges' });

    this.render(ranges);
  }

  render(ranges: RecipeType) {
    new RangeSlider({
      parentNode: this.node,
      label: 'Temperature',
      range: { min: ranges.temperature.at(0) as number, max: ranges.temperature.at(1) as number },
      value: 10,
      icon: 'symbol',
    });

    new RangeSlider({
      parentNode: this.node,
      label: 'Density',
      range: { min: ranges.density.at(0) as number, max: ranges.density.at(1) as number },
      value: 2,
      icon: 'symbol',
    });

    new RangeSlider({
      parentNode: this.node,
      label: 'Magic Power',
      range: { min: ranges.magicPower.at(0) as number, max: ranges.magicPower.at(1) as number },
      value: 10,
      icon: 'symbol',
    });
  }
}
