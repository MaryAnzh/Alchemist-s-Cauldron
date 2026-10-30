import type { ParentNodeType } from '@types';
import { Button, Component } from '@ui';
import { SIDEBAR_ITEMS } from './constants';
import type { Router } from '@router';

type SidebarProps = ParentNodeType & {
  className: string;
  router: Router;
};

export class Sidebar extends Component {
  router: Router;

  constructor({ parentNode, className, router }: SidebarProps) {
    super({ parentNode, className: [className ? className : ''] });
    this.router = router;

    this.render();
  }

  render() {
    const listWrap = new Component({
      parentNode: this.node,
      tagName: 'ul',
      className: 'app-sidebar_list',
    });

    SIDEBAR_ITEMS.forEach(({ name, path }) => {
      const item = new Component({
        parentNode: listWrap.node,
        tagName: 'li',
        className: 'app-sidebar_list_item',
      });

      const current = this.router.current();
      new Button({
        parentNode: item.node,
        text: name,
        onClick: () => {
          this.router.navigate(path);
        },
        variant: 'empty',
        color: 'dark',
        size: 'md',
        disabled: current === path ? 'disabled' : undefined,
      });
    });
  }
}
