import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';
import { Slide } from './slides/slide/slide';
import { SLIDES_SET } from './slidesSet';

type PresentationProps = ParentNodeType;

export class Presentation extends Component {
  currentSlideNumber = 0;
  currentSlide: { Slide: Slide; id: string } | null = null;

  slideWrap!: Component;
  controls!: Component;
  previews: { card: Component; id: string }[] = [];

  constructor({ parentNode }: PresentationProps) {
    super({ parentNode, className: 'app-presentation' });

    this.render();
  }

  render() {
    this.slideWrap = new Component({
      parentNode: this.node,
      className: 'app-presentation_slide-wrap',
    });

    this.controls = new Component({
      parentNode: this.node,
      className: 'app-presentation_controls',
    });

    this.renderSlide(this.slideWrap, this.currentSlideNumber);
    this.renderPreviews(this.controls);
  }

  renderSlide(wrap: Component, num: number): void {
    const slideData = SLIDES_SET[num];
    if (!slideData) return;

    const { slide, id } = slideData;

    this.currentSlide = {
      Slide: new Slide({ ...slide, parentNode: wrap.node }),
      id,
    };
  }

  renderPreviews(wrap: Component): void {
    SLIDES_SET.forEach(({ preview: { title, icon }, id }, i) => {
      const card = new Component({
        parentNode: wrap.node,
        className: 'app-presentation_controls_preview',
        tagName: 'button',
        attrs: {
          type: 'button',
          role: 'button',
          'aria-label': id,
          'aria-current': id === this.currentSlide?.id ? 'true' : 'false',
          tabIndex: 0,
        },
      });

      new Component({
        parentNode: card.node,
        className: 'app-presentation_controls_preview_count',
        tagName: 'span',
        content: (i + 1).toString(),
      });

      new Icon({
        parentNode: card.node,
        className: 'app-presentation_controls_preview_icon',
        icon,
      });

      new Component({
        parentNode: card.node,
        className: 'app-presentation_controls_preview_title',
        tagName: 'span',
        content: title,
      });

      if (id === this.currentSlide?.id) {
        card.node.classList.add('app-presentation_controls_preview_active');
      }

      this.previews.push({ card, id });
    });
  }

  destroy(): void {
    super.destroy();
  }
}
