import type { ParentNodeType } from '@types';
import { Button, Component, Input } from '@ui';
import type { DemoSubSlideType } from '../../types';

type DemoSubSlideProps = ParentNodeType & DemoSubSlideType;

const renderAvatarFile = (parent: Component) => {
  const drop = new Component({
    parentNode: parent.node,
    className: 'app-presentation-demo_drop',
  });
  new Component({
    parentNode: drop.node,
    tagName: 'span',
    className: 'app-presentation-demo_drop_icon',
    content: '+',
  });
  new Component({ parentNode: drop.node, tagName: 'span', content: 'Drop image here or click' });
  new Component({
    parentNode: parent.node,
    tagName: 'p',
    className: 'app-presentation-demo_hint',
    content: 'Files over 85 KB are rejected',
  });
};

const renderAvatarUrl = (parent: Component) => {
  const row = new Component({ parentNode: parent.node, className: 'app-presentation-demo_row' });
  new Input({
    parentNode: row.node,
    placeholder: 'https://… image link',
    maxlength: '2048',
    className: 'app-presentation-demo_input',
    value: 'https://example.com/avatar.png',
  });
  new Button({ parentNode: row.node, text: 'Use URL', color: 'link' });
};

const renderNameChange = (parent: Component) => {
  const current = new Component({
    parentNode: parent.node,
    className: 'app-presentation-demo_row',
  });
  new Component({
    parentNode: current.node,
    tagName: 'span',
    className: 'app-presentation-demo_name',
    content: 'Alchemist',
  });
  new Button({ parentNode: current.node, color: 'magic-icon-2', leftIcon: 'edit' });

  const next = new Component({ parentNode: parent.node, className: 'app-presentation-demo_row' });
  new Input({
    parentNode: next.node,
    placeholder: 'Name (2–15 characters)',
    maxlength: '15',
    className: 'app-presentation-demo_input',
    value: 'Mira',
  });
  new Button({ parentNode: next.node, color: 'magic-icon-2', variant: 'empty', leftIcon: 'save' });
};

const DEMO_RENDERERS: Record<DemoSubSlideType['demo'], (parent: Component) => void> = {
  'avatar-file': renderAvatarFile,
  'avatar-url': renderAvatarUrl,
  name: renderNameChange,
};

export class DemoSubSlide extends Component {
  constructor({ parentNode, demo, title, description, descriptionPosition }: DemoSubSlideProps) {
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

    const content = new Component({
      parentNode: this.node,
      className: 'app-presentation-sub-slide_content',
    });
    const demoBox = new Component({ parentNode: content.node, className: 'app-presentation-demo' });
    DEMO_RENDERERS[demo](demoBox);
  }
}
