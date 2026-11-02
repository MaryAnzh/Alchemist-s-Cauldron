import type { ParentNodeType } from '@types';
import { Component } from '@ui';

const BLOCKS = [
  'summary',
  'difficulty',
  'chart',
  'recent',
  'reasons',
  'brews',
  'histogram',
  'candles',
  'heatmap',
] as const;

export class Statistics extends Component {
  constructor({ parentNode }: ParentNodeType) {
    super({ parentNode, tagName: 'section', className: 'app-statistics' });

    this.render();
  }

  render() {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-statistics_title',
      content: 'Statistics',
    });

    const grid = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_grid',
    });

    BLOCKS.forEach(
      (name) =>
        new Component({
          parentNode: grid.node,
          tagName: 'section',
          className: ['app-statistics_block', `app-statistics_block_${name}`],
        }),
    );
  }
}
