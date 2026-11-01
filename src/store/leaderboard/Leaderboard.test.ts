import { describe, expect, it, vi } from 'vitest';
import { Leaderboard, LEADERBOARD_LIMIT } from './Leaderboard';

const makeStore = (initial: unknown = null) => ({
  load: vi.fn(() => initial),
  save: vi.fn(() => true),
  clear: vi.fn(),
});

const row = (score: number) => ({ name: `P${score}`, score, date: new Date(0) });

describe('Leaderboard', () => {
  it('starts empty when storage has nothing', () => {
    const lb = new Leaderboard(makeStore());
    expect(lb.get()).toEqual({ easy: [], medium: [], hard: [] });
  });

  it('clears invalid stored data and starts empty', () => {
    const store = makeStore({ easy: 'bad' });
    const lb = new Leaderboard(store);
    expect(store.clear).toHaveBeenCalledWith('LEADERBOARD');
    expect(lb.get().easy).toEqual([]);
  });

  it('never accepts a zero score as a record', () => {
    const lb = new Leaderboard(makeStore());
    expect(lb.isRecord('easy', 0)).toBe(false);
    expect(lb.isRecord('easy', 1)).toBe(true);
  });

  it('keeps the list sorted and limited to ten rows, saving each change', () => {
    const store = makeStore();
    const lb = new Leaderboard(store);
    for (let i = 1; i <= LEADERBOARD_LIMIT + 2; i++) lb.add('medium', row(i * 10));

    const list = lb.get().medium;
    expect(list).toHaveLength(LEADERBOARD_LIMIT);
    expect(list[0].score).toBe(120);
    expect(list.at(-1)?.score).toBe(30);
    expect(store.save).toHaveBeenCalledTimes(LEADERBOARD_LIMIT + 2);
  });

  it('requires a score at least equal to the last place when the table is full', () => {
    const lb = new Leaderboard(makeStore());
    for (let i = 1; i <= LEADERBOARD_LIMIT; i++) lb.add('hard', row(i * 10));
    expect(lb.isRecord('hard', 9)).toBe(false);
    expect(lb.isRecord('hard', 10)).toBe(true);
  });

  it('keeps difficulties independent', () => {
    const lb = new Leaderboard(makeStore());
    lb.add('easy', row(50));
    expect(lb.get().hard).toEqual([]);
  });

  it('clears all rows and saves the empty table', () => {
    const store = makeStore();
    const lb = new Leaderboard(store);
    lb.add('easy', row(50));
    lb.clear();
    expect(lb.get().easy).toEqual([]);
    expect(store.save).toHaveBeenLastCalledWith('LEADERBOARD', {
      easy: [],
      medium: [],
      hard: [],
    });
  });
});
