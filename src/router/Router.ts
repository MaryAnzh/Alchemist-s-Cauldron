import { ROUTER_EVENTS } from '@constants';
import { parseHash, type RoutePath } from './routes';
import type { RouterEventsPayload } from '@types';
import { EventEmitter } from '@utils';

export class Router {
  private handler: ((route: RoutePath) => void) | null = null;
  private events = new EventEmitter<RouterEventsPayload>();

  constructor() {
    window.addEventListener('hashchange', () => {
      this.handler?.(this.current());
      this.emit(ROUTER_EVENTS.PATH_CHANGE, this.current());
    });
  }

  current(): RoutePath {
    return parseHash(window.location.hash);
  }

  onChange(handler: (route: RoutePath) => void) {
    this.handler = handler;
  }

  navigate(path: RoutePath) {
    window.location.hash = path;
  }

  public subscribe<K extends keyof RouterEventsPayload>(
    event: K,
    listener: (payload: RouterEventsPayload[K]) => void,
  ) {
    this.events.on(event, listener);
  }

  private emit<K extends keyof RouterEventsPayload>(event: K, payload: RouterEventsPayload[K]) {
    this.events.emit(event, payload);
  }
}

export const router = new Router();
