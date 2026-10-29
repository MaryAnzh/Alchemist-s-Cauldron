import type { SlideTemplateType } from '@types';
import { Component } from '@ui';
import type { SlideProps, SlideTitleType, SubTitleType } from '../../types';

export class Slide extends Component {
  nodeClass = 'app-presentation-slide';
  title: SlideTitleType | null = null;
  subtitle: SubTitleType | null = null;

  templateMap: Record<SlideTemplateType, () => void> = {
    title: () => this.titleTemplateRender(),
    content: () => this.contentTemplateRender(),
    split: () => this.splitTemplateRender(),
  };

  constructor({ parentNode, title, subTitle, template, slideJustify }: SlideProps) {
    super({
      parentNode,
      className: [
        'app-presentation-slide',
        `app-presentation-slide_justify-${slideJustify ?? 'center'}`,
      ],
    });
    this.title = title ?? null;
    this.subtitle = subTitle ?? null;

    this.templateMap[template ?? 'title']();
  }

  titleTemplateRender() {
    new Component({
      parentNode: this.node,
      className: ['app-presentation-slide_default_title', 'app-presentation-slide_title'],
      tagName: 'h2',
      content: this.title?.text ?? '',
    });

    new Component({
      parentNode: this.node,
      className: ['app-presentation-slide_default_subtitle', 'app-presentation-slide_subtitle'],
      tagName: 'h3',
      content: this.subtitle?.text ?? '',
    });
  }

  contentTemplateRender() {}

  splitTemplateRender() {}

  destroy() {
    super.destroy();
  }
}
