import { buildCandles, type CandleType } from '@store';
import type { GameRecordType, ParentNodeType } from '@types';
import { Component } from '@ui';
import { StatisticsSection } from '../StatisticsSection';

const dayFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'numeric' });
const toPercent = (value: number, max: number) => `${(value / max) * 100}%`;

export class CandlesSection extends StatisticsSection {
  private body: Component;
  private empty: Component;
  private legend: Component;

  constructor({ parentNode }: ParentNodeType) {
    super({
      parentNode,
      tagName: 'section',
      className: 'app-statistics_block app-statistics_block_candles',
    });

    new Component({
      parentNode: this.node,
      tagName: 'h3',
      className: 'app-statistics_block_title',
      content: 'Scores by day',
    });

    this.body = new Component({
      parentNode: this.node,
      tagName: 'div',
      className: 'app-statistics_candles',
    });

    this.empty = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_empty',
      content: 'Play a few games to see the daily candles',
    });

    this.legend = new Component({
      parentNode: this.node,
      tagName: 'p',
      className: 'app-statistics_candles_legend',
      content: 'Green: up · Red: down',
    });
  }

  update(history: GameRecordType[]) {
    this.body.node.replaceChildren();

    const candles = buildCandles(history);
    this.legend.node.hidden = candles.length === 0;
    this.body.node.hidden = candles.length === 0;
    this.empty.node.hidden = candles.length > 0;

    const max = Math.max(1, ...candles.map((candle) => candle.high));
    candles.forEach((candle) => this.renderCandle(candle, max));
  }

  private renderCandle(candle: CandleType, max: number) {
    const column = new Component({
      parentNode: this.body.node,
      tagName: 'div',
      className: 'app-statistics_candles_column',
    });
    const track = new Component({
      parentNode: column.node,
      tagName: 'div',
      className: 'app-statistics_candles_track',
    });
    const wick = new Component({
      parentNode: track.node,
      tagName: 'span',
      className: 'app-statistics_candles_wick',
    });
    const trend =
      candle.open === candle.close ? 'flat' : candle.close > candle.open ? 'up' : 'down';
    const body = new Component({
      parentNode: track.node,
      tagName: 'span',
      className: `app-statistics_candles_body app-statistics_candles_body_${trend}`,
    });

    wick.node.style.bottom = toPercent(candle.low, max);
    wick.node.style.height = toPercent(candle.high - candle.low, max);
    body.node.style.bottom = toPercent(Math.min(candle.open, candle.close), max);
    body.node.style.height = toPercent(Math.abs(candle.close - candle.open), max);

    new Component({
      parentNode: column.node,
      tagName: 'span',
      className: 'app-statistics_candles_label',
      content: dayFormatter.format(candle.day),
    });
  }
}
