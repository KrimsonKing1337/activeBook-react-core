import { getAllElementsWithPseudoClass } from './getAllElementsWithPseudoClass';
import { replaceCssPseudoClassWith } from './replaceCssPseudoClassWith';
import { selectorInsteadOfHover } from './utils';
function touchStartHandler() {
    var classList = document.body.classList;
    if (classList.contains('is-touch')) {
        return;
    }
    replaceCssPseudoClassWith(':hover', ".".concat(selectorInsteadOfHover));
    classList.add('is-touch');
}
// todo: не нашёл, у какого event-а есть свойство sourceCapabilities
function mouseOverHandler(e) {
    var _a;
    if ((_a = e === null || e === void 0 ? void 0 : e.sourceCapabilities) === null || _a === void 0 ? void 0 : _a.firesTouchEvents) {
        return;
    }
    var classList = document.body.classList;
    if (!classList.contains('is-touch')) {
        return;
    }
    replaceCssPseudoClassWith(".".concat(selectorInsteadOfHover), ':hover');
    classList.remove('is-touch');
}
export function addTouchSupportForCssHover() {
    var elementsWithHover = getAllElementsWithPseudoClass(':hover');
    elementsWithHover.forEach(function (elementCur) {
        if (!elementCur) {
            return;
        }
        var addClassListHover = function () { return elementCur.classList.add(selectorInsteadOfHover); };
        var removeClassListHover = function () { return elementCur.classList.remove(selectorInsteadOfHover); };
        elementCur.addEventListener('touchstart', addClassListHover);
        elementCur.addEventListener('touchmove', addClassListHover);
        elementCur.addEventListener('touchend', removeClassListHover);
        elementCur.addEventListener('touchcancel', removeClassListHover);
    });
    document.addEventListener('touchstart', touchStartHandler);
    document.addEventListener('mouseover', mouseOverHandler);
}
//# sourceMappingURL=addTouchSupportForCssHover.js.map