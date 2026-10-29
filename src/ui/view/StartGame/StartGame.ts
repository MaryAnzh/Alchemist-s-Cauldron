import { Game } from '@pages';
import { store } from '@store';
import type { ParentNodeType } from '@types';
import { Button, Component, Footer, GameHeader, Input } from '@ui';

type StartGameProps = ParentNodeType & { callback: () => void };

export class StartGame extends Component {
  callback: () => void;
  child!: Footer;

  inputNode!: Input;
  submit!: Button;
  name = '';

  constructor({ parentNode, callback }: StartGameProps) {
    super({ parentNode, tagName: 'div', className: 'app-start-game-dialog' });
    this.callback = callback;
    this.render();
  }

  render() {
    const { maxIngredients } = store.getState();

    new GameHeader({
      parentNode: this.node,
      currentLivesCount: 0,
      maxLives: 0,
      showLives: false,
      showPauseButton: false,
    });

    new Game({
      parentNode: this.node,
      currentIngredientsCount: 0,
      currentRecipe: null,
      ingredients: [],
      maxIngredients,
    });

    this.child = new Footer({ parentNode: this.node, isStartState: true, callback: this.callback });

    const form = new Component({
      parentNode: this.node,
      tagName: 'form',
      className: 'app-start-game_form',
    });
    this.inputNode = new Input({
      parentNode: form.node,
      placeholder: 'Enter your name (2–15 chars)',
      maxlength: '15',
      className: 'app-start-game_form_input',
    });

    this.inputNode.onInput((value) => {
      this.validateName(value);
    });

    this.submit = new Button({
      parentNode: form.node,
      className: 'app-game-over_wrap_back',
      text: 'Save name',
      leftIcon: 'symbol',
      onClick: () => {
        if (!this.name) {
          this.inputNode?.setError('Enter valid name');
          return;
        }
      },
      color: 'magic',
    });
  }

  private validateName(value: string) {
    const regex = /^[A-Za-z0-9 _-]{2,15}$/;

    if (!regex.test(value)) {
      this.inputNode?.setError('Name must be 2–15 chars: letters, digits, space, _ or -');
      this.name = '';
      return;
    }

    this.inputNode?.setError('');
    this.name = value;
  }

  destroy(): void {
    this.child.destroy();
    super.destroy();
  }
}
