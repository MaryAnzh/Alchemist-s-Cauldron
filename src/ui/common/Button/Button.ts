import type { IconPickerType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { ICON_PICKER } from '@constants';

type ColorType = 'magic' | 'magic-icon' | 'arrow-right' | 'arrow-left' | 'magic-icon-2';

export type ButtonProps = ParentNodeType & {
  className?: string;
  variant?: 'empty';
  color?: ColorType;
  size?: 'sm' | 'md' | 'lg' | 'icon';
  corner?: 'full';
  text?: string;
  leftIcon?: IconPickerType;
  rightIcon?: IconPickerType;
  fullWidth?: 'fullWidth';
  disabled?: 'disabled';
  ariaLabel?: string;
  onClick?: () => void;
};

const classConverter = (arr: (string | undefined | null)[]): string[] =>
  arr.map((v) => (v ? `app_button_${v}` : undefined)).filter((v) => v !== undefined);

export class Button extends Component {
  private textNode: Component | null = null;
  private text: string | null;
  private leftIcon: IconPickerType | null = null;
  private rightIcon: IconPickerType | null = null;

  constructor({
    parentNode,
    className,
    variant,
    color,
    size,
    corner,
    text,
    leftIcon,
    rightIcon,
    fullWidth,
    disabled,
    ariaLabel,
    onClick,
  }: ButtonProps) {
    super({
      parentNode,
      tagName: 'button',
      className: [
        'app_button',
        ...(className ? [className] : []),
        ...classConverter([color, variant, size, corner, fullWidth]),
      ],
      attrs: { ariaLabel: ariaLabel ?? 'Button', disabled: disabled ? 'true' : null },
    });

    this.text = text ?? null;
    this.leftIcon = leftIcon ?? null;
    this.rightIcon = rightIcon ?? null;

    if (onClick) {
      this.node.onclick = () => onClick();
    }

    this.render();
  }

  private render() {
    if (this.leftIcon) {
      this.node.insertAdjacentHTML('beforeend', ICON_PICKER[this.leftIcon]);
      if (this.text) this.renderTextNode(this.text);
    }

    if (this.text && !this.textNode) {
      this.renderTextNode(this.text);
    }

    if (this.rightIcon) {
      this.node.insertAdjacentHTML('beforeend', ICON_PICKER[this.rightIcon]);
    }
  }

  private renderTextNode(text: string) {
    this.textNode = new Component({
      parentNode: this.node,
      className: 'app_button_text',
      tagName: 'span',
      content: text,
    });
  }

  public setLeftIcon(icon: IconPickerType) {
    if (!this.text) {
      this.node.innerHTML = '';
      this.node.insertAdjacentHTML('beforeend', ICON_PICKER[icon]);
    }
  }

  public setText(text: string) {
    if (this.textNode) this.textNode.setContent(text);
  }

  public setDisabled = (isDisabled: boolean) => {
    if (isDisabled) {
      this.node.setAttribute('disabled', 'true');
    } else {
      this.node.removeAttribute('disabled');
    }
  };

  destroy() {
    this.node.onclick = null;
    super.destroy();
  }
}
