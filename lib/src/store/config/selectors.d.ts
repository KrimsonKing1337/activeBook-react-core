import { RootState } from '..';
export declare const selectors: {
    all: (state: RootState) => import("./@types").State;
    theme: (state: RootState) => import("../../@types").Theme;
    vibration: (state: RootState) => boolean;
    flashlight: (state: RootState) => boolean;
    authorComments: (state: RootState) => boolean;
    fontSize: (state: RootState) => number;
    lineHeight: (state: RootState) => number;
};
