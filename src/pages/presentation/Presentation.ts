import type { IconPickerType, ParentNodeType, SlideVariantType } from '@types';
import { Component, Icon } from '@ui';
import { Slide } from './slides/slide/slide';
import { DEFAULT, IMAGE, PAGE_TEMPLATE, SLIDE_1_TITLE } from '@constants';
import type { SlideProps } from './types';

type PresentationProps = ParentNodeType;

export class Presentation extends Component {
  currentSlideNumber = 0;
  currentSlide: Slide | null = null;
  leftSlide: Slide | null = null;
  rightSlide: Slide | null = null;

  slideWrap!: Component;
  controls!: Component;

  slidesSet: SlideProps[] = [
    { parentNode: this.slideWrap.node, variant: DEFAULT, title: { test: SLIDE_1_TITLE } },
  ];
  previewIcons: Record<SlideVariantType, IconPickerType> = {
    [DEFAULT]: 'symbol',
    [IMAGE]: 'symbol',
    [PAGE_TEMPLATE]: 'symbol',
  };
  previews: { index: number; node: Icon }[] = [];

  constructor({ parentNode }: PresentationProps) {
    super({ parentNode, className: 'app-presentation', content: 'Presentation' });

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

    this.renderSlide(this.currentSlideNumber);
    this.renderPreviews(this.currentSlideNumber);
  }

  renderSlide(num: number): void {
    this.currentSlide = new Slide(this.slidesSet[num]);
  }

  renderPreviews(num: number): void {
    this.slidesSet.forEach(({ variant }, index) => {
      const icon = this.previewIcons[variant];

      const node = new Icon({
        parentNode: this.node,
        icon,
      });
      if (num === index) {
        node.node.classList.add('app-presentation_preview_active');
      }

      this.previews.push({
        index,
        node,
      });
    });
  }

  destroy(): void {
    super.destroy();
  }
}
