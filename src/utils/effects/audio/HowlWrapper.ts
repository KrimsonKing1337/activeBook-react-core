import { Howl, type HowlOptions } from 'howler';

import type { AudioType } from '@types';

import { store } from 'store';

export type HowlWrapperOptions = {
  id: string;
  src: HowlOptions['src'];
  loop?: HowlOptions['loop'];
  type?: AudioType;
  screamer?: boolean;
  fadeOutWhenUnload?: boolean;

  onPlay?: () => void;
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
  public isUnloading = false;
  public type: AudioType = 'sfx';
  public fadeOutWhenUnload = true;

  public onPlay: () => void;
  public onUnload: () => void;

  constructor({
    id,
    src,
    loop,
    type = 'sfx',
    screamer = false,
    fadeOutWhenUnload = true,

    onPlay = () => {
    },
    onUnload = () => {},
  }: HowlWrapperOptions) {
    const volume = this.getVolume();

    let volumeValue = volume.sfx / 100;

    const options: HowlerOptions = {
      src,
      loop,
    };

    if (type === 'bg') {
      volumeValue = volume.bg / 100;
    }

    if (type === 'music') {
      volumeValue = volume.music / 100;
    }

    options.volume = volumeValue;

    if (screamer) {
      options.volume = 1;
    }

    this.howlInst = new Howl(options);

    this.id = id;
    this.src = src;
    this.type = type;
    this.fadeOutWhenUnload = fadeOutWhenUnload;

    this.onPlay = onPlay;
    this.onUnload = onUnload;
  }

  volume(n: number) {
    this.howlInst.volume(n);
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
      await this.fadeIn();
    }

    return new Promise<void>((resolve) => {
      this.howlInst.once('end', () => {
        resolve();
      });

      this.howlInst.once('play', this.onPlay);

      this.howlInst.play();
    });
  }

  async pause(withFadeOut = false) {
    if (withFadeOut) {
      await this.fadeOut();
    }

    this.howlInst.pause();
  }

  async stop(withFadeOut = false) {
    if (withFadeOut) {
      await this.fadeOut();
    }

    this.howlInst.stop();
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
    const volume = this.getVolumeByType() / 100;

    await this.fade(0, volume, HowlWrapper.fadeDurationDefault);

    return this.howlInst;
  }

  async fadeOut() {
    const volume = this.getVolumeByType() / 100;

    await this.fade(volume, 0, HowlWrapper.fadeDurationDefault);

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
