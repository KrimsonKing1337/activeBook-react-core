"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTouchSupportForCssHover = void 0;
var getAllElementsWithPseudoClass_1 = require("./getAllElementsWithPseudoClass");
var replaceCssPseudoClassWith_1 = require("./replaceCssPseudoClassWith");
var utils_1 = require("./utils");
function touchStartHandler() {
    var classList = document.body.classList;
    if (classList.contains('is-touch')) {
        return;
    }
    (0, replaceCssPseudoClassWith_1.replaceCssPseudoClassWith)(':hover', ".".concat(utils_1.selectorInsteadOfHover));
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
    (0, replaceCssPseudoClassWith_1.replaceCssPseudoClassWith)(".".concat(utils_1.selectorInsteadOfHover), ':hover');
    classList.remove('is-touch');
}
function addTouchSupportForCssHover() {
    var elementsWithHover = (0, getAllElementsWithPseudoClass_1.getAllElementsWithPseudoClass)(':hover');
    elementsWithHover.forEach(function (elementCur) {
        if (!elementCur) {
            return;
        }
        var addClassListHover = function () { return elementCur.classList.add(utils_1.selectorInsteadOfHover); };
        var removeClassListHover = function () { return elementCur.classList.remove(utils_1.selectorInsteadOfHover); };
        elementCur.addEventListener('touchstart', addClassListHover);
        elementCur.addEventListener('touchmove', addClassListHover);
        elementCur.addEventListener('touchend', removeClassListHover);
        elementCur.addEventListener('touchcancel', removeClassListHover);
    });
    document.addEventListener('touchstart', touchStartHandler);
    document.addEventListener('mouseover', mouseOverHandler);
}
exports.addTouchSupportForCssHover = addTouchSupportForCssHover;
//# sourceMappingURL=addTouchSupportForCssHover.js.map