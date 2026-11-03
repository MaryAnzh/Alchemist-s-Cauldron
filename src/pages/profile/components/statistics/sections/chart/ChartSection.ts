import { buildLinePath, formatChartLabel, getChartSeries, toChartPoints } from '@store';
import type { ChartModeType } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Button, Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';

const SVG_NS = 'http://www.w3.org/2000/svg';
const VIEW_WIDTH = 300;
const VIEW_HEIGHT = 120;
const PADDING = 8;
const DOT_RADIUS = 3;

const MODES: ChartModeType[] = ['game', 'days', 'week'];
const DEFAULT_MODE: ChartModeType = 'days';
const MODE_TITLES: Record<ChartModeType, string> = {
  game: 'Score per game',
  days: 'Average score per day',
  week: 'Average score per week',
};

export class ChartSection extends StatisticsSection {
  private title: Component;
  private modeBar: Component;
  private modeButtons: Button[] = [];
  private body: Component;
  private empty: Component;
  private history: GameRecordType[] = [];
  private mode: ChartModeType = DEFAULT_MODE;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_chart',
    });

    this.title = new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
    });

    this.modeBar = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_filter app-statistics_chart_modes',
    });

    MODES.forEach((mode) => {
      const button = new Button({
        parentNode: this.modeBar.node,
        className: 'app-statistics_filter_item',
        color: 'dark',
        text: mode,
        ariaLabel: `Chart by ${mode}`,
        onClick: () => this.setMode(mode),
      });
      this.modeButtons.push(button);
    });

    this.body = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_chart',
    });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'Play a few games to see the chart',
    });
  }

  update(history: GameRecordType[]) {
    this.history = history;
    this.render();
  }

  destroy() {
    this.modeButtons.forEach((button) => button.destroy());
    super.destroy();
  }

  private setMode(mode: ChartModeType) {
    this.mode = mode;
    this.render();
  }

  private render() {
    const series = getChartSeries(this.history, this.mode);
    const points = toChartPoints(series, VIEW_WIDTH - PADDING * 2, VIEW_HEIGHT - PADDING * 2).map(
      ({ x, y }) => ({ x: x + PADDING, y: y + PADDING }),
    );
    const hasPoints = points.length > 0;

    this.title.node.textContent = MODE_TITLES[this.mode];
    this.modeBar.node.hidden = !hasPoints;
    this.modeButtons.forEach((button, index) => {
      button.node.classList.toggle('app-statistics_filter_item_active', MODES[index] === this.mode);
    });

    this.body.node.replaceChildren();
    this.body.node.hidden = !hasPoints;
    this.empty.node.hidden = hasPoints;

    if (!hasPoints) return;

    const labels = series.map((point) => formatChartLabel(point, this.mode));

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'app-statistics_chart_svg');
    svg.setAttribute('viewBox', `0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', MODE_TITLES[this.mode]);

    const tooltip = document.createElement('div');
    tooltip.className = 'app-statistics_chart_tooltip';
    tooltip.hidden = true;

    const showTooltip = (index: number) => {
      const { x, y } = points[index];
      tooltip.textContent = labels[index];
      tooltip.style.left = `${(x / VIEW_WIDTH) * 100}%`;
      tooltip.style.top = `${(y / VIEW_HEIGHT) * 100}%`;
      tooltip.hidden = false;
    };
    const hideTooltip = () => {
      tooltip.hidden = true;
    };

    const line = document.createElementNS(SVG_NS, 'path');
    line.setAttribute('class', 'app-statistics_chart_line');
    line.setAttribute('d', buildLinePath(points));
    svg.append(line);

    points.forEach(({ x, y }, index) => {
      const dot = document.createElementNS(SVG_NS, 'circle');
      dot.setAttribute('class', 'app-statistics_chart_dot');
      dot.setAttribute('cx', x.toFixed(2));
      dot.setAttribute('cy', y.toFixed(2));
      dot.setAttribute('r', String(DOT_RADIUS));
      dot.setAttribute('tabindex', '0');
      dot.setAttribute('aria-label', labels[index]);
      dot.addEventListener('pointerenter', () => showTooltip(index));
      dot.addEventListener('pointerleave', hideTooltip);
      dot.addEventListener('focus', () => showTooltip(index));
      dot.addEventListener('blur', hideTooltip);
      svg.append(dot);
    });

    this.body.node.append(svg, tooltip);
  }
}
