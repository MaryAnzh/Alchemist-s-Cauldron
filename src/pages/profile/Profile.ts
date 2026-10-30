import { ACCOUNT, ROUTES } from '@constants';
import type { Router, RoutePath } from '@router';
import type { ParentNodeType } from '@types';
import { Component, Sidebar } from '@ui';
import { Account, Statistics } from './components';

type ProfileProps = ParentNodeType & {
  router: Router;
  route: RoutePath;
};

export class Profile extends Component {
  private router: Router;
  private route: RoutePath;

  constructor({ parentNode, router, route }: ProfileProps) {
    super({ parentNode, tagName: 'div', className: 'app-profile' });
    this.router = router;
    this.route = route;

    this.render();
  }

  render() {
    new Sidebar({
      parentNode: this.node,
      className: 'app-profile_sidebar',
      router: this.router,
    });

    const content = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-profile_content',
    });

    if (this.route === ROUTES[ACCOUNT]) {
      new Account({ parentNode: content.node });
    } else {
      new Statistics({ parentNode: content.node });
    }
  }
}
