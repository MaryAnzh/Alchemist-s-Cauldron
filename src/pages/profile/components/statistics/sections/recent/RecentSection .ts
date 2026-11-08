import { formatDuration, getRecentHistory } from '@store';
import type {
  GameDifficultType,
  GameOverReasonConstType,
  GameRecordType,
  ParentNodeType,
} from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';

const ROWS_LIMIT = 10;

const HEADERS = ['Date', 'Level', 'Score', 'Brews', 'Time', 'Reason'];

const DIFFICULTY_LABELS: Record<GameDifficultType, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

const REASON_LABELS: Record<GameOverReasonConstType, string> = {
  time: 'Time is up',
  lives: 'No lives left',
  ingredients: 'Out of ingredients',
};

const formatPlayedAt = (timestamp: number) =>
  new Date(timestamp).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });

export class RecentSection extends StatisticsSection {
  private wrap: Component;
  private body: Component;
  private empty: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_recent',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Recent games',
    });

    this.wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_table_wrap',
    });

    const table = new Component({
      parentNode: this.wrap.node,
      tagName: 'table',
      className: 'app-statistics_table',
    });

    const head = new Component({ parentNode: table.node, tagName: 'thead' });
    const headRow = new Component({ parentNode: head.node, tagName: 'tr' });
    HEADERS.forEach(
      (text) => new Component({ parentNode: headRow.node, tagName: 'th', content: text }),
    );

    this.body = new Component({ parentNode: table.node, tagName: 'tbody' });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'No games yet',
    });
  }

  update(history: GameRecordType[]) {
    const rows = getRecentHistory(history, ROWS_LIMIT);

    this.body.node.replaceChildren();
    rows.forEach((record) => {
      const row = new Component({ parentNode: this.body.node, tagName: 'tr' });
      const cells = [
        formatPlayedAt(record.playedAt),
        DIFFICULTY_LABELS[record.difficulty],
        String(record.score),
        String(record.successfulBrews),
        formatDuration(record.durationSeconds),
        REASON_LABELS[record.reason],
      ];
      cells.forEach(
        (text) => new Component({ parentNode: row.node, tagName: 'td', content: text }),
      );
    });

    this.wrap.node.hidden = rows.length === 0;
    this.empty.node.hidden = rows.length > 0;
  }
}
