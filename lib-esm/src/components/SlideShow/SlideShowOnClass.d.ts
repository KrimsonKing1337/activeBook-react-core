import React, { PropsWithChildren } from 'react';
type SlideShowMode = 'modal' | null;
export type SlideShowProp = {
    isVisible?: boolean;
    isWithoutBorders?: boolean;
    mode?: SlideShowMode;
    onSlideChange?: () => void;
};
type SlideShowState = {
    slideIndex: number;
    isOverflow: boolean;
    arrowsAreVisible: boolean;
};
export declare class SlideShow extends React.Component<PropsWithChildren<SlideShowProp>, SlideShowState> {
    static defaultProps: {
        isVisible: boolean;
        isWithoutBorders: boolean;
        mode: null;
        onSlideChange: () => void;
    };
    private hammertime;
    private readonly itemsWrapperRef;
    private readonly wrapperRef;
    private readonly slideShowRef;
    childrenAsArray: (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal)[];
    constructor(props: SlideShowProp);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: SlideShowProp, prevState: SlideShowState): void;
    setSlideShowTransformTranslateX: (value: string) => void;
    changeSlide: (isNext: boolean) => void;
    setIsOverflow: () => void;
    isNotVisibleHandler: () => void;
    wrapperClickHandler: () => void;
    arrowClickHandler: (e: React.MouseEvent, isNext: boolean) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
