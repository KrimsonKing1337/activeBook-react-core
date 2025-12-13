import type { RootState } from '..';
export declare const selectors: {
    segments: (state: RootState) => import("./@types").Segments;
    lastActiveId: (state: RootState) => string;
    count: (state: RootState) => number;
    activeId: (state: RootState) => string | undefined;
};
