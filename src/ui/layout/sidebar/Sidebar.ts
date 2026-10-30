import type { ParentNodeType } from '@types';
import { Button, Component, Icon, MiniCauldron } from '@ui';
import { SIDEBAR_ITEMS } from './constants';
import type { Router } from '@router';

type SidebarProps = ParentNodeType & {
  className: string;
  router: Router;
};

export class Sidebar extends Component {
  router: Router;

  constructor({ parentNode, className, router }: SidebarProps) {
    super({ parentNode, className: [className ? className : '', 'app-sidebar'] });
    this.router = router;

    this.render();
  }

  render() {
    new Icon({
      parentNode: this.node,
      icon: 'symbol',
      className: 'app-sidebar_icon',
    });

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
        color: 'link',
        disabled: current === path ? 'disabled' : undefined,
      });
    });
    const cauldronWrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-sidebar_cauldron',
    });

    new MiniCauldron({
      parentNode: cauldronWrap.node,
    });
  }
}
