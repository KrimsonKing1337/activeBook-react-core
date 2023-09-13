"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollDown = exports.scrollUp = exports.scroll = void 0;
var scrollValueDefault = 30;
function scroll(elem, scrollTop) {
    elem.scrollBy({ top: scrollTop, behavior: 'auto' });
}
exports.scroll = scroll;
function scrollUp(elem) {
    scroll(elem, -scrollValueDefault);
}
exports.scrollUp = scrollUp;
function scrollDown(elem) {
    scroll(elem, scrollValueDefault);
}
exports.scrollDown = scrollDown;
//# sourceMappingURL=scroll.js.map