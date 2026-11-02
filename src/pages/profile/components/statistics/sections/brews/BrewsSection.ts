import { buildBrewShares, buildStatistics } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';
import { ShareBars } from '../shared/ShareBars';
import { BREW_LABELS } from '../shared/labels';

export class BrewsSection extends StatisticsSection {
  private bars: ShareBars;
  private reactions: Component;
  private empty: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_brews',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Brews & reactions',
    });

    this.bars = new ShareBars({
      parentNode: this.node,
      keys: Object.keys(BREW_LABELS),
      labels: BREW_LABELS,
    });

    this.reactions = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_brews_reactions',
    });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'Play a few games to see your brews',
    });
  }

  update(history: GameRecordType[]) {
    const hasHistory = history.length > 0;
    this.bars.node.hidden = !hasHistory;
    this.reactions.node.hidden = !hasHistory;
    this.empty.node.hidden = hasHistory;

    this.bars.update(buildBrewShares(history));
    this.reactions.node.textContent = `Reactions triggered: ${buildStatistics(history).reactionsTriggered}`;
  }
}
