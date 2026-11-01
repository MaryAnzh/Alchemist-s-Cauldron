import type { ParentNodeType } from '@types';
import { Component, Icon } from '@ui';
import { Slide } from './slides/slide/slide';
import { SLIDES_SET } from './slidesSet';

type PresentationProps = ParentNodeType;
type MoveAxis = 'X' | 'Y';

const SLIDE_INDEX_KEY = 'presentation-slide-index';
const SLIDE_DURATION_MS = 400;

const loadSlideIndex = (): number => {
  const saved = Number(sessionStorage.getItem(SLIDE_INDEX_KEY));
  return Number.isInteger(saved) && saved >= 0 && saved < SLIDES_SET.length ? saved : 0;
};

const getDuration = (): number =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : SLIDE_DURATION_MS;

const moveTo = (axis: MoveAxis, percent: number): string => `translate${axis}(${percent}%)`;

export class Presentation extends Component {
  currentIndex = loadSlideIndex();

  slideWrap!: Component;
  controls!: Component;
  previews: { card: Component; id: string }[] = [];
  private currentSlide: Slide | null = null;
  private isAnimating = false;

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    this.goTo(this.currentIndex + (e.key === 'ArrowRight' ? 1 : -1), 'X');
  };

  constructor({ parentNode }: PresentationProps) {
    super({ parentNode, className: 'app-presentation' });

    this.render();
    document.addEventListener('keydown', this.onKeyDown);
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

    this.currentSlide = this.createSlide(this.currentIndex);
    this.renderPreviews(this.controls);
  }

  private createSlide(index: number): Slide {
    const { slide } = SLIDES_SET[index];
    return new Slide({ ...slide, parentNode: this.slideWrap.node });
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

      card.node.addEventListener('click', () => {
        const isNeighbour = Math.abs(i - this.currentIndex) === 1;
        this.goTo(i, isNeighbour ? 'X' : 'Y');
      });

      this.previews.push({ card, id });
    });

    this.syncPreviews();
  }

  private syncPreviews() {
    this.previews.forEach(({ card }, i) => {
      const active = i === this.currentIndex;
      card.node.classList.toggle('app-presentation_controls_preview_active', active);
      card.node.setAttribute('aria-current', String(active));
    });
  }

  private goTo(index: number, axis: MoveAxis) {
    if (this.isAnimating || !this.currentSlide) return;
    if (index < 0 || index >= SLIDES_SET.length || index === this.currentIndex) return;

    const sign = index > this.currentIndex ? 1 : -1;
    const outgoing = this.currentSlide;
    const incoming = this.createSlide(index);
    const options: KeyframeAnimationOptions = {
      duration: getDuration(),
      easing: 'ease-in-out',
      fill: 'forwards',
    };

    this.isAnimating = true;
    this.currentIndex = index;
    this.currentSlide = incoming;
    sessionStorage.setItem(SLIDE_INDEX_KEY, String(index));
    this.syncPreviews();

    const outAnim = outgoing.node.animate(
      [{ transform: moveTo(axis, 0) }, { transform: moveTo(axis, -sign * 100) }],
      options,
    );
    const inAnim = incoming.node.animate(
      [{ transform: moveTo(axis, sign * 100) }, { transform: moveTo(axis, 0) }],
      options,
    );

    Promise.all([outAnim.finished, inAnim.finished]).then(() => {
      outgoing.destroy();
      this.isAnimating = false;
    });
  }

  destroy(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    super.destroy();
  }
}
