import { afterEach, describe, expect, it, vi } from 'vitest';

import { ACCOUNT, HOME, PRESENTATION, ROUTER_EVENTS, ROUTES, STATS } from '@constants';

type HashListener = () => void;

const setup = async () => {
  const listeners: HashListener[] = [];
  const fakeWindow = {
    location: { hash: '' },
    addEventListener: vi.fn((_: string, listener: HashListener) => listeners.push(listener)),
  };
  vi.stubGlobal('window', fakeWindow);
  vi.resetModules();

  const { Router } = await import('./Router');
  const router = new Router();
  const fireHashChange = () => listeners.forEach((listener) => listener());

  return { router, fakeWindow, fireHashChange };
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('Router', () => {
  it('reads the current route from the hash', async () => {
    const { router, fakeWindow } = await setup();
    fakeWindow.location.hash = '#/profile/stats';
    expect(router.current()).toBe(ROUTES[STATS]);
  });

  it('falls back to HOME for an unknown hash', async () => {
    const { router, fakeWindow } = await setup();
    fakeWindow.location.hash = '#/unknown';
    expect(router.current()).toBe(ROUTES[HOME]);
  });

  it('writes the hash on navigate', async () => {
    const { router, fakeWindow } = await setup();
    router.navigate(ROUTES[ACCOUNT]);
    expect(fakeWindow.location.hash).toBe(ROUTES[ACCOUNT]);
  });

  it('calls the change handler and emits PATH_CHANGE on hashchange', async () => {
    const { router, fakeWindow, fireHashChange } = await setup();
    const onChange = vi.fn();
    const onPathChange = vi.fn();
    router.onChange(onChange);
    router.subscribe(ROUTER_EVENTS.PATH_CHANGE, onPathChange);

    fakeWindow.location.hash = '#/presentation';
    fireHashChange();

    expect(onChange).toHaveBeenCalledWith(ROUTES[PRESENTATION]);
    expect(onPathChange).toHaveBeenCalledWith(ROUTES[PRESENTATION]);
  });
});
