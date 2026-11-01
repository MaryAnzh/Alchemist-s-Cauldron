import {
  getAvatarFileError,
  getAvatarSrc,
  getPlayerNameError,
  isValidAvatarUrl,
  store,
} from '@store';
import type { ParentNodeType, ProfileAvatarType } from '@types';
import { AVATAR_MIME_TYPES, URL_ERROR } from '@constants';
import { Avatar, Button, Component, Input } from '@ui';

const readFileAsDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const validateUrl = (value: string) => (!value || isValidAvatarUrl(value) ? '' : URL_ERROR);

export class Account extends Component {
  private avatar!: Avatar;
  private avatarBox!: Component;
  private removeButton!: Button;
  private applyUrlButton!: Button;
  private fileInput!: Component;
  private urlInput!: Input;
  private nameBlock!: Component;
  private nameInput: Input | null = null;
  private editButton: Button | null = null;
  private saveButton: Button | null = null;
  private message!: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({ parentNode, tagName: 'section', className: 'app-account' });

    document.addEventListener('click', this.onDocumentClick, true);
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
      validate: validateUrl,
    });
    this.applyUrlButton = new Button({
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

  private destroyNameControls() {
    this.nameInput?.destroy();
    this.saveButton?.destroy();
    this.editButton?.destroy();
    this.nameInput = null;
    this.saveButton = null;
    this.editButton = null;
  }

  private renderName(editing: boolean) {
    this.destroyNameControls();
    this.nameBlock.node.replaceChildren();

    if (editing) {
      this.nameInput = new Input({
        parentNode: this.nameBlock.node,
        placeholder: 'Name (2–15 characters)',
        maxlength: '15',
        className: 'app-account_name_input',
        value: store.getUserName() ?? '',
        validate: getPlayerNameError,
      });
      const input = this.nameInput.getInput().node;
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.saveName();
        if (e.key === 'Escape') this.renderName(false);
      });
      this.saveButton = new Button({
        parentNode: this.nameBlock.node,
        className: 'app-account_name_save',
        color: 'magic-icon-2',
        variant: 'empty',
        leftIcon: 'save',
        onClick: () => this.saveName(),
      });
      this.nameInput.getInput().node.focus();
      return;
    }

    new Component({
      parentNode: this.nameBlock.node,
      tagName: 'span',
      className: 'app-account_name',
      content: store.getUserName() || 'Incognito',
    });
    this.editButton = new Button({
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
    const error = getPlayerNameError(name);
    this.nameInput.setError(error);
    if (error) return;
    if (!this.save(() => store.setUserName(name))) return;

    this.renderName(false);
  }

  private applyUrl() {
    const url = this.urlInput.getValue();
    const error = url ? validateUrl(url) : URL_ERROR;
    this.urlInput.setError(error);
    if (error) return;

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

  private onDocumentClick = () => {
    this.message.setContent('');
  };

  destroy() {
    document.removeEventListener('click', this.onDocumentClick, true);

    this.destroyNameControls();
    this.removeButton.destroy();
    this.applyUrlButton.destroy();
    this.urlInput.destroy();

    super.destroy();
  }
}
