import type { ParentNodeType } from '@types';
import { Component } from '@ui';

type ShareBarsProps = ParentNodeType & {
  keys: string[];
  labels: Record<string, string>;
};

type RowType = { fill: Component; value: Component };

export class ShareBars extends Component {
  private rows: RowType[] = [];

  constructor({ parentNode, keys, labels }: ShareBarsProps) {
    super({ parentNode, tagName: 'div', className: 'app-statistics_share' });

    keys.forEach((key) => {
      const row = new Component({
        parentNode: this.node,
        tagName: 'div',
        className: 'app-statistics_share_row',
      });
      new Component({
        parentNode: row.node,
        tagName: 'span',
        className: 'app-statistics_share_label',
        content: labels[key],
      });
      const track = new Component({
        parentNode: row.node,
        tagName: 'div',
        className: 'app-statistics_share_track',
      });
      const fill = new Component({
        parentNode: track.node,
        tagName: 'span',
        className: `app-statistics_share_fill app-statistics_share_fill_${key}`,
      });
      const value = new Component({
        parentNode: row.node,
        tagName: 'span',
        className: 'app-statistics_share_value',
      });
      this.rows.push({ fill, value });
    });
  }

  // Items must follow the same order as `keys`.
  update(items: { games: number; share: number }[]) {
    items.forEach(({ games, share }, index) => {
      const percent = Math.round(share * 100);
      const { fill, value } = this.rows[index];
      fill.node.style.width = `${percent}%`;
      value.node.textContent = `${games} (${percent}%)`;
    });
  }
}
