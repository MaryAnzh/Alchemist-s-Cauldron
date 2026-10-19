import type { ParentNodeType } from '@types';
import { Component } from '@ui';

export type InputProps = ParentNodeType & {
  placeholder: string;
  maxlength: string;
};

export class Input extends Component {
  private inputNode!: Component;
  private errorNode!: Component;

  constructor({ parentNode, placeholder, maxlength }: InputProps) {
    super({
      parentNode,
      tagName: 'div',
      className: 'app-input',
    });

    this.inputNode = new Component({
      parentNode: this.node,
      tagName: 'input',
      className: 'app-input_field',
      attrs: { autocomplete: 'off', placeholder, maxlength },
    });

    this.errorNode = new Component({
      parentNode: this.node,
      tagName: 'span',
      className: 'app-input_error',
      content: '',
    });
  }

  public setError(text: string) {
    this.errorNode.node.textContent = text;

    if (text) {
      this.node.classList.add('has-error');
      this.errorNode.node.classList.add('visible');
    } else {
      this.node.classList.remove('has-error');
      this.errorNode.node.classList.remove('visible');
    }
  }

  public getInput() {
    return this.inputNode;
  }

  public setDisabled(value: boolean) {
    const inputElement = this.inputNode.node as HTMLInputElement;

    if (value) {
      inputElement.setAttribute('disabled', 'true');
      this.node.classList.add('input-disabled');
    } else {
      inputElement.removeAttribute('disabled');
      this.node.classList.remove('input-disabled');
    }
  }

  public onInput(callback: (value: string) => void) {
    const inputElement = this.inputNode.node as HTMLInputElement;
    inputElement.addEventListener('input', () => {
      callback(inputElement.value.trim());
    });
  }

  public getValue(): string {
    return (this.inputNode.node as HTMLInputElement).value.trim();
  }

  destroy(): void {
    this.inputNode.node.onblur = null;
    this.inputNode.node.onfocus = null;
    super.destroy();
  }
}
