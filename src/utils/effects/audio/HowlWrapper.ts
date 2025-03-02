import { Howl, type HowlOptions } from 'howler';

import type { AudioType, Timer } from '@types';

import { store } from 'store';

export type HowlWrapperOptions = {
  id: string;
  src: HowlOptions['src'];
  loop?: HowlOptions['loop'];
  type?: AudioType;
  playOnLoad?: boolean;
  relativeVolume?: number;
  screamer?: boolean;
  fadeOutWhenUnload?: boolean;
  delay?: number;
  stopBy?: number;

  onPlay?: () => void;
  onPause?: () => void;
  onStop?: () => void;
  onUnload?: () => void;
};

type HowlerOptions = {
  src: HowlOptions['src'];
  loop?: HowlOptions['loop'];
  volume?: HowlOptions['volume'];
};

export class HowlWrapper {
  private static fadeDurationDefault = 1000;

  public readonly howlInst: Howl;
  public id: HowlWrapperOptions['id'];
  public src: HowlOptions['src'] = '';
  public type: AudioType = 'sfx';
  public playOnLoad = false;
  public relativeVolume: number;
  public fadeOutWhenUnload = true;

  public delay: number = 0;
  public stopBy: number = 0;

  public isUnloading = false;
  public isFading = false;

  public timers: Record<string, Timer>;

  public onPlay: () => void;
  public onPause: () => void;
  public onStop: () => void;
  public onUnload: () => void;

  constructor({
    id,
    src,
    loop,
    type = 'sfx',
    playOnLoad = false,
    relativeVolume = 100,
    screamer = false,
    fadeOutWhenUnload = true,
    delay = 0,
    stopBy = 0,

    onPlay = () => {
    },
    onUnload = () => {},
    onPause = () => {},
    onStop = () => {},
  }: HowlWrapperOptions) {
    const { sfx, bg, music, global } = this.getVolume();

    const getInitialVolume = (volume: number) => {
      return (volume / 100) * (relativeVolume / 100) * (global / 100);
    };

    let volumeValue = getInitialVolume(sfx);

    const options: HowlerOptions = {
      src,
      loop,
    };

    if (type === 'bg') {
      volumeValue = getInitialVolume(bg);
    }

    if (type === 'music') {
      volumeValue = getInitialVolume(music);
    }

    options.volume = volumeValue;

    if (screamer) {
      options.volume = 1;
    }

    this.howlInst = new Howl(options);

    this.id = id;
    this.src = src;
    this.type = type;
    this.relativeVolume = relativeVolume;
    this.fadeOutWhenUnload = fadeOutWhenUnload;
    this.delay = delay;
    this.stopBy = stopBy;
    this.playOnLoad = playOnLoad;

    this.timers = {
      delay: null,
      stopBy: null,
    };

    this.onPlay = onPlay;
    this.onPause = onPause;
    this.onStop = onStop;
    this.onUnload = onUnload;

    if (playOnLoad) {
      this.play();
    }
  }

  volume(n: number) {
    const globalVolume = this.getVolume().global;
    const newValue = n * (this.relativeVolume / 100) * (globalVolume / 100);

    this.howlInst.volume(newValue);
  }

  getVolume() {
    const storeState = store.getState();
    const { volume } = storeState;

    return volume;
  }

  getVolumeByType() {
    const volume = this.getVolume();

    let volumeValue = volume.sfx;

    if (this.type === 'bg') {
      volumeValue = volume.bg;
    } else if (this.type === 'music') {
      volumeValue = volume.music;
    }

    return volumeValue;
  }

  async play(withFadeIn = false) {
    if (withFadeIn) {
      if (!this.isFading) {
        await this.fadeIn();
      } else {
        this.howlInst.stop();
        this.isFading = false;
      }
    } else if (this.isFading) {
      this.howlInst.stop();
      this.isFading = false;
    }

    this.howlInst.once('play', this.onPlay);

    if (this.delay > 0) {
      this.timers.delay = setTimeout(() => {
        this.howlInst.play();

        this.timers.delay = null;
      }, this.delay);
    } else {
      this.howlInst.play();
    }

    if (this.stopBy > 0) {
      this.timers.stopBy = setTimeout(() => {
        this.howlInst.stop();

        this.timers.stopBy = null;
      }, this.stopBy);
    }
  }

  async pause(withFadeOut = false) {
    if (withFadeOut && !this.isFading) {
      await this.fadeOut();
    }

    this.howlInst.once('pause', this.onPause);
    this.howlInst.pause();

    this.isFading = false;

    // после остановки возвращаем громкость, иначе воспроизведение начнётся без звука, если withFadeOut = true
    const volume = this.getVolumeByType() / 100;
    this.volume(volume);
  }

  // не смог добиться быстрой остановки, всё равно ловлю баги. для сегментов лучше использовать без фэйда
  async stop(withFadeOut = false) {
    if (withFadeOut && !this.isFading) {
      await this.fadeOut();
    }

    this.howlInst.once('stop', this.onStop);
    this.howlInst.stop();

    this.isFading = false;

    // после остановки возвращаем громкость, иначе воспроизведение начнётся без звука, если withFadeOut = true
    const volume = this.getVolumeByType() / 100;
    this.volume(volume);
  }

  async unload() {
    this.isUnloading = true;

    if (this.fadeOutWhenUnload) {
      await this.fadeOut();
    }

    this.howlInst.unload();
    this.onUnload();
  }

  fade(from: number, to: number, dur: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, dur);

      this.howlInst.fade(from, to, HowlWrapper.fadeDurationDefault);
    });
  }

  async fadeIn() {
    this.isFading = true;

    const globalVolume = this.getVolume().global;

    const volume = (this.getVolumeByType() / 100) * (this.relativeVolume / 100) * (globalVolume / 100);

    await this.fade(0, volume, HowlWrapper.fadeDurationDefault);

    this.isFading = false;

    return this.howlInst;
  }

  async fadeOut() {
    this.isFading = true;

    const globalVolume = this.getVolume().global;

    const volume = (this.getVolumeByType() / 100) * (this.relativeVolume / 100) * (globalVolume / 100);

    await this.fade(volume, 0, HowlWrapper.fadeDurationDefault);

    this.isFading = false;

    return this.howlInst;
  }

  playing() {
    return this.howlInst.playing();
  }

  state() {
    return this.howlInst.state();
  }

  waitTillTheEnd() {
    this.isUnloading = true;

    return new Promise<void>((resolve) => {
      if (this.playing()) {
        const interval = setInterval(() => {
          if (!this.playing()) {
            clearInterval(interval);

            resolve();
          }
        }, 10);
      } else {
        resolve();
      }
    });
  }
}
