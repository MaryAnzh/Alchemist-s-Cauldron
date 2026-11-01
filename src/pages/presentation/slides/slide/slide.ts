import type { SlideTemplateType } from '@types';
import { Component } from '@ui';
import type {
  SlideCodeType,
  SlideLinkType,
  SlideProps,
  SlideTitleType,
  SubTitleType,
} from '../../types';

export class Slide extends Component {
  nodeClass = 'app-presentation-slide';
  title: SlideTitleType | null = null;
  subtitle: SubTitleType | null = null;
  list: SlideProps['list'] | null = null;
  links: SlideLinkType[] = [];
  code: SlideCodeType | null = null;

  templateMap: Record<SlideTemplateType, () => void> = {
    title: () => this.titleTemplateRender(),
    content: () => this.contentTemplateRender(),
    split: () => this.splitTemplateRender(),
  };

  constructor({
    parentNode,
    title,
    subTitle,
    template,
    slideJustify,
    list,
    links,
    code,
  }: SlideProps) {
    super({
      parentNode,
      className: [
        'app-presentation-slide',
        `app-presentation-slide_justify-${slideJustify ?? 'center'}`,
      ],
    });
    this.title = title ?? null;
    this.subtitle = subTitle ?? null;
    this.list = list ?? null;
    this.links = links ?? [];
    this.code = code ?? null;

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

  contentTemplateRender() {
    new Component({
      parentNode: this.node,
      className: ['app-presentation-slide_default_title', 'app-presentation-slide_title'],
      tagName: 'h2',
      content: this.title?.text ?? '',
    });

    if (this.subtitle) {
      new Component({
        parentNode: this.node,
        className: ['app-presentation-slide_default_subtitle', 'app-presentation-slide_subtitle'],
        tagName: 'h3',
        content: this.subtitle.text,
      });
    }

    if (this.list) {
      const ul = new Component({
        parentNode: this.node,
        tagName: 'ul',
        className: 'app-presentation-slide_list',
      });
      this.list.items.forEach((text) => {
        new Component({ parentNode: ul.node, tagName: 'li', content: text });
      });
    }

    if (this.links.length) {
      const row = new Component({
        parentNode: this.node,
        className: 'app-presentation-slide_links',
      });
      this.links.forEach(({ src, alt, caption, href }) => {
        const link = new Component({
          parentNode: row.node,
          tagName: 'a',
          className: 'app-presentation-slide_link',
          attrs: { href },
        });
        new Component({ parentNode: link.node, tagName: 'img', attrs: { src, alt } });
        if (caption) new Component({ parentNode: link.node, tagName: 'span', content: caption });
      });
    }

    if (this.code) {
      new Component({
        parentNode: this.node,
        tagName: 'pre',
        className: 'app-presentation-slide_code',
        content: this.code.text,
      });
    }
  }

  splitTemplateRender() {}

  destroy() {
    super.destroy();
  }
}
