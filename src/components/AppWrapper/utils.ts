export function setMuteToAllVideos(muted: boolean) {
  const videos = document.querySelectorAll('video');

  videos.forEach((videoCur) => {
    videoCur.muted = muted;
  });
}
