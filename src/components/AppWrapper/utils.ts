import type { HowlInstances } from '@types';

import { store } from 'store';

export function setMuteToAllVideos(muted: boolean) {
  const videos = document.querySelectorAll('video');

  const { videos: videosVolume, global: globalVolume } = store.getState().volume;

  videos.forEach((videoCur) => {
    const volume = muted ? 0 : (videosVolume / 100);
    const relativeVolumeStr = videoCur.getAttribute('data-relativeVolume');
    const relativeVolume = Number(relativeVolumeStr) || 100;

    videoCur.volume = volume * (relativeVolume / 100) * (globalVolume / 100);
  });
}

export function startToPlayAllAudiosWithPlayOnLoad(audioInstances: HowlInstances, page: number) {
  Object.values(audioInstances).forEach((audio) => {
    if (!audio) return;
    if (audio.page !== page && !audio.isRange) return;
    if (audio.isUnloading) return;
    if (audio.playing()) return;
    if (!audio.playOnLoad) return;

    audio.play();
  });
}

export function startToPlayAllVideosWithPlayOnLoad() {
  const videos = Array.from(document.querySelectorAll('video'));

  videos.forEach((videoCur) => {
    const autoPlay = videoCur.getAttribute('data-autoPlay');

    if (autoPlay === 'true') {
      videoCur.play();
    }
  });
}
