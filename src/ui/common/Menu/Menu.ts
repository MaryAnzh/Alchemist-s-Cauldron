import * as C from '@constants';
import { store } from '@store';
import type { ParentNodeType, IconPickerType, GameDifficultType } from '@types';
import { Button, Component } from '@ui';

type PositionType = typeof C.TOP | typeof C.BOTTOM;

type MenuProps = ParentNodeType & {
  className?: string;
  position?: PositionType;
  triggerIcon: IconPickerType;
  nodes?: Component[];
};

export class Menu extends Component {
  private triggerIcon: IconPickerType;
  menuSettings = [
    {
      name: C.DIFFICULTY,
      callback: (difficulty: GameDifficultType) => store.changeDifficulty(difficulty),
    },
    { name: C.CONTINUE_GAME, callback: () => store.continueLastGame() },
    { name: C.START_NEW_GAME, callback: () => store.startNewGame() },
    { name: C.SHOW_LEADERBOARD, callback: () => store.showLeaderboard() },
  ];
  private difficultyRadios: { name: GameDifficultType; radio: HTMLElement }[] = [];

  private dropdownList!: Component;
  private isDropdownOpen = false;
  private onWindowResize = () => {
    this.onClose();
  };

  constructor({ parentNode, className, triggerIcon }: MenuProps) {
    super({
      parentNode,
      tagName: 'div',
      className: ['app-menu', className ?? ''],
    });

    this.triggerIcon = triggerIcon;

    window.addEventListener('resize', this.onWindowResize);

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
      className: ['app-menu_dropdown', 'app-menu_dropdown_top'],
      tagName: 'ul',
    });

    this.menuSettings.forEach(({ name, callback }) => {
      const { difficulty, status } = store.getState();

      if (name === C.DIFFICULTY) {
        const li = new Component({
          parentNode: this.dropdownList.node,
          tagName: 'li',
          className: [
            'app-menu_dropdown_item_radios',
            'app-menu_dropdown_item',
            status !== C.MENU ? 'app-menu_dropdown_item_disabled' : '',
          ],
        });
        new Component({
          parentNode: li.node,
          tagName: 'span',
          content: `${name}: `,
        });
        [C.EASY, C.MEDIUM, C.HARD].forEach((el) => {
          const isSelected = difficulty === el;

          const radioBtn = new Component({
            parentNode: li.node,
            tagName: 'button',
            className: `app-menu_dropdown_item_radios_radio`,
          });
          radioBtn.node.onclick = () => {
            this.difficultyRadios.forEach(({ radio, name }) => {
              if (name === el) {
                radio.classList.add('app-menu_dropdown_item_radios_radio_selected');
              } else {
                radio.classList.remove('app-menu_dropdown_item_radios_radio_selected');
              }
            });
            this.onChangeDifficulty(el);
          };
          const check = new Component({
            parentNode: radioBtn.node,
            tagName: 'span',
            className: isSelected ? `app-menu_dropdown_item_radios_radio_selected` : undefined,
          });

          this.difficultyRadios.push({
            name: el,
            radio: check.node,
          });
        });
        return;
      }

      const li = new Component({
        parentNode: this.dropdownList.node,
        tagName: 'li',
        className: ['app-menu_dropdown_item'],
        content: name,
      });
      if (
        name === C.CONTINUE_GAME &&
        (status === C.PLAYING || !store.loadFromStorage('GAME_STATE'))
      ) {
        li.node.classList.add('app-menu_dropdown_item_disabled');
        return;
      }

      if (name === C.START_NEW_GAME && status === 'playing') {
        li.node.classList.add('app-menu_dropdown_item_disabled');
        return;
      }

      li.node.onclick = () => {
        this.onClose();
        const f = callback as () => void;
        f();
      };
    });
  }

  private updatePosition() {
    const padding = 24;
    const dropdown = this.dropdownList.node;
    const wrapRect = document.querySelector('#app')?.getBoundingClientRect();

    if (!wrapRect) {
      return;
    }

    // Сбрасываем инлайновый стиль перед замером, чтобы он не искажал повторное открытие
    dropdown.style.left = '';

    const dropdownRect = dropdown.getBoundingClientRect();

    // Проверяем, вылазит ли дропдаун за правый край контейнера/экрана с учетом отступа
    const overflowRight = dropdownRect.right - (wrapRect.right - padding);

    if (overflowRight > 0) {
      // Сдвигаем влево на величину переполнения + запас padding
      const currentLeft = parseInt(window.getComputedStyle(dropdown).left) || dropdown.offsetLeft;
      dropdown.style.left = `${currentLeft - overflowRight - padding}px`;
    }
  }

  onOpen() {
    this.isDropdownOpen = true;

    this.dropdownList.node.classList.add('app-menu_dropdown_open');

    this.updatePosition();
    document.addEventListener('click', this.handleOutsideClick);
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

  onChangeDifficulty(d: GameDifficultType) {
    store.changeDifficulty(d);
  }

  destroy(): void {
    document.removeEventListener('click', this.handleOutsideClick);
    window.removeEventListener('resize', this.onWindowResize);

    this.onClose();
    super.destroy();
  }
}
