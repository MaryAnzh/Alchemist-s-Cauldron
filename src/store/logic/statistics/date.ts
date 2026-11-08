export const startOfDay = (timestamp: number): number => {
  const date = new Date(timestamp);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
};

export const shiftDay = (timestamp: number, days: number): number => {
  const date = new Date(timestamp);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days).getTime();
};

export const startOfWeek = (timestamp: number): number => {
  const mondayOffset = (new Date(timestamp).getDay() + 6) % 7;
  return shiftDay(startOfDay(timestamp), -mondayOffset);
};
