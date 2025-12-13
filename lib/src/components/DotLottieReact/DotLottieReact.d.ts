import { type DotLottie as DotLottieOriginal, type DotLottieReactProps as DotLottieReactPropsOriginal } from '@lottiefiles/dotlottie-react';
import type { EventType } from '@lottiefiles/dotlottie-web';
export type DotLottie = DotLottieOriginal;
export type DotLottieReactProps = DotLottieReactPropsOriginal & {
    refCallback?: (dotLottieItem: DotLottie) => void;
    eventListeners?: {
        event: EventType;
        handler: () => void;
    }[];
};
export declare const DotLottieReact: ({ refCallback, eventListeners, ...etc }: DotLottieReactProps) => import("react/jsx-runtime").JSX.Element;
