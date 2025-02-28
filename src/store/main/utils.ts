import { Howler } from 'howler';
import type { HowlExtended } from '@types';

export function waitForMediaLoad() {
  const images = Array.from(document.querySelectorAll('img'));
  const videos = Array.from(document.querySelectorAll('video'));

  const promises: Promise<unknown>[] = [];

  images.forEach((imageCur) => {
    if (!imageCur.complete) {
      const promise = new Promise((resolve) => {
        imageCur.addEventListener('load', resolve);
        imageCur.addEventListener('error', resolve); // игнорируем ошибки
      });

      promises.push(promise);
    }
  });

  videos.forEach((videoCur) => {
    if (videoCur.readyState < 4) { // readyState 4 - значит, что видео готово к воспроизведению
      const promise = new Promise((resolve) => {
        videoCur.addEventListener('loadeddata', resolve);
        videoCur.addEventListener('error', resolve); // игнорируем ошибки
      });

      promises.push(promise);
    }
  });

  return Promise.all(promises);
}

export function waitForHowlerLoad() {
  const promises: Promise<void>[] = [];

  const Howl = Howler as unknown as HowlExtended;

  Howl._howls.forEach((howlCur: Howl) => {
    if (howlCur.state() === 'loaded') {
      return;
    }

    const promise = new Promise<void>((resolve) => {
      howlCur.on('load', () => {
        resolve();
      });
    });

    promises.push(promise);
  });

  return Promise.all(promises);
}
