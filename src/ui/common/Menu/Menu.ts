import * as C from '@constants';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Button, Component } from '@ui';
type PositionType = typeof C.TOP | typeof C.BOTTOM;

type MenuProps = ParentNodeType & {
  className?: string;
  position: PositionType;
};

export class Menu extends Component {
  position: PositionType;
  menuSettings = [
    { name: 'Difficulty', callback: () => {}, isDisabled: true },
    { name: 'Continue last game', callback: () => {}, isDisabled: true },
    { name: 'Start new game', callback: () => store.startNewGame(), isDisabled: false },
    { name: 'Leaderboard', callback: () => store.showLeaderboard(), isDisabled: false },
  ];
  dropdownList!: Component;
  isDropdownOpen = false;

  constructor({ parentNode, className, position }: MenuProps) {
    super({
      parentNode,
      tagName: 'div',
      className: ['app-menu', className ?? ''],
    });
    this.position = position;

    this.render();
  }

  render() {
    new Button({
      parentNode: this.node,
      color: 'magic-icon',
      leftIcon: 'settings',
      onClick: () => this.onToggle(),
    });
    this.dropdownList = new Component({
      parentNode: this.node,
      className: 'app-menu_dropdown',
      tagName: 'ul',
    });

    this.menuSettings.forEach(({ name, callback, isDisabled }) => {
      const li = new Component({
        parentNode: this.dropdownList.node,
        className: ['app-menu_dropdown_item', isDisabled ? 'app-menu_dropdown_item_disabled' : ''],
        tagName: 'li',
        content: name,
      });
      li.node.onclick = () => {
        this.onClose();
        callback();
      };
    });
  }
  onOpen() {
    this.isDropdownOpen = true;
    this.dropdownList.node.classList.add('app-menu_dropdown_open');
  }
  onClose() {
    this.isDropdownOpen = false;
    this.dropdownList.node.classList.remove('app-menu_dropdown_open');
  }
  onToggle() {
    if (this.isDropdownOpen) {
      this.onClose();
    } else {
      this.onOpen();
    }
  }

  destroy(): void {
    this.onClose();
    super.destroy();
  }
}
