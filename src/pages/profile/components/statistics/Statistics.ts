import type { ParentNodeType } from '@types';
import { Component } from '@ui';

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
  }
}
