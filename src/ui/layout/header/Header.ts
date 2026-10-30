import {
  GAME_EVENTS,
  getSection,
  HOME,
  MENU,
  ROUTER_EVENTS,
  ROUTES,
  ROUTES_MAP,
  TITLE,
} from '@constants';
import type { Router } from '@router';
import { store } from '@store';
import type { ParentNodeType, PageNameType } from '@types';
import { Button, Component, Avatar } from '@ui';

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
  nameButton!: Button;
  resetProfileButton!: Button;
  avatar!: Avatar;

  constructor({ parentNode, router }: HeaderProps) {
    super({ parentNode, tagName: 'header', className: 'app-header' });
    this.router = router;

    this.router.subscribe(ROUTER_EVENTS.PATH_CHANGE, () => {
      this.syncNav();
      this.syncButtons();
    });

    const sync = () => this.syncButtons();
    store.subscribe(GAME_EVENTS.GAME_START, sync);
    store.subscribe(GAME_EVENTS.GAME_OVER, sync);
    store.subscribe(GAME_EVENTS.MENU_SHOWN, sync);
    store.subscribe(GAME_EVENTS.PLAYER_NAME_CHANGED, ({ name }) => {
      if (!this.node.isConnected) return;
      this.userName.setContent(name || 'Incognito');
      this.nameButton.setText(name ? 'Change name' : 'Enter name');
      this.syncButtons();
      this.syncAvatar();
    });

    store.subscribe(GAME_EVENTS.PLAYER_AVATAR_CHANGED, () => {
      if (!this.node.isConnected) return;
      this.syncAvatar();
    });

    this.render();
  }

  render() {
    const wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-header_wrap',
    });

    const section = getSection(this.router.current())?.name ?? HOME;

    this.logoButton = new Button({
      parentNode: wrap.node,
      className: 'app-header_wrap_icon',
      leftIcon: 'symbol',
      variant: 'empty',
      onClick: () => this.router.navigate(ROUTES[HOME]),
    });

    this.pageName = new Component({
      parentNode: wrap.node,
      tagName: 'h1',
      className: 'app-header_wrap_title',
    });

    const nav = new Component({
      parentNode: this.node,
      tagName: 'nav',
      className: 'app-header_nav',
    });

    ROUTES_MAP.forEach(({ name, path }) => {
      const isActive = name === section;
      const button = new Button({
        parentNode: nav.node,
        className: 'app-header_nav_item',
        variant: 'empty',
        text: name,
        color: 'dark',
        onClick: () => this.router.navigate(path),
      });
      button.node.classList.toggle('app-header_nav_item_active', isActive);
      this.navListItems.push({ name, button });
    });

    const user = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-header_user',
    });

    this.avatar = new Avatar({ parentNode: user.node, className: 'app-header_user_logo' });

    this.userName = new Component({
      parentNode: user.node,
      tagName: 'span',
      className: 'app-header_user_name',
      content: store.getUserName() || 'Incognito',
    });

    this.userLogo = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-header_user-logo',
    });

    this.nameButton = new Button({
      parentNode: this.node,
      className: 'app-header_name-button',
      color: 'dark',
      text: store.getUserName() ? 'Change name' : 'Enter name',
      onClick: () => store.requestNameDialog(),
    });

    this.resetProfileButton = new Button({
      parentNode: this.node,
      className: 'app-header_reset-button',
      color: 'dark',
      text: 'Remove profile',
      onClick: () => store.removeUserProfile(),
    });
    this.syncButtons();
    this.syncNav();
    this.syncAvatar();
  }

  private syncButtons() {
    const onStart = this.router.current() === ROUTES[HOME] && store.getState().status === MENU;
    const isIncognito = store.isIncognito();

    this.nameButton.setHidden(!onStart);
    this.resetProfileButton.setHidden(!onStart || isIncognito);
    const profileItem = this.navListItems[1];
    profileItem?.button.setDisabled(isIncognito);
  }

  private syncNav() {
    const section = getSection(this.router.current())?.name ?? HOME;

    this.navListItems.forEach(({ button, name }) => {
      const isActive = name === section;
      button.node.classList.toggle('app-header_nav_item_active', isActive);
      button.node.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    this.pageName.setContent(section === HOME ? TITLE : section);
    this.logoButton.node.classList.toggle('app-header_wrap_icon_disabled', section === HOME);
  }

  private syncAvatar() {
    this.avatar.setAvatar(store.getUserAvatar(), store.getUserName() ?? '');
  }

  destroy(): void {
    super.destroy();
  }
}
