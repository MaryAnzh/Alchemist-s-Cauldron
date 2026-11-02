import type { GameRecordType } from '@types';

export type HistogramBinType = { from: number; to: number; games: number };

const BIN_COUNT = 8;

export const buildBrewsHistogram = (history: GameRecordType[]): HistogramBinType[] => {
  const max = Math.max(0, ...history.map((r) => r.successfulBrews));
  const size = Math.max(1, Math.ceil((max + 1) / BIN_COUNT));

  const bins: HistogramBinType[] = [];
  for (let from = 0; from <= max; from += size) {
    bins.push({ from, to: from + size - 1, games: 0 });
  }

  history.forEach(({ successfulBrews }) => {
    bins[Math.floor(successfulBrews / size)].games += 1;
  });

  return bins;
};

export const formatBinLabel = ({ from, to }: HistogramBinType): string =>
  from === to ? `${from}` : `${from}–${to}`;
