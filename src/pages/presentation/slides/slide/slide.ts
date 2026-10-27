import { DEFAULT, IMAGE, PAGE_TEMPLATE } from '@constants';
import type { SlideVariantType } from '@types';
import { Component } from '@ui';
import type { SlideProps, SlideTitleType } from '../../types';

export class Slide extends Component {
  nodeClass = 'app-presentation-slide';
  title: SlideTitleType | null = null;
  variantsMap: Record<SlideVariantType, () => void> = {
    [DEFAULT]: () => this.defaultRender(),
    [IMAGE]: () => this.imageRender(),
    [PAGE_TEMPLATE]: () => this.pageTemplateRender(),
  };

  constructor({ parentNode, title, variant }: SlideProps) {
    super({ parentNode, className: 'app-presentation-slide' });
    this.title = title ?? null;

    this.variantsMap[variant ?? DEFAULT];
  }

  defaultRender() {
    new Component({
      parentNode: this.node,
      className: 'app-presentation-slide_default_title',
      content: this.title?.test ?? '',
    });
  }

  imageRender() {}

  pageTemplateRender() {}

  destroy() {
    super.destroy();
  }
}
