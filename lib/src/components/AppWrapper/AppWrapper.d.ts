import { type PropsWithChildren } from 'react';
import type { Config, RangeEffects } from '../../@types.js';
export type AppWrapperProps = {
    config: Config;
    rangeEffects: RangeEffects;
};
export declare const AppWrapper: ({ children, config, rangeEffects }: PropsWithChildren<AppWrapperProps>) => import("react/jsx-runtime").JSX.Element;
