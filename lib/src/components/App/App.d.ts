import { PropsWithChildren } from 'react';
import { EffectsJson } from '../../@types.js';
export type AppProps = {
    effectsJson: EffectsJson;
};
export declare const App: ({ effectsJson, children }: PropsWithChildren<AppProps>) => import("react/jsx-runtime").JSX.Element;