import { EASY, HARD, MEDIUM } from '@constants';
import type {
  ParentNodeType,
  LeaderboardStorageType,
  GameDifficultType,
  IconPickerType,
} from '@types';
import { Button, Component, Icon } from '@ui';
import { formatDate } from '@utils';

type LeaderboardProps = ParentNodeType & {
  onBack: () => void;
  onClean: () => void;
  data: LeaderboardStorageType;
};

const DIFFICULTIES: GameDifficultType[] = [EASY, MEDIUM, HARD];

export class Leaderboard extends Component {
  constructor({ parentNode, onBack, onClean, data }: LeaderboardProps) {
    super({ parentNode, tagName: 'div', className: 'app-leaderboard' });

    this.render(data, onBack, onClean);
  }

  render(leaders: LeaderboardStorageType, onBack: () => void, onClean: () => void) {
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

    ['Rank', 'Name', 'Score', 'Difficulty', 'Date'].forEach((title) => {
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

    const rows = DIFFICULTIES.flatMap((difficulty) =>
      leaders[difficulty].map((row, index) => ({ ...row, difficulty, rank: index })),
    );

    const hasRows = rows.length > 0;

    if (!hasRows) {
      const tr = new Component({
        parentNode: tbody.node,
        tagName: 'tr',
      });

      new Component({
        parentNode: tr.node,
        tagName: 'td',
        className: 'app-leaderboard_wrap_table_empty',
        attrs: { colspan: '5' },
        content: 'Leaderboard is empty',
      });
    } else {
      rows
        .sort((a, b) => b.score - a.score)
        .forEach((row, rowIndex) => {
          const tr = new Component({
            parentNode: tbody.node,
            tagName: 'tr',
          });

          const iconWrap = new Component({
            parentNode: tr.node,
            tagName: 'td',
            content: rowIndex >= 3 ? (rowIndex + 1).toString() : undefined,
          });

          if (rowIndex <= 2) {
            new Icon({
              parentNode: iconWrap.node,
              icon: `place_${rowIndex + 1}` as IconPickerType,
              size: 'md',
            });
          }

          new Component({
            parentNode: tr.node,
            tagName: 'td',
            className: 'app-leaderboard_wrap_table_name',
            content: row.name,
          });

          new Component({ parentNode: tr.node, tagName: 'td', content: String(row.score) });

          new Component({
            parentNode: tr.node,
            tagName: 'td',
            content: row.difficulty[0].toUpperCase() + row.difficulty.slice(1),
          });

          new Component({
            parentNode: tr.node,
            tagName: 'td',
            className: 'app-leaderboard_wrap_table_date',
            content: formatDate(new Date(row.date)),
          });
        });
    }

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

    const confirm = new Component({
      parentNode: wrap.node,
      tagName: 'div',
      className: 'app-leaderboard_confirm app-leaderboard_confirm--hidden',
    });

    new Component({
      parentNode: confirm.node,
      tagName: 'p',
      className: 'app-leaderboard_confirm-text',
      content: 'Clear the whole leaderboard? This cannot be undone.',
    });

    const confirmActions = new Component({
      parentNode: confirm.node,
      tagName: 'div',
      className: 'app-leaderboard_confirm-actions',
    });

    const toggleConfirm = (isOpen: boolean) => {
      confirm.node.classList.toggle('app-leaderboard_confirm--hidden', !isOpen);
      actions.node.classList.toggle('app-leaderboard_confirm--hidden', isOpen);
    };

    new Button({
      parentNode: confirmActions.node,
      color: 'arrow-left',
      text: 'Cancel',
      onClick: () => toggleConfirm(false),
    });

    new Button({
      parentNode: confirmActions.node,
      color: 'magic',
      text: 'Yes, clear',
      onClick: onClean,
    });

    new Button({
      parentNode: actions.node,
      color: 'magic',
      text: 'Clear Leaderboard',
      className: 'app-leaderboard_clear-btn',
      leftIcon: 'symbol',
      disabled: hasRows ? undefined : 'disabled',
      onClick: () => {
        if (!hasRows) return;
        toggleConfirm(true);
      },
    });
  }

  destroy(): void {
    super.destroy();
  }
}
