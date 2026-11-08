export const SLIDE_7_TEST_TREE = `src/store/logic/
├── profile/
│   ├── profile.ts
│   └── profile.test.ts   → ../validate.ts
└── statistics/
    ├── candles.ts        → candles.test.ts
    ├── chart.ts          → chart.test.ts
    ├── demo.ts           → demo.test.ts
    ├── difficulty.ts     → difficulty.test.ts
    ├── heatmap.ts        → heatmap.test.ts
    ├── histogram.ts      → histogram.test.ts
    ├── reasons.ts        → reasons.test.ts
    └── statistics.ts     → statistics.test.ts`;

export const SLIDE_7_TEST_VALID = `export const PLAYER_NAME_REGEX = /^[A-Za-z0-9 _-]{2,15}$/;

export const isValidPlayerName = (value: string): boolean =>
  PLAYER_NAME_REGEX.test(value) && value.trim() === value;

it('accepts a valid profile', () => {
  expect(ValidateProfile(validProfile)).toBe(true);
});`;

export const SLIDE_7_TEST_REJECT = `it('rejects an unsupported version or invalid name', () => {
  expect(ValidateProfile({ ...validProfile, version: 2 })).toBe(false);
  expect(ValidateProfile({ ...validProfile, name: ' ' })).toBe(false);
  expect(ValidateProfile({ ...validProfile, name: 'A'.repeat(16) })).toBe(false);
});`;

export const SLIDE_7_TEST_DIFFICULTY = `it('counts games and shares per level', () => {
  const result = buildDifficultyBreakdown([
    record('easy'),
    record('easy'),
    record('hard'),
    record('medium'),
  ]);
  expect(result).toEqual([
    { difficulty: 'easy', games: 2, share: 0.5 },
    { difficulty: 'medium', games: 1, share: 0.25 },
    { difficulty: 'hard', games: 1, share: 0.25 },
  ]);
});`;
