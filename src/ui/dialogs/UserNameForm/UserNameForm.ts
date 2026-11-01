import type { ParentNodeType } from '@types';
import * as C from '@constants';
import { Input, Component, Button } from '@ui';
import { getPlayerNameError, store } from '@store';

type UsernameFormProps = ParentNodeType & {
  onSubmit: (name: string) => boolean;
  onSkip: () => void;
};

export class UserNameForm extends Component {
  inputNode!: Input;
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
      value: store.getUserName() ?? '',
      validate: getPlayerNameError,
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

  private handleSubmit() {
    const name = this.inputNode.getValue();
    const error = name ? getPlayerNameError(name) : C.ERROR_NAME_VALIDATION;
    if (error) {
      this.inputNode.setError(error);
      return;
    }
    if (!this.onSubmit(name)) this.inputNode.setError(C.ERROR_NAME_VALIDATION);
  }

  destroy(): void {
    this.inputNode?.destroy();
    this.submit?.destroy();
    super.destroy();
  }
}
