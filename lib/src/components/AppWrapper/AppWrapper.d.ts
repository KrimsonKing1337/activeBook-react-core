import { type PropsWithChildren } from 'react';
import type { Config, RangeEffects, TableOfContents } from '@types';
import 'styles/common.scss';
export type AppWrapperProps = {
    config: Config;
    tableOfContents: TableOfContents;
    rangeEffects: RangeEffects;
};
export declare const AppWrapper: ({ children, config, tableOfContents, rangeEffects }: PropsWithChildren<AppWrapperProps>) => import("react/jsx-runtime").JSX.Element;
