export function setVideosVolume(volume: number) {
  const videos = document.querySelectorAll('video');

  videos.forEach(videoCur => {
    const relativeVolumeStr = videoCur.getAttribute('data-relativeVolume');
    const relativeVolume = Number(relativeVolumeStr) || 100;

    videoCur.volume = (volume / 100) * (relativeVolume / 100);
  });
}
