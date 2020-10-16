export default class AudioController {
  constructor(audio) {
    this.audio = audio;
  }

  playSong(name) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createBufferSource();
    source.buffer = this.audio[name];
    source.connect(audioCtx.destination);
    source.start(0);
    return source;
  }

  playTheme() {
    this.themeSong = this.playSong("theme");
    this.themeSong.loop = true;
  }

  stopTheme() {
    this.themeSong.stop();
  }

  pauseTheme() {
    this.themeSong.pause();
  }

  resumeTheme() {
    this.themeSong.resume();
  }

  playJump() {
    this.playSong("jump");
  }

  playCoin() {
    this.playSong("coin");
  }

  playStomp() {
    this.playSong("stomp");
  }

  playDie() {
    this.pauseTheme();
    this.playSong("die");
  }
}