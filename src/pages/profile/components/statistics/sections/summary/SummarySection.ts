import { buildStatistics, formatDuration } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';

const BUBBLE_COUNT = 8;

export class SummarySection extends StatisticsSection {
  private cards: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_summary',
    });

    const bubbles = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_bubbles',
    });
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      new Component({
        parentNode: bubbles.node,
        tagName: 'span',
        className: 'app-statistics_bubbles_bubble',
      });
    }

    this.cards = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_cards',
    });
  }

  update(history: GameRecordType[]) {
    const stats = buildStatistics(history);
    const items = [
      { label: 'Games', value: String(stats.gamesPlayed) },
      { label: 'Best score', value: String(stats.bestScore) },
      { label: 'Average score', value: String(stats.averageScore) },
      { label: 'Time played', value: formatDuration(stats.totalDurationSeconds) },
    ];

    this.cards.node.replaceChildren();
    items.forEach(({ label, value }) => {
      const card = new Component({
        parentNode: this.cards.node,
        tagName: 'div',
        className: 'app-statistics_card',
      });
      new Component({
        parentNode: card.node,
        tagName: 'span',
        className: 'app-statistics_card_label',
        content: label,
      });
      new Component({
        parentNode: card.node,
        tagName: 'span',
        className: 'app-statistics_card_value',
        content: value,
      });
    });
  }
}
