import { buildDifficultyBreakdown } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';
import { ShareBars } from '../shared/ShareBars';
import { DIFFICULTY_LABELS } from '../shared/labels';

export class DifficultySection extends StatisticsSection {
  private bars: ShareBars;
  private empty: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_difficulty',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Difficulty',
    });

    this.bars = new ShareBars({
      parentNode: this.node,
      keys: Object.keys(DIFFICULTY_LABELS),
      labels: DIFFICULTY_LABELS,
    });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'Play a few games to see the split',
    });
  }

  update(history: GameRecordType[]) {
    this.bars.node.hidden = history.length === 0;
    this.empty.node.hidden = history.length > 0;
    this.bars.update(buildDifficultyBreakdown(history));
  }
}
