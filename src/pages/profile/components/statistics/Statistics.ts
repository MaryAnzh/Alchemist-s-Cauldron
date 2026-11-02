import * as C from '@constants';
import { filterHistoryByDifficulty } from '@store';
import type { DifficultyFilterType, GameRecordType, ParentNodeType } from '@types';
import { Button, Component } from '@ui';
import { StatisticsSection } from './sections/StatisticsSection';
import { SummarySection } from './sections/summary/SummarySection';

const PLACEHOLDER_BLOCKS = [
  C.DIFFICULTY,
  C.CHART,
  C.RECENT,
  C.REASONS,
  C.BREWS,
  C.HISTOGRAM,
  C.CANDLES,
  C.HEATMAP,
] as const;

const FILTERS: { value: DifficultyFilterType; label: string }[] = [
  { value: C.ALL, label: C.ALL },
  { value: C.EASY, label: C.EASY },
  { value: C.MEDIUM, label: C.MEDIUM },
  { value: C.HARD, label: C.HARD },
];

type StatisticsProps = ParentNodeType & {
  history: GameRecordType[];
};

export class Statistics extends Component {
  private history: GameRecordType[];
  private filter: DifficultyFilterType = C.ALL;
  private filterButtons: Button[] = [];
  private sections: StatisticsSection[] = [];

  constructor({ parentNode, history }: StatisticsProps) {
    super({ parentNode, tagName: 'section', className: 'app-statistics' });
    this.history = history;

    this.render();
  }

  render() {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-statistics_title',
      content: 'Statistics',
    });

    this.renderFilter();

    const grid = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_grid',
    });

    this.sections.push(new SummarySection({ parentNode: grid.node }));

    PLACEHOLDER_BLOCKS.forEach(
      (name) =>
        new Component({
          parentNode: grid.node,
          tagName: 'section',
          className: `app-statistics_block app-statistics_block_${name}`,
        }),
    );

    this.refresh();
  }

  private renderFilter() {
    const bar = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_filter',
    });

    FILTERS.forEach(({ value, label }) => {
      const button = new Button({
        parentNode: bar.node,
        className: 'app-statistics_filter_item',
        color: 'dark',
        text: label,
        ariaLabel: `Show: ${label}`,
        onClick: () => this.setFilter(value),
      });
      this.filterButtons.push(button);
    });

    this.updateFilterButtons();
  }

  private setFilter(filter: DifficultyFilterType) {
    this.filter = filter;
    this.updateFilterButtons();
    this.refresh();
  }

  private updateFilterButtons() {
    FILTERS.forEach(({ value }, index) => {
      this.filterButtons[index].node.classList.toggle(
        'app-statistics_filter_item_active',
        value === this.filter,
      );
    });
  }

  private refresh() {
    const visible = filterHistoryByDifficulty(this.history, this.filter);
    this.sections.forEach((section) => section.update(visible));
  }

  destroy() {
    this.filterButtons.forEach((button) => button.destroy());
    this.sections.forEach((section) => section.destroy());
    super.destroy();
  }
}
