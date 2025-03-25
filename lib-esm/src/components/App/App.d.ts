import { PropsWithChildren } from 'react';
import type { RangeEffects, Config, TableOfContents } from '@types';
export type AppProps = {
    config: Config;
    tableOfContents: TableOfContents;
    rangeEffects: RangeEffects;
};
export declare const App: ({ children, config, tableOfContents, rangeEffects }: PropsWithChildren<AppProps>) => import("react/jsx-runtime").JSX.Element;
