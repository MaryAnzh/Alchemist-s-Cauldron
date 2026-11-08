import type { ParentNodeType } from '@types';
import { buildDemoHistory, buildStatistics, formatDuration } from '@store';
import { Button, Component, Icon } from '@ui';
import { Slide } from './slides/slide/slide';
import { StatisticsSubSlide } from './slides/subSlide/subSlide';
import { SLIDES_SET } from './slidesSet';
import type { StatisticsSectionIdType } from './types';

type PresentationProps = ParentNodeType;
type MoveAxis = 'X' | 'Y';

const SLIDE_INDEX_KEY = 'presentation-slide-index';
const SLIDE_DURATION_MS = 400;
const MAIN_SLIDE = -1;

const loadSlideIndex = (): number => {
  const saved = Number(sessionStorage.getItem(SLIDE_INDEX_KEY));
  return Number.isInteger(saved) && saved >= 0 && saved < SLIDES_SET.length ? saved : 0;
};

const getDuration = (): number =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : SLIDE_DURATION_MS;

const moveTo = (axis: MoveAxis, percent: number): string => `translate${axis}(${percent}%)`;

export class Presentation extends Component {
  private currentSlide: Component | null = null;
  private currentIndex = loadSlideIndex();
  private subIndex = MAIN_SLIDE;
  private isAnimating = false;

  private controls!: Component;
  private slideWrap!: Component;
  private sideNav!: Component;
  private hint!: Component;
  private previews: { card: Component; id: string }[] = [];
  private navItems: Component[] = [];

  private getSubSlides(index = this.currentIndex) {
    return SLIDES_SET[index].subSlides ?? [];
  }

  private onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        e.preventDefault();
        this.goTo(this.currentIndex + (e.key === 'ArrowRight' ? 1 : -1), 'X');
        return;
      case 'ArrowDown':
      case 'ArrowUp':
        if (!this.getSubSlides().length) return;
        e.preventDefault();
        this.goTo(this.currentIndex, 'Y', this.subIndex + (e.key === 'ArrowDown' ? 1 : -1));
        return;
      default:
    }
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

    this.hint = new Button({
      parentNode: this.slideWrap.node,
      className: 'app-presentation_hint',
      leftIcon: 'arrow_down',
      color: 'magic-icon-2',
      onClick: () => this.goTo(this.currentIndex, 'Y', this.subIndex + 1),
    });

    this.sideNav = new Component({
      parentNode: this.node,
      tagName: 'nav',
      className: 'app-presentation_nav',
      attrs: { 'aria-label': 'Statistics sections' },
    });

    this.controls = new Component({
      parentNode: this.node,
      className: 'app-presentation_controls',
    });

    this.currentSlide = this.createSlide(this.currentIndex, this.subIndex);
    this.renderPreviews(this.controls);
    this.renderSideNav();
  }

  private createSlide(index: number, subIndex: number): Component {
    if (subIndex === MAIN_SLIDE) {
      const { slide } = SLIDES_SET[index];
      return new Slide({ ...slide, parentNode: this.slideWrap.node });
    }
    const subSlide = this.getSubSlides(index)[subIndex];
    return new StatisticsSubSlide({
      ...subSlide,
      figures: this.getFigures(subSlide.section),
      parentNode: this.slideWrap.node,
    });
  }

  private renderPreviews(wrap: Component): void {
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

  private renderSideNav() {
    this.sideNav.node.replaceChildren();
    this.navItems = [];

    const subSlides = this.getSubSlides();
    this.sideNav.node.classList.toggle('app-presentation_nav_hidden', !subSlides.length);

    if (subSlides.length) {
      const titles = [
        SLIDES_SET[this.currentIndex].preview.title,
        ...subSlides.map(({ title }) => title),
      ];

      titles.forEach((title, i) => {
        const subIndex = i - 1;
        const item = new Component({
          parentNode: this.sideNav.node,
          tagName: 'button',
          className: 'app-presentation_nav_item',
          attrs: { type: 'button', 'aria-label': title },
        });

        new Component({
          parentNode: item.node,
          tagName: 'span',
          className: 'app-presentation_nav_item_count',
          content: String(i + 1),
        });

        new Component({
          parentNode: item.node,
          tagName: 'span',
          className: 'app-presentation_nav_item_title',
          content: title,
        });

        item.node.addEventListener('click', () => this.goTo(this.currentIndex, 'Y', subIndex));
        this.navItems.push(item);
      });
    }

    this.syncNav();
  }

  private syncNav() {
    this.navItems.forEach((item, i) => {
      const active = i - 1 === this.subIndex;
      item.node.classList.toggle('app-presentation_nav_item_active', active);
      item.node.setAttribute('aria-current', String(active));
    });

    const showHint = this.subIndex === MAIN_SLIDE && this.getSubSlides().length > 0;
    this.hint.node.classList.toggle('app-presentation_hint_hidden', !showHint);
  }

  private goTo(index: number, axis: MoveAxis, subIndex = MAIN_SLIDE) {
    if (this.isAnimating || !this.currentSlide) return;
    if (index < 0 || index >= SLIDES_SET.length) return;
    if (subIndex < MAIN_SLIDE || subIndex >= this.getSubSlides(index).length) return;
    if (index === this.currentIndex && subIndex === this.subIndex) return;

    const delta =
      index !== this.currentIndex ? index - this.currentIndex : subIndex - this.subIndex;
    const sign = delta > 0 ? 1 : -1;
    const outgoing = this.currentSlide;
    const incoming = this.createSlide(index, subIndex);
    const options: KeyframeAnimationOptions = {
      duration: getDuration(),
      easing: 'ease-in-out',
      fill: 'forwards',
    };

    this.isAnimating = true;
    this.currentIndex = index;
    this.subIndex = subIndex;
    this.currentSlide = incoming;
    sessionStorage.setItem(SLIDE_INDEX_KEY, String(index));
    this.syncPreviews();
    this.renderSideNav();

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

  private getFigures(section: StatisticsSectionIdType): string[] {
    const stats = buildStatistics(buildDemoHistory(Date.now()));
    switch (section) {
      case 'summary':
        return [
          `Games: ${stats.gamesPlayed}`,
          `Best: ${stats.bestScore}`,
          `Average: ${stats.averageScore}`,
          `Time: ${formatDuration(stats.totalDurationSeconds)}`,
        ];
      case 'brews':
        return [`Successful: ${stats.successfulBrews}`, `Failed: ${stats.failedBrews}`];
      default:
        return [];
    }
  }

  destroy(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    this.hint?.destroy();
    this.previews?.forEach((preview) => preview.card.destroy());
    this.currentSlide?.destroy();
    super.destroy();
  }
}
