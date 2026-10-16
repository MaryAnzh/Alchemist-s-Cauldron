export class GameTimer {
  private intervalId: number | null = null;

  start(initialTime: number, onTick: (time: number) => void, onEnd: () => void) {
    let time = initialTime;

    this.stop();

    this.intervalId = window.setInterval(() => {
      time -= 1;
      onTick(time);

      if (time <= 0) {
        this.stop();
        onEnd();
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resume(onTick: (time: number) => void, onEnd: () => void, currentTime: number) {
    this.start(currentTime, onTick, onEnd);
  }
}
