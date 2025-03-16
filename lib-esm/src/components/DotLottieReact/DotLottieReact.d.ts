import { type DotLottieReactProps as DotLottieReactPropsOriginal } from '@lottiefiles/dotlottie-react';
import type { EventType } from '@lottiefiles/dotlottie-web';
export type DotLottieReactProps = DotLottieReactPropsOriginal & {
    eventListeners?: {
        event: EventType;
        handler: () => void;
    }[];
};
export declare const DotLottieReact: ({ eventListeners, ...etc }: DotLottieReactProps) => import("react/jsx-runtime").JSX.Element;
