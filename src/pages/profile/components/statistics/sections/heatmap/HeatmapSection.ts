import { buildHeatmap } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';
import { DAY_FORMATTER } from '../shared/labels';

export class HeatmapSection extends StatisticsSection {
  private body: Component;
  private empty: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_heatmap',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Activity over the last 6 weeks',
    });

    this.body = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_heatmap',
    });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'Play a few games to see your activity',
    });
  }

  update(history: GameRecordType[]) {
    this.body.node.replaceChildren();

    const hasHistory = history.length > 0;
    this.body.node.hidden = !hasHistory;
    this.empty.node.hidden = hasHistory;
    if (!hasHistory) return;

    buildHeatmap(history).forEach(({ day, games, level }) => {
      const cell = new Component({
        parentNode: this.body.node,
        tagName: 'span',
        className: `app-statistics_heatmap_cell app-statistics_heatmap_cell_${level}`,
      });
      cell.node.title = `${DAY_FORMATTER.format(day)}: ${games} ${games === 1 ? 'game' : 'games'}`;
    });
  }
}
