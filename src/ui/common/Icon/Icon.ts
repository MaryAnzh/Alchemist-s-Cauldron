import { ICON_PICKER } from '@constants';
import type { IconPickerType, ParentNodeType } from '@types';
import { Component } from '@ui';

export type IconProps = ParentNodeType & {
  className?: string;
  icon: IconPickerType;
  variant?: 'magic-icon' | 'magic';
  size?: 'sm' | 'md' | 'lg';
};

export class Icon extends Component {
  constructor({ parentNode, icon, className, variant, size }: IconProps) {
    super({
      parentNode,
      tagName: 'span',
      className: [
        'app-icon',
        className ?? '',
        variant ? `app-icon_${variant}` : '',
        size ? `app-icon_size-${size}` : '',
      ],
    });

    this.node.insertAdjacentHTML('beforeend', ICON_PICKER[icon]);
  }
}
