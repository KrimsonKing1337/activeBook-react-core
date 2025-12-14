export type Scroll = {
  elem: HTMLElement;
  scrollTop: number;
  behavior?: ScrollBehavior;
};

export function scroll({ elem, scrollTop, behavior = 'auto' }: Scroll) {
  elem.scrollBy({
    top: scrollTop,
    behavior: behavior as ScrollBehavior,
  });
}

export type ScrollUp = {
  elem: HTMLElement;
  behavior: ScrollBehavior;
  scrollValue: number;
};

export function scrollUp({ elem, behavior, scrollValue }: ScrollUp) {
  scroll({
    elem,
    behavior,
    scrollTop: -scrollValue,
  });
}

export function scrollDown({ elem, behavior, scrollValue }: ScrollUp) {
  scroll({
    elem,
    behavior,
    scrollTop: scrollValue,
  });
}
