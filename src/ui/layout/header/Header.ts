import { ROUTES, ROUTES_MAP } from '@constants';
import type { Router } from '@router';
import type { ParentNodeType } from '@types';
import { Button, Component } from '@ui';

type HeaderProps = ParentNodeType & {
  router: Router;
};

export class Header extends Component {
  router: Router;

  userName!: Component;
  userLogo!: Component;

  constructor({ parentNode, router }: HeaderProps) {
    super({ parentNode, tagName: 'header', className: 'app-header' });

    this.router = router;

    this.render();
  }

  render() {
    const nav = new Component({
      parentNode: this.node,
      tagName: 'nav',
      className: 'app-header_nav',
    });
    ROUTES_MAP.forEach(({ name }) => {
      new Button({
        parentNode: nav.node,
        variant: 'empty',
        text: name,
        color: 'dark',
        onClick: () => this.router.navigate(ROUTES[name]),
      });
    });

    const user = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-header_user',
    });

    new Component({
      parentNode: user.node,
      tagName: 'span',
      className: 'app-header_user_logo',
    });

    this.userName = new Component({
      parentNode: user.node,
      tagName: 'span',
      className: 'app-header_user_name',
      content: 'Incognito',
    });

    this.userLogo = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-header_user-logo',
    });
  }
}
