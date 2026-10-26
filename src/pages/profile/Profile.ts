import { router } from '@router';
import { ROUTES } from '@constants';
import type { ParentNodeType } from '@types';
import { Button, Component } from '@ui';

export class Profile extends Component {
  constructor({ parentNode }: ParentNodeType) {
    super({ parentNode, tagName: 'div', className: 'app-profile' });

    new Component({
      parentNode: this.node,
      tagName: 'h2',
      content: 'Profile',
    });

    new Button({
      parentNode: this.node,
      color: 'arrow-left',
      text: 'Back',
      onClick: () => router.navigate(ROUTES.HOME),
    });
  }
}
