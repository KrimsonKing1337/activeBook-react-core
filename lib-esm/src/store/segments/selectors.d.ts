import type { RootState } from 'store';
export declare const selectors: {
    segments: (state: RootState) => import("./@types").Segments;
    lastActiveId: (state: RootState) => string;
    count: (state: RootState) => number;
    activeId: (state: RootState) => string | undefined;
};
