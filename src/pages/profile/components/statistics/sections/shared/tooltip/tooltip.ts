export const placeTooltip = (
  tooltip: HTMLElement,
  container: HTMLElement,
  x: number,
  y: number,
) => {
  tooltip.hidden = false;
  const half = tooltip.offsetWidth / 2;
  const left = Math.min(Math.max(x, half), container.clientWidth - half);
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${y}px`;
};
