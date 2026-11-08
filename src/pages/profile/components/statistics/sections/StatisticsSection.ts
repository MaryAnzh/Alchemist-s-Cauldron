import type { GameRecordType } from '@types';
import { Component } from '@ui';

export abstract class StatisticsSection extends Component {
  abstract update(history: GameRecordType[]): void;
}
