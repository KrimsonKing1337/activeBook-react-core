import { Howler } from 'howler';
export function waitForMediaLoad() {
    var images = Array.from(document.querySelectorAll('img'));
    var videos = Array.from(document.querySelectorAll('video'));
    var promises = [];
    images.forEach(function (imageCur) {
        if (!imageCur.complete) {
            var promise = new Promise(function (resolve) {
                imageCur.addEventListener('load', resolve);
                imageCur.addEventListener('error', resolve); // игнорируем ошибки
            });
            promises.push(promise);
        }
    });
    videos.forEach(function (videoCur) {
        if (videoCur.readyState < 4) { // readyState 4 - значит, что видео готово к воспроизведению
            var promise = new Promise(function (resolve) {
                videoCur.addEventListener('loadeddata', resolve);
                videoCur.addEventListener('error', resolve); // игнорируем ошибки
            });
            promises.push(promise);
        }
    });
    return Promise.all(promises);
}
export function waitForHowlerLoad() {
    var promises = [];
    var Howl = Howler;
    Howl._howls.forEach(function (howlCur) {
        if (howlCur.state() === 'loaded') {
            return;
        }
        var promise = new Promise(function (resolve) {
            howlCur.on('load', function () {
                resolve();
            });
        });
        promises.push(promise);
    });
    return Promise.all(promises);
}
//# sourceMappingURL=utils.js.map