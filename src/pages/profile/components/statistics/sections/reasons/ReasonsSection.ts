import { buildReasonBreakdown } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';
import { ShareBars } from '../shared/ShareBars';
import { REASON_LABELS } from '../shared/labels';

export class ReasonsSection extends StatisticsSection {
  private bars: ShareBars;
  private empty: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_reasons',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Game over reasons',
    });

    this.bars = new ShareBars({
      parentNode: this.node,
      keys: Object.keys(REASON_LABELS),
      labels: REASON_LABELS,
    });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'Finish a few games to see the reasons',
    });
  }

  update(history: GameRecordType[]) {
    this.bars.node.hidden = history.length === 0;
    this.empty.node.hidden = history.length > 0;
    this.bars.update(buildReasonBreakdown(history));
  }
}
