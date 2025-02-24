import { RootState } from '..';
export declare const selectors: {
    all: (state: RootState) => import("./@types").State;
    global: (state: RootState) => number;
    bg: (state: RootState) => number;
    sfx: (state: RootState) => number;
    music: (state: RootState) => number;
    videos: (state: RootState) => number;
};
