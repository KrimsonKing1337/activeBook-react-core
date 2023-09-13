const scrollValueDefault = 30;

export function scroll(elem: HTMLElement, scrollTop: number) {
  elem.scrollBy({ top: scrollTop, behavior: 'auto' });
}

export function scrollUp(elem: HTMLElement) {
  scroll(elem, -scrollValueDefault);
}

export function scrollDown(elem: HTMLElement) {
  scroll(elem, scrollValueDefault);
}
