import { GAME_EVENTS } from '@constants';
import { store } from '@store';
import type { ParentNodeType, RecipeType } from '@types';
import { Component, RangeSlider } from '@ui';

type RangesProps = ParentNodeType & {
  ranges: RecipeType;
};

export class Ranges extends Component {
  ingredientsCountNode!: Component;
  temperature!: RangeSlider;
  density!: RangeSlider;
  magicPower!: RangeSlider;

  constructor({ parentNode, ranges }: RangesProps) {
    super({ parentNode, tagName: 'div', className: 'app-ranges' });

    store.subscribe(
      GAME_EVENTS.CAULDRON_STATE_CHANGED,
      ({ values: { temperature, density, magicPower } }) => {
        this.temperature.updateRange(temperature);
        this.density.updateRange(density);
        this.magicPower.updateRange(magicPower);
      },
    );

    this.render(ranges);
  }

  render(ranges: RecipeType) {
    this.temperature = new RangeSlider({
      parentNode: this.node,
      label: 'Temperature',
      range: { min: ranges.temperature.at(0) as number, max: ranges.temperature.at(1) as number },
      value: 0,
      icon: 'temperature',
    });

    this.density = new RangeSlider({
      parentNode: this.node,
      label: 'Density',
      range: { min: ranges.density.at(0) as number, max: ranges.density.at(1) as number },
      value: 0,
      icon: 'drop',
    });

    this.magicPower = new RangeSlider({
      parentNode: this.node,
      label: 'Magic Power',
      range: { min: ranges.magicPower.at(0) as number, max: ranges.magicPower.at(1) as number },
      value: 0,
      icon: 'magic',
    });
  }
}
