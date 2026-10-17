import { ICON_PICKER } from '@constants';
import type { IconPickerType, ParentNodeType } from '@types';
import { Component } from '@ui';

export type IconProps = ParentNodeType & {
  className?: string;
  icon: IconPickerType;
  variant?: 'magic-icon' | 'magic';
};

export class Icon extends Component {
  constructor({ parentNode, icon, className, variant }: IconProps) {
    super({
      parentNode,
      tagName: 'span',
      className: ['app-icon', className ?? '', variant ? `app-icon_${variant}` : ''],
    });

    this.node.insertAdjacentHTML('beforeend', ICON_PICKER[icon]);
  }
}
