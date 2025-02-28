export function setVideosVolume(volume) {
    var videos = document.querySelectorAll('video');
    videos.forEach(function (videoCur) {
        var relativeVolumeStr = videoCur.getAttribute('data-relativeVolume');
        var relativeVolume = Number(relativeVolumeStr) || 100;
        videoCur.volume = (volume / 100) * (relativeVolume / 100);
    });
}
//# sourceMappingURL=utils.js.map