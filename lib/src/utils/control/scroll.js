var scrollValueDefault = 30;
export function scroll(elem, scrollTop) {
    elem.scrollBy({ top: scrollTop, behavior: 'auto' });
}
export function scrollUp(elem) {
    scroll(elem, -scrollValueDefault);
}
export function scrollDown(elem) {
    scroll(elem, scrollValueDefault);
}
//# sourceMappingURL=scroll.js.map