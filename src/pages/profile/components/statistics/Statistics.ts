import * as C from '@constants';
import { buildDemoHistory, filterHistoryByDifficulty } from '@store';
import type { DifficultyFilterType, GameRecordType, ParentNodeType } from '@types';
import { Button, Component } from '@ui';
import { StatisticsSection } from './sections/StatisticsSection';
import { SummarySection, RecentSection } from './sections';

const PLACEHOLDER_BLOCKS = [
  C.DIFFICULTY,
  C.CHART,
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

const SOURCES: { isDemo: boolean; label: string }[] = [
  { isDemo: false, label: 'My statistics' },
  { isDemo: true, label: 'Show example' },
];

type StatisticsProps = ParentNodeType & {
  history: GameRecordType[];
};

export class Statistics extends Component {
  private history: GameRecordType[];
  private demoHistory: GameRecordType[];
  private showDemo = false;
  private filter: DifficultyFilterType = C.ALL;
  private sourceButtons: Button[] = [];
  private filterButtons: Button[] = [];
  private sections: StatisticsSection[] = [];

  constructor({ parentNode, history }: StatisticsProps) {
    super({ parentNode, tagName: 'section', className: 'app-statistics' });
    this.history = history;
    this.demoHistory = buildDemoHistory(Date.now());

    this.render();
  }

  render() {
    new Component({
      parentNode: this.node,
      tagName: 'h2',
      className: 'app-statistics_title',
      content: 'Statistics',
    });

    this.renderSourceSwitch();
    this.renderFilter();

    const gridWrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_wrap',
    });

    const grid = new Component({
      parentNode: gridWrap.node,
      tagName: 'div',
      className: 'app-statistics_grid',
    });

    this.sections = [
      new SummarySection({ parentNode: grid.node }),
      new RecentSection({ parentNode: grid.node }),
    ];

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

  private renderSourceSwitch() {
    const bar = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_filter',
    });

    SOURCES.forEach(({ isDemo, label }) => {
      const button = new Button({
        parentNode: bar.node,
        className: 'app-statistics_filter_item',
        color: 'dark',
        text: label,
        ariaLabel: label,
        onClick: () => this.setSource(isDemo),
      });
      this.sourceButtons.push(button);
    });

    this.updateSourceButtons();
  }

  private setSource(isDemo: boolean) {
    this.showDemo = isDemo;
    this.updateSourceButtons();
    this.refresh();
  }

  private updateSourceButtons() {
    SOURCES.forEach(({ isDemo }, index) => {
      this.sourceButtons[index].node.classList.toggle(
        'app-statistics_filter_item_active',
        isDemo === this.showDemo,
      );
    });
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
    const source = this.showDemo ? this.demoHistory : this.history;
    const visible = filterHistoryByDifficulty(source, this.filter);
    this.sections.forEach((section) => section.update(visible));
  }

  destroy() {
    this.sourceButtons.forEach((button) => button.destroy());
    this.filterButtons.forEach((button) => button.destroy());
    this.sections.forEach((section) => section.destroy());
    super.destroy();
  }
}
