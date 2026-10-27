import { HOME, ROUTES } from '@constants';
import type { Router } from '@router';
import type { ParentNodeType } from '@types';
import { Button, Component } from '@ui';

type ProfileProps = ParentNodeType & {
  router: Router;
};

export class Profile extends Component {
  private router: Router;

  constructor({ parentNode, router }: ProfileProps) {
    super({ parentNode, tagName: 'div', className: 'app-profile' });
    this.router = router;

    new Component({
      parentNode: this.node,
      tagName: 'h2',
      content: 'Profile',
    });

    new Button({
      parentNode: this.node,
      color: 'arrow-left',
      text: 'Back',
      onClick: () => this.router.navigate(ROUTES[HOME]),
    });
  }
}
