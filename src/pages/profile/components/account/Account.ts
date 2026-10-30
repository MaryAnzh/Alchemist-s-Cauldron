import {
  getAvatarFileError,
  getAvatarSrc,
  isValidAvatarUrl,
  isValidPlayerName,
  store,
} from '@store';
import type { ParentNodeType, ProfileAvatarType } from '@types';
import { AVATAR_MIME_TYPES } from '@constants';
import { Avatar, Button, Component, Input } from '@ui';

const readFileAsDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

export class Account extends Component {
  private avatar!: Avatar;
  private avatarBox!: Component;
  private removeButton!: Button;
  private fileInput!: Component;
  private urlInput!: Input;
  private nameBlock!: Component;
  private nameInput: Input | null = null;
  private message!: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({ parentNode, tagName: 'section', className: 'app-account' });

    this.render();
  }

  render() {
    const avatarCol = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-account_avatar',
    });

    this.avatarBox = new Component({
      parentNode: avatarCol.node,
      tagName: 'div',
      className: 'app-account_avatar_box',
    });
    this.avatar = new Avatar({
      parentNode: this.avatarBox.node,
      className: 'app-account_avatar_img',
    });

    this.avatarBox.node.addEventListener('click', () => this.fileInput.node.click());
    this.avatarBox.node.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.avatarBox.node.classList.add('is-dragover');
    });
    this.avatarBox.node.addEventListener('dragleave', () => {
      this.avatarBox.node.classList.remove('is-dragover');
    });
    this.avatarBox.node.addEventListener('drop', (e) => {
      e.preventDefault();
      this.avatarBox.node.classList.remove('is-dragover');
      const file = e.dataTransfer?.files[0];
      if (file) void this.handleFile(file);
    });

    this.removeButton = new Button({
      parentNode: avatarCol.node,
      className: 'app-account_avatar_remove',
      color: 'magic-icon-2',
      leftIcon: 'trash',
      onClick: () => this.removeAvatar(),
    });

    this.fileInput = new Component({
      parentNode: avatarCol.node,
      tagName: 'input',
      className: 'app-account_file',
      attrs: { type: 'file', accept: AVATAR_MIME_TYPES.join(',') },
    });
    this.fileInput.node.addEventListener('change', () => {
      const input = this.fileInput.node as HTMLInputElement;
      const file = input.files?.[0];
      input.value = '';
      if (file) void this.handleFile(file);
    });

    const urlBlock = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-account_url',
    });
    this.urlInput = new Input({
      parentNode: urlBlock.node,
      placeholder: 'https://… image link',
      maxlength: '2048',
      className: 'app-account_url_input',
    });
    new Button({
      parentNode: urlBlock.node,
      text: 'Use URL',
      color: 'link',
      onClick: () => this.applyUrl(),
    });

    this.nameBlock = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-account_name_block',
    });
    this.renderName(false);

    this.message = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-account_message',
      content: '',
    });

    this.syncAvatar();
  }

  private syncAvatar() {
    const avatar = store.getUserAvatar();
    this.avatar.setAvatar(avatar, store.getUserName() ?? '');
    this.removeButton.setHidden(getAvatarSrc(avatar) === null);
  }

  private renderName(editing: boolean) {
    this.nameBlock.node.replaceChildren();
    this.nameInput = null;

    if (editing) {
      this.nameInput = new Input({
        parentNode: this.nameBlock.node,
        placeholder: 'Name (2–15 characters)',
        maxlength: '15',
        className: 'app-account_name_input',
        value: store.getUserName() ?? '',
      });
      const input = this.nameInput.getInput().node;
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.saveName();
        if (e.key === 'Escape') this.renderName(false);
      });
      new Button({
        parentNode: this.nameBlock.node,
        className: 'app-account_name_save',
        variant: 'empty',
        leftIcon: 'save',
        onClick: () => this.saveName(),
      });
      input.focus();
      return;
    }

    new Component({
      parentNode: this.nameBlock.node,
      tagName: 'span',
      className: 'app-account_name',
      content: store.getUserName() || 'Incognito',
    });
    new Button({
      parentNode: this.nameBlock.node,
      className: 'app-account_name_edit',
      color: 'magic-icon-2',
      leftIcon: 'edit',
      onClick: () => this.renderName(true),
    });
  }

  private saveName() {
    if (!this.nameInput) return;
    const name = this.nameInput.getValue();

    if (!isValidPlayerName(name)) {
      this.nameInput.setError('2–15 characters: letters, digits, spaces, "_" or "-"');
      return;
    }
    if (!this.save(() => store.setUserName(name))) return;

    this.renderName(false);
  }

  private applyUrl() {
    const url = this.urlInput.getValue();

    if (!isValidAvatarUrl(url)) {
      this.urlInput.setError('Enter an https:// image link');
      return;
    }
    this.urlInput.setError('');
    this.saveAvatar({ kind: 'url', url });
  }

  private async handleFile(file: File) {
    const error = getAvatarFileError(file);
    if (error) {
      this.message.setContent(error);
      return;
    }
    const dataUrl = await readFileAsDataUrl(file);
    this.saveAvatar({ kind: 'image', dataUrl });
  }

  private saveAvatar(avatar: ProfileAvatarType) {
    if (!this.save(() => store.setUserAvatar(avatar))) return;
    this.urlInput.clear();
    this.syncAvatar();
  }

  private removeAvatar() {
    if (!this.save(() => store.removeUserAvatar())) return;
    this.syncAvatar();
  }

  private save(action: () => boolean): boolean {
    this.message.setContent('');
    try {
      const ok = action();
      if (!ok) this.message.setContent('Could not save');
      return ok;
    } catch (error) {
      this.message.setContent(error instanceof Error ? error.message : 'Could not save');
      return false;
    }
  }
}
