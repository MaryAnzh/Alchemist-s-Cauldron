export type Rng = () => number;

export const shuffle = <T>(items: readonly T[], rng: Rng = Math.random): T[] => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const randomInt = (min: number, max: number, rng: Rng = Math.random): number =>
  min + Math.floor(rng() * (max - min + 1));
