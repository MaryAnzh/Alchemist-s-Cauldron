import type { ParentNodeType } from '@types';
import * as C from '@constants';
import { Input, Component, Button } from '@ui';
import { isValidPlayerName } from '@store';

type UsernameFormProps = ParentNodeType & {
  onSubmit: (name: string) => boolean;
  onSkip: () => void;
};
export class UserNameForm extends Component {
  inputNode!: Input;
  name = '';
  submit!: Button;
  cancel!: Button;
  onSubmit: (name: string) => boolean;
  onSkip: () => void;

  constructor({ parentNode, onSkip, onSubmit }: UsernameFormProps) {
    super({ parentNode, className: 'app-user-name-form', tagName: 'form' });
    this.onSubmit = onSubmit;
    this.onSkip = onSkip;

    this.render();

    this.node.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  render() {
    new Component({
      parentNode: this.node,
      className: 'app-user-name-form_title',
      tagName: 'h2',
      content: C.ENTER_NAME,
    });
    new Component({
      parentNode: this.node,
      className: 'app-user-name-form_subtitle',
      tagName: 'p',
      content: C.NAME_DIALOG_SUBTITLE,
    });

    this.inputNode = new Input({
      parentNode: this.node,
      placeholder: C.INPUT_PLACEHOLDER,
      maxlength: '15',
      className: 'app-user-name-form_input',
    });

    this.inputNode.onInput((value) => {
      this.validateName(value);
    });

    this.cancel = new Button({
      parentNode: this.node,
      className: 'app-user-name-form_cancel',
      text: 'Cancel',
      size: 'sm',
      onClick: () => this.onSkip(),
      color: 'arrow-left',
      ariaLabel: 'button',
    });
    this.cancel.setAttributes({
      role: 'button',
      type: 'button',
    });

    this.submit = new Button({
      parentNode: this.node,
      className: 'app-user-name-form_submit',
      text: 'SUBMIT',
      size: 'sm',
      leftIcon: 'symbol',
      onClick: () => this.handleSubmit(),
      color: 'magic',
      ariaLabel: 'button',
    });

    this.submit.setAttributes({
      role: 'button',
      type: 'button',
    });
  }

  private validateName(value: string) {
    const valid = isValidPlayerName(value);
    this.inputNode.setError(valid || !value ? '' : C.ERROR_NAME_VALIDATION);
    this.name = valid ? value : '';
  }

  private handleSubmit() {
    if (!this.name || !this.onSubmit(this.name)) {
      this.inputNode.setError(C.ERROR_NAME_VALIDATION);
    }
  }
  destroy(): void {
    this.inputNode?.destroy();
    this.submit?.destroy();
    super.destroy();
  }
}
