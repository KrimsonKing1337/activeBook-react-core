"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMuteToAllVideos = void 0;
var store_1 = require("../../store");
function setMuteToAllVideos(muted) {
    var videos = document.querySelectorAll('video');
    var _a = store_1.store.getState().volume, videosVolume = _a.videos, globalVolume = _a.global;
    videos.forEach(function (videoCur) {
        var volume = muted ? 0 : (videosVolume / 100);
        var relativeVolumeStr = videoCur.getAttribute('data-relativeVolume');
        var relativeVolume = Number(relativeVolumeStr) || 100;
        videoCur.volume = volume * (relativeVolume / 100) * (globalVolume / 100);
    });
}
exports.setMuteToAllVideos = setMuteToAllVideos;
//# sourceMappingURL=utils.js.map