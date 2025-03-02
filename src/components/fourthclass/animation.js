export class FadeInAnimation {
    constructor(node) {
      this.node = node;
    }
    start(duration) {
      this.duration = duration;
      if (this.duration === 0) {
        // Saltar al final inmediatamente
        this.onProgress(1);
      } else {
        this.onProgress(0);
        // Comenzar a animar
        this.startTime = performance.now();
        this.frameId = requestAnimationFrame(() => this.onFrame());
      }
    }
    onFrame() {
      const timePassed = performance.now() - this.startTime;
      const progress = Math.min(timePassed / this.duration, 1);
      this.onProgress(progress);
      if (progress < 1) {
        // Todavía nos quedan más fotogramas por pintar
        this.frameId = requestAnimationFrame(() => this.onFrame());
      }
    }
    onProgress(progress) {
      this.node.style.opacity = progress;
    }
    stop() {
      cancelAnimationFrame(this.frameId);
      this.startTime = null;
      this.frameId = null;
      this.duration = 0;
    }
}  