import { store } from '@store';
import type { ParentNodeType, LeaderboardRowType } from '@types';
import { Button, Component, Icon } from '@ui';
import { formatDate } from '@utils';

type LeaderboardProps = ParentNodeType & {
  onBack: () => void;
  onClean: () => void;
};

export class Leaderboard extends Component {
  constructor({ parentNode, onBack, onClean }: LeaderboardProps) {
    super({ parentNode, tagName: 'div', className: 'app-leaderboard' });

    const leaders = store.loadFromStorage('LEADERBOARD') as LeaderboardRowType[];
    this.render(leaders, onBack, onClean);
  }

  render(leaders: LeaderboardRowType[], onBack: () => void, onClean: () => void) {
    const wrap = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-leaderboard_wrap',
    });

    new Component({
      parentNode: wrap.node,
      tagName: 'h2',
      className: 'app-leaderboard_wrap_title',
      content: 'Top Alchemists Leaderboard',
    });

    const table = new Component({
      parentNode: wrap.node,
      tagName: 'table',
      className: 'app-leaderboard_wrap_table',
    });

    /** THEAD */
    const thead = new Component({
      parentNode: table.node,
      tagName: 'thead',
      className: 'app-leaderboard_wrap_table_head',
    });

    const headRow = new Component({
      parentNode: thead.node,
      tagName: 'tr',
    });

    ['Rank', 'Name', 'Score', 'Date'].forEach((title) => {
      new Component({
        parentNode: headRow.node,
        tagName: 'th',
        content: title,
      });
    });

    /** TBODY */
    const tbody = new Component({
      parentNode: table.node,
      tagName: 'tbody',
      className: 'app-leaderboard_wrap_table_body',
    });

    leaders.forEach((row, index) => {
      const tr = new Component({
        parentNode: tbody.node,
        tagName: 'tr',
      });

      // Rank + icon
      const iconWrap = new Component({
        parentNode: tr.node,
        tagName: 'td',
        content: index >= 3 ? (index + 1).toString() : undefined,
      });
      if (index <= 2) {
        new Icon({
          parentNode: iconWrap.node,
          icon: 'place_1',
          size: 'md',
        });
      }

      new Component({
        parentNode: tr.node,
        tagName: 'td',
        content: row.name,
      });

      new Component({
        parentNode: tr.node,
        tagName: 'td',
        content: String(row.score),
      });

      new Component({
        parentNode: tr.node,
        tagName: 'td',
        content: formatDate(new Date(row.date)),
      });
    });

    const actions = new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: 'app-leaderboard_wrap_actions ',
    });

    new Button({
      parentNode: actions.node,
      color: 'arrow-left',
      text: 'Back',
      className: 'app-leaderboard_back-btn',
      onClick: onBack,
    });

    new Button({
      parentNode: actions.node,
      color: 'magic',
      text: 'Clear Leaderboard',
      className: 'app-leaderboard_clear-btn',
      leftIcon: 'symbol',
      onClick: onClean,
    });
  }

  destroy(): void {
    super.destroy();
  }
}
