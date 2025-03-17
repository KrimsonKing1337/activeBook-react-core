import { PropsWithChildren } from 'react';
import type { RangeEffects, Config } from '../../@types.js';
export type AppProps = {
    config: Config;
    rangeEffects: RangeEffects;
};
export declare const App: ({ children, config, rangeEffects }: PropsWithChildren<AppProps>) => import("react/jsx-runtime").JSX.Element;
