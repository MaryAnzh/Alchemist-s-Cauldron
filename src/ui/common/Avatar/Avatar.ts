import { getAvatarSrc } from '@store';
import type { ParentNodeType, ProfileAvatarType } from '@types';
import { Component } from '@ui';

export type AvatarProps = ParentNodeType & { className?: string };

export class Avatar extends Component {
  constructor({ parentNode, className }: AvatarProps) {
    super({ parentNode, tagName: 'span', className: ['app-avatar', className ?? ''] });
  }

  setAvatar(avatar: ProfileAvatarType | null, name: string) {
    const src = getAvatarSrc(avatar);
    this.node.replaceChildren();

    if (src) {
      const img = document.createElement('img');
      img.className = 'app-avatar_img';
      img.src = src;
      img.alt = '';
      this.node.append(img);
      return;
    }

    this.node.textContent = name.charAt(0).toUpperCase() || '?';
  }
}
