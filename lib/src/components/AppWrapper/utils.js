import { store } from '../../store';
export function setMuteToAllVideos(muted) {
    var videos = document.querySelectorAll('video');
    var _a = store.getState().volume, videosVolume = _a.videos, globalVolume = _a.global;
    videos.forEach(function (videoCur) {
        var volume = muted ? 0 : (videosVolume / 100);
        var relativeVolumeStr = videoCur.getAttribute('data-relativeVolume');
        var relativeVolume = Number(relativeVolumeStr) || 100;
        videoCur.volume = volume * (relativeVolume / 100) * (globalVolume / 100);
    });
}
export function startToPlayAllAudiosWithPlayOnLoad(audioInstances, page) {
    console.log('keys:', Object.keys(audioInstances));
    Object.entries(audioInstances).forEach(function (_a) {
        var audio = _a[1];
        if (!audio)
            return;
        if (audio.page !== page)
            return;
        if (audio.isUnloading)
            return;
        if (audio.playing())
            return;
        if (!audio.playOnLoad)
            return;
        audio.play();
    });
}
//# sourceMappingURL=utils.js.map