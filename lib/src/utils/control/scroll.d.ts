export type Scroll = {
    elem: HTMLElement;
    scrollTop: number;
    behavior?: ScrollBehavior;
};
export declare function scroll({ elem, scrollTop, behavior }: Scroll): void;
export type ScrollUp = {
    elem: HTMLElement;
    behavior: ScrollBehavior;
    scrollValue: number;
};
export declare function scrollUp({ elem, behavior, scrollValue }: ScrollUp): void;
export declare function scrollDown({ elem, behavior, scrollValue }: ScrollUp): void;
