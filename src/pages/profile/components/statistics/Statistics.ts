import * as C from '@constants';
import { filterHistoryByDifficulty } from '@store';
import type { GameRecordType, ParentNodeType, DifficultyFilterType } from '@types';
import { Button, Component } from '@ui';

const BLOCKS = [
  C.SUMMARY,
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
  visibleHistory: GameRecordType[] = [];

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

    BLOCKS.forEach(
      (name) =>
        new Component({
          parentNode: grid.node,
          tagName: 'section',
          className: `app-statistics_block app-statistics_block_${name}`,
        }),
    );
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

    this.updateFilterView();
  }

  private setFilter(filter: DifficultyFilterType) {
    this.filter = filter;
    this.updateFilterView();
  }

  private updateFilterView() {
    FILTERS.forEach(({ value }, index) => {
      this.filterButtons[index].node.classList.toggle(
        'app-statistics_filter_item_active',
        value === this.filter,
      );
    });
    this.visibleHistory = filterHistoryByDifficulty(this.history, this.filter);
  }

  destroy() {
    this.filterButtons.forEach((button) => button.destroy());
    super.destroy();
  }
}
