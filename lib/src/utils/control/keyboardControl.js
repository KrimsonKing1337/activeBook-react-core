"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addKeyboardControl = void 0;
var goToPage_1 = require("../control/goToPage");
var scroll_1 = require("../control/scroll");
function addKeyboardControl() {
    document.addEventListener('keydown', function (e) {
        var code = e.code, repeat = e.repeat;
        if (code === 'ArrowLeft' || code === 'KeyA') {
            if (repeat) {
                return;
            }
            (0, goToPage_1.goPrevPage)();
            return;
        }
        if (code === 'ArrowRight' || code === 'KeyD') {
            if (repeat) {
                return;
            }
            (0, goToPage_1.goNextPage)();
            return;
        }
        // todo: при такой реализации, скролл неплавный. нужно сделать как при нажатии на стрелочки
        //  https://stackoverflow.com/questions/62600489/scroll-event-on-keydown-like-down-arrow-and-up-arrow
        if ( /*code === 'ArrowUp' || */code === 'KeyW') {
            (0, scroll_1.scrollUp)(document.activeElement);
            return;
        }
        // todo: при такой реализации, скролл неплавный. нужно сделать как при нажатии на стрелочки
        //  https://stackoverflow.com/questions/62600489/scroll-event-on-keydown-like-down-arrow-and-up-arrow
        if ( /*code === 'ArrowDown' || */code === 'KeyS') {
            (0, scroll_1.scrollDown)(document.activeElement);
            return;
        }
    });
}
exports.addKeyboardControl = addKeyboardControl;
//# sourceMappingURL=keyboardControl.js.map