import { buildDemoHistory } from '@store';
import type { ParentNodeType } from '@types';
import { Component } from '@ui';
import * as S from '../../../profile/components/statistics/sections';
import type { StatisticsSection } from '../../../profile/components/statistics/sections/StatisticsSection';
import type { StatisticsSectionIdType, SubSlideType } from '../../types';

type SectionConstructorType = new (props: ParentNodeType) => StatisticsSection;

const SECTION_CONSTRUCTORS: Record<StatisticsSectionIdType, SectionConstructorType> = {
  summary: S.SummarySection,
  chart: S.ChartSection,
  difficulty: S.DifficultySection,
  recent: S.RecentSection,
  reasons: S.ReasonsSection,
  brews: S.BrewsSection,
  candles: S.CandlesSection,
  histogram: S.HistogramSection,
  heatmap: S.HeatmapSection,
};

export class StatisticsSubSlide extends Component {
  private sectionView: StatisticsSection;

  constructor({
    parentNode,
    section,
    title,
    description,
    descriptionPosition,
    figures = [],
  }: ParentNodeType & SubSlideType) {
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
    new Component({
      parentNode: descriptionBlock.node,
      tagName: 'p',
      content: description,
    });
    if (figures.length) {
      const list = new Component({
        parentNode: descriptionBlock.node,
        tagName: 'ul',
        className: 'app-presentation-sub-slide_figures',
      });
      figures.forEach((text) => {
        new Component({ parentNode: list.node, tagName: 'li', content: text });
      });
    }

    const content = new Component({
      parentNode: this.node,
      className: 'app-presentation-sub-slide_content',
    });
    const SectionView = SECTION_CONSTRUCTORS[section];
    this.sectionView = new SectionView({ parentNode: content.node });
    this.sectionView.update(buildDemoHistory(Date.now()));
  }

  destroy() {
    this.sectionView.destroy();
    super.destroy();
  }
}
