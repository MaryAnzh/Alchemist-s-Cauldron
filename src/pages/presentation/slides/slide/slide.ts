import { Component } from '@ui';
import type {
  SlideCodeType,
  SlideLinkType,
  SlideProps,
  SlideTitleType,
  SubTitleType,
} from '../../types';
import type { SlideTemplateType } from '@types';

export class Slide extends Component {
  nodeClass = 'app-presentation-slide';
  title: SlideTitleType | null = null;
  subtitle: SubTitleType | null = null;
  list: SlideProps['list'] | null = null;
  links: SlideLinkType[] = [];
  code: SlideCodeType | null = null;
  template: SlideTemplateType = 'default';

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
        slideJustify ? `app-presentation-slide_justify-${slideJustify}` : '',
        `app-presentation-slide_template-${template}`,
      ],
    });

    this.title = title ?? null;
    this.subtitle = subTitle ?? null;
    this.list = list ?? null;
    this.links = links ?? [];
    this.code = code ?? null;
    this.template = template;

    this.render();
  }

  render() {
    new Component({
      parentNode: this.node,
      className: 'app-presentation-slide_title',
      tagName: 'h2',
      content: this.title?.text ?? '',
    });

    if (this.subtitle) {
      new Component({
        parentNode: this.node,
        className: 'app-presentation-slide_subtitle',
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
          className: 'app-presentation-slide_links_link',
          attrs: { href },
        });
        new Component({ parentNode: link.node, tagName: 'img', attrs: { src, alt } });
        if (caption)
          new Component({
            parentNode: link.node,
            tagName: 'span',
            content: caption,
          });
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

  destroy() {
    super.destroy();
  }
}
