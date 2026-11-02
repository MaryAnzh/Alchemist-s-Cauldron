import { buildBrewsHistogram, formatBinLabel } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';

export class HistogramSection extends StatisticsSection {
  private body: Component;
  private empty: Component;
  private columns: Component[] = [];

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_histogram',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Brews per game',
    });

    this.body = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_histogram',
    });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'Play a few games to see the histogram',
    });
  }

  update(history: GameRecordType[]) {
    this.columns.forEach((column) => column.destroy());
    this.columns = [];

    this.body.node.hidden = history.length === 0;
    this.empty.node.hidden = history.length > 0;

    const bins = buildBrewsHistogram(history);
    const maxGames = Math.max(1, ...bins.map((bin) => bin.games));

    bins.forEach((bin) => {
      const column = new Component({
        parentNode: this.body.node,
        tagName: 'div',
        className: 'app-statistics_histogram_column',
      });
      const track = new Component({
        parentNode: column.node,
        tagName: 'span',
        className: 'app-statistics_histogram_track',
      });
      const bar = new Component({
        parentNode: track.node,
        tagName: 'span',
        className: 'app-statistics_histogram_bar',
      });
      bar.node.style.height = `${(bin.games / maxGames) * 100}%`;

      new Component({
        parentNode: column.node,
        tagName: 'span',
        className: 'app-statistics_histogram_count',
        content: String(bin.games),
      });
      new Component({
        parentNode: column.node,
        tagName: 'span',
        className: 'app-statistics_histogram_label',
        content: formatBinLabel(bin),
      });

      this.columns.push(column);
    });
  }
}
