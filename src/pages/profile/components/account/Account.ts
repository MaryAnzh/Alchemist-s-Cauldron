import type { ParentNodeType } from '@types';
import { Component } from '@ui';

export class Account extends Component {
  constructor({ parentNode }: ParentNodeType) {
    super({ parentNode, tagName: 'section', className: 'app-account' });

    this.render();
  }

  render() {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-account_title',
      content: 'Account',
    });
  }
}
