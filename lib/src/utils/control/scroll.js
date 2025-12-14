export function scroll(_a) {
    var elem = _a.elem, scrollTop = _a.scrollTop, _b = _a.behavior, behavior = _b === void 0 ? 'auto' : _b;
    elem.scrollBy({
        top: scrollTop,
        behavior: behavior,
    });
}
export function scrollUp(_a) {
    var elem = _a.elem, behavior = _a.behavior, scrollValue = _a.scrollValue;
    scroll({
        elem: elem,
        behavior: behavior,
        scrollTop: -scrollValue,
    });
}
export function scrollDown(_a) {
    var elem = _a.elem, behavior = _a.behavior, scrollValue = _a.scrollValue;
    scroll({
        elem: elem,
        behavior: behavior,
        scrollTop: scrollValue,
    });
}
//# sourceMappingURL=scroll.js.map