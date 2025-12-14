import { scrollDown, scrollUp } from '../control/scroll';
export function addKeyboardControl(goPrevPage, goNextPage) {
    var narrativeElement = document.querySelector('#narrative');
    document.addEventListener('keydown', function (e) {
        var code = e.code, repeat = e.repeat;
        if (code === 'ArrowLeft' || code === 'KeyA') {
            if (repeat) {
                return;
            }
            goPrevPage();
            return;
        }
        if (code === 'ArrowRight' || code === 'KeyD') {
            if (repeat) {
                return;
            }
            goNextPage();
            return;
        }
        var behavior = repeat ? 'auto' : 'smooth';
        var scrollSpeed = repeat ? 20 : 75;
        if (code === 'KeyW') {
            scrollUp({
                elem: narrativeElement,
                behavior: behavior,
                scrollValue: scrollSpeed,
            });
            return;
        }
        if (code === 'KeyS') {
            scrollDown({
                elem: narrativeElement,
                behavior: behavior,
                scrollValue: scrollSpeed,
            });
            return;
        }
    });
}
//# sourceMappingURL=keyboardControl.js.map