import { buildLinePath, formatScoreLabel, getScoreSeries, toChartPoints } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';

const SVG_NS = 'http://www.w3.org/2000/svg';
const VIEW_WIDTH = 300;
const VIEW_HEIGHT = 120;
const PADDING = 8;
const DOT_RADIUS = 3;

export class ChartSection extends StatisticsSection {
  private body: Component;
  private empty: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_chart',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Score per game',
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
    const scores = getScoreSeries(history);
    const points = toChartPoints(scores, VIEW_WIDTH - PADDING * 2, VIEW_HEIGHT - PADDING * 2).map(
      ({ x, y }) => ({ x: x + PADDING, y: y + PADDING }),
    );

    this.body.node.replaceChildren();
    this.body.node.hidden = points.length === 0;
    this.empty.node.hidden = points.length > 0;

    if (points.length === 0) return;

    const labels = scores.map(formatScoreLabel);

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'app-statistics_chart_svg');
    svg.setAttribute('viewBox', `0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Score per game');

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
