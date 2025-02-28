import { store } from 'store';

export function setMuteToAllVideos(muted: boolean) {
  const videos = document.querySelectorAll('video');

  const videosVolume = store.getState().volume.videos;

  videos.forEach((videoCur) => {
    const volume = muted ? 0 : (videosVolume / 100);
    const relativeVolumeStr = videoCur.getAttribute('data-relativeVolume');
    const relativeVolume = Number(relativeVolumeStr) || 100;

    videoCur.volume = volume * (relativeVolume / 100);
  });
}
