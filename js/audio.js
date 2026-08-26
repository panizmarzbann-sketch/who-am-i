/**
 * Who Am I? What Am I? - Audio Synthesizer
 * Built with Web Audio API (Zero external MP3 dependencies)
 * Designed for Paniz Marzban
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem("paniz_game_muted") === "true";
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("paniz_game_muted", this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // Soft subtle click / pop
  playPop() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      const now = this.audioCtx.currentTime;

      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  // Clue reveal chime
  playClue() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5

      freqs.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.1, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.3);
      });
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  // Letter hint sparkle
  playHint() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.15);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  // Correct answer victory fanfare
  playCorrect() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const notes = [
        { f: 523.25, t: 0.00, d: 0.12 }, // C5
        { f: 659.25, t: 0.10, d: 0.12 }, // E5
        { f: 783.99, t: 0.20, d: 0.12 }, // G5
        { f: 1046.50, t: 0.32, d: 0.40 } // C6
      ];

      const now = this.audioCtx.currentTime;

      notes.forEach(note => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(note.f, now + note.t);

        gain.gain.setValueAtTime(0, now + note.t);
        gain.gain.linearRampToValueAtTime(0.18, now + note.t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + note.t);
        osc.stop(now + note.t + note.d);
      });
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  // Wrong answer soft boop
  playWrong() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  // Level Up / Milestone celebration
  playLevelUp() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const notes = [
        { f: 440.00, t: 0.00, d: 0.15 },
        { f: 554.37, t: 0.12, d: 0.15 },
        { f: 659.25, t: 0.24, d: 0.15 },
        { f: 880.00, t: 0.36, d: 0.20 },
        { f: 1108.73, t: 0.50, d: 0.50 }
      ];

      const now = this.audioCtx.currentTime;

      notes.forEach(note => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(note.f, now + note.t);

        gain.gain.setValueAtTime(0, now + note.t);
        gain.gain.linearRampToValueAtTime(0.2, now + note.t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + note.t);
        osc.stop(now + note.t + note.d);
      });
    } catch (e) {
      console.warn("Audio error", e);
    }
  }
}

window.soundEngine = new SoundEngine();
