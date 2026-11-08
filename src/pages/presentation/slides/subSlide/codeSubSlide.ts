import type { ParentNodeType } from '@types';
import { Button, Component } from '@ui';
import type { CodeSubSlideType } from '../../types';

type CodeSubSlideProps = ParentNodeType & CodeSubSlideType;

export class CodeSubSlide extends Component {
  private wrap: Component;
  private codeBox: Component;
  private themeButton: Button | null = null;
  private isLight = false;

  constructor({ parentNode, code, title, description, descriptionPosition }: CodeSubSlideProps) {
    super({
      parentNode,
      className: [
        'app-presentation-slide',
        'app-presentation-sub-slide',
        `app-presentation-sub-slide_desc-${descriptionPosition}`,
      ],
    });

    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-presentation-slide_title',
      content: title,
    });

    const descriptionBlock = new Component({
      parentNode: this.node,
      className: 'app-presentation-sub-slide_description',
    });
    new Component({ parentNode: descriptionBlock.node, tagName: 'p', content: description });

    this.wrap = new Component({
      parentNode: this.node,
      className: ['app-presentation-sub-slide_content', 'app-presentation-code-wrap'],
    });

    this.codeBox = new Component({
      parentNode: this.wrap.node,
      className: 'app-presentation-code',
    });
    new Component({ parentNode: this.codeBox.node, tagName: 'pre', content: code });

    this.renderThemeButton();
  }

  private renderThemeButton(): void {
    this.themeButton?.destroy();
    this.themeButton = new Button({
      parentNode: this.wrap.node,
      className: 'app-presentation-code_theme',
      leftIcon: this.isLight ? 'theme_light' : 'theme_dark',
      color: 'magic-icon-2',
      onClick: () => this.toggleTheme(),
    });
  }

  private toggleTheme(): void {
    this.isLight = !this.isLight;
    this.codeBox.node.classList.toggle('app-presentation-code_light', this.isLight);
    this.themeButton?.setLeftIcon(this.isLight ? 'theme_light' : 'theme_dark');
  }

  destroy(): void {
    this.themeButton?.destroy();
    this.codeBox.destroy();
    this.wrap.destroy();
    super.destroy();
  }
}
