import { HOME, PAGE_ALIAS, ROUTER_EVENTS, ROUTES, ROUTES_MAP, TITLE } from '@constants';
import type { Router } from '@router';
import type { ParentNodeType, PageNameType } from '@types';
import { Button, Component } from '@ui';

type HeaderProps = ParentNodeType & {
  router: Router;
};

export class Header extends Component {
  router: Router;
  navListItems: { name: PageNameType; button: Button }[] = [];
  pageName!: Component;

  userName!: Component;
  userLogo!: Component;
  logoButton!: Button;

  constructor({ parentNode, router }: HeaderProps) {
    super({ parentNode, tagName: 'header', className: 'app-header' });
    this.router = router;

    this.router.subscribe(ROUTER_EVENTS.PATH_CHANGE, (path) => {
      const url = path as keyof typeof PAGE_ALIAS;
      const pageName = PAGE_ALIAS[url] ?? HOME;

      this.navListItems.forEach(({ button, name }) => {
        if (pageName === name) {
          button.setDisabled(true);
        } else {
          button.setDisabled(false);
        }
        const title = pageName === HOME ? TITLE : pageName;
        this.pageName.setContent(title);

        if (url === ROUTES[HOME]) {
          this.logoButton.node.style.pointerEvents = 'none';
        } else {
          this.logoButton.node.style.pointerEvents = 'auto';
        }
      });
    });

    this.render();
  }

  render() {
    const wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-header_wrap',
    });

    const url = this.router.current() as keyof typeof PAGE_ALIAS;
    const pageName = PAGE_ALIAS[url] ?? HOME;
    this.logoButton = new Button({
      parentNode: wrap.node,
      className: 'app-header_wrap_icon',
      leftIcon: 'symbol',
      variant: 'empty',
      onClick: () => {
        if (url === ROUTES[HOME]) {
          this.logoButton.node.style.pointerEvents = 'none';
        } else {
          this.logoButton.node.style.pointerEvents = 'auto';
        }
        this.router.navigate(ROUTES[HOME]);
      },
    });

    this.pageName = new Component({
      parentNode: wrap.node,
      tagName: 'h1',
      className: 'app-header_wrap_title',
      content: pageName === HOME ? TITLE : pageName,
    });

    const nav = new Component({
      parentNode: this.node,
      tagName: 'nav',
      className: 'app-header_nav',
    });
    const currentUrl = url;

    ROUTES_MAP.forEach(({ name, path }) => {
      const button = new Button({
        parentNode: nav.node,
        variant: 'empty',
        text: name,
        color: 'dark',
        onClick: () => {
          this.router.navigate(ROUTES[name]);
        },
        disabled: currentUrl === path ? 'disabled' : undefined,
      });
      this.navListItems.push({ name, button });
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
