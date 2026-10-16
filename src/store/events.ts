export class EventEmitter {
  private events: Record<string, Set<Function>> = {};

  on(event: string, listener: Function) {
    if (!this.events[event]) this.events[event] = new Set();
    this.events[event].add(listener);
  }

  off(event: string, listener: Function) {
    this.events[event]?.delete(listener);
  }

  emit(event: string, payload?: unknown) {
    this.events[event]?.forEach((listener) => listener(payload));
  }
}
