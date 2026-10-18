export class GameTimer {
  private intervalId: number | null = null;
  private endTimestamp = 0;

  start(initialSeconds: number, onTick: (time: number) => void, onEnd: () => void) {
    this.stop();

    this.endTimestamp = Date.now() + initialSeconds * 1000;

    this.intervalId = window.setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((this.endTimestamp - now) / 1000));

      onTick(remaining);

      if (remaining <= 0) {
        this.stop();
        onEnd();
      }
    }, 250); // 4 раза в секунду — плавно и точно
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resume(onTick: (time: number) => void, onEnd: () => void, remainingSeconds: number) {
    this.start(remainingSeconds, onTick, onEnd);
  }
}
