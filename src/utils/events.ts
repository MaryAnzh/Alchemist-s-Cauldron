export class EventEmitter<Events extends Record<string, unknown>> {
  private events: {
    [K in keyof Events]?: Set<(payload: Events[K]) => void>;
  } = {};

  on<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void) {
    if (!this.events[event]) this.events[event] = new Set();
    this.events[event]!.add(listener);
  }

  off<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void) {
    this.events[event]?.delete(listener);
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]) {
    this.events[event]?.forEach((listener) => listener(payload));
  }
}
