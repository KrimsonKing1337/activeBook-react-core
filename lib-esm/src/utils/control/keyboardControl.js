import { goNextPage, goPrevPage } from 'utils/control/goToPage';
import { scrollDown, scrollUp } from 'utils/control/scroll';
export function addKeyboardControl() {
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
        // todo: при такой реализации, скролл неплавный. нужно сделать как при нажатии на стрелочки
        //  https://stackoverflow.com/questions/62600489/scroll-event-on-keydown-like-down-arrow-and-up-arrow
        if ( /*code === 'ArrowUp' || */code === 'KeyW') {
            scrollUp(document.activeElement);
            return;
        }
        // todo: при такой реализации, скролл неплавный. нужно сделать как при нажатии на стрелочки
        //  https://stackoverflow.com/questions/62600489/scroll-event-on-keydown-like-down-arrow-and-up-arrow
        if ( /*code === 'ArrowDown' || */code === 'KeyS') {
            scrollDown(document.activeElement);
            return;
        }
    });
}
//# sourceMappingURL=keyboardControl.js.map