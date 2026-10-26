import { parseHash, type RoutePath } from './routes';

export class Router {
  private handler: ((route: RoutePath) => void) | null = null;

  constructor() {
    window.addEventListener('hashchange', () => this.handler?.(this.current()));
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
}

export const router = new Router();
