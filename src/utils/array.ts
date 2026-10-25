export const arrayFromNumber = (num: number, start = 0, step = 1) =>
  Array.from({ length: num }, (_, i) => start + i * step);
