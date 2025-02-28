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
