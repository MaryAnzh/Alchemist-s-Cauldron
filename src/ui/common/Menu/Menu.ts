import * as C from '@constants';
import type { ParentNodeType, IconPickerType } from '@types';
import { Button, Component } from '@ui';

type PositionType = typeof C.TOP | typeof C.BOTTOM;

export type MenuItem = {
  name: string;
  callback: () => void;
  isDisabled?: boolean;
};

type MenuProps = ParentNodeType & {
  className?: string;
  position?: PositionType;
  triggerIcon: IconPickerType;
  items?: MenuItem[];
  nodes?: Component[];
};

export class Menu extends Component {
  // private position: PositionType;
  private triggerIcon: IconPickerType;
  private items: MenuItem[] = [];
  // private nodes: Component[] = [];

  private dropdownList!: Component;
  private isDropdownOpen = false;

  constructor({ parentNode, className, triggerIcon, items }: MenuProps) {
    super({
      parentNode,
      tagName: 'div',
      className: ['app-menu', className ?? ''],
    });

    this.triggerIcon = triggerIcon;
    this.items = items ?? [];

    document.addEventListener('resize', () => {
      this.onClose();
    });
    document.addEventListener('click', this.handleOutsideClick);

    this.render();
  }

  private handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node;

    if (!this.node.contains(target)) {
      this.onClose();
    }
  };

  render() {
    new Button({
      parentNode: this.node,
      color: 'magic-icon',
      leftIcon: this.triggerIcon,
      onClick: () => this.onToggle(),
    });

    this.dropdownList = new Component({
      parentNode: this.node,
      className: 'app-menu_dropdown',
      tagName: 'ul',
    });
    if (this.items.length > 0) {
      this.items.forEach(({ name, callback, isDisabled }) => {
        const li = new Component({
          parentNode: this.dropdownList.node,
          tagName: 'li',
          className: [
            'app-menu_dropdown_item',
            isDisabled ? 'app-menu_dropdown_item_disabled' : '',
          ],
          content: name,
        });

        li.node.onclick = () => {
          if (isDisabled) return;

          this.onClose();
          callback();
        };
      });
    }
  }

  private updatePosition() {
    const padding = 24;
    const dropdown = this.dropdownList.node;
    const dropdownRect = dropdown.getBoundingClientRect();
    const wrapRect = document.querySelector('#app')?.getBoundingClientRect();

    dropdown.classList.remove('app-menu_dropdown_top', 'app-menu_dropdown_bottom');

    dropdown.classList.add('app-menu_dropdown_top');

    if (!wrapRect) {
      return;
    }
    const rightPos = wrapRect.width - padding - dropdownRect.right;

    if (rightPos < 0) {
      dropdown.style.left = dropdownRect.left + rightPos - dropdownRect.width / 2 + 'px';
    }
  }

  onOpen() {
    this.isDropdownOpen = true;

    this.dropdownList.node.classList.add('app-menu_dropdown_open');

    this.updatePosition();
  }

  onClose() {
    this.isDropdownOpen = false;

    this.dropdownList.node.classList.remove('app-menu_dropdown_open');

    document.removeEventListener('click', this.handleOutsideClick);
  }

  onToggle() {
    if (this.isDropdownOpen) {
      this.onClose();
      return;
    }

    this.onOpen();
  }

  destroy(): void {
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('resize', this.onClose);

    this.onClose();

    super.destroy();
  }
}
