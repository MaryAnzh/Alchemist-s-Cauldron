export const remainingSeconds = (endTimestamp: number, now: number): number =>
  Math.max(0, Math.floor((endTimestamp - now) / 1000));

// Remaining time after moving the deadline by delta seconds; may be <= 0
export const shiftedSeconds = (endTimestamp: number, now: number, delta: number): number =>
  remainingSeconds(endTimestamp, now) + delta;
