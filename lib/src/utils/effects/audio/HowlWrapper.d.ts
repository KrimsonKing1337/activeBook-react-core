import { Howl, type HowlOptions } from 'howler';
import type { AudioType } from '../../../@types.js';
export type HowlWrapperOptions = {
    id: string;
    src: HowlOptions['src'];
    loop?: HowlOptions['loop'];
    type?: AudioType;
    screamer?: boolean;
    fadeOutWhenUnload?: boolean;
    onPlay?: () => void;
    onUnload?: () => void;
};
export declare class HowlWrapper {
    private static fadeDurationDefault;
    readonly howlInst: Howl;
    id: HowlWrapperOptions['id'];
    src: HowlOptions['src'];
    isUnloading: boolean;
    type: AudioType;
    fadeOutWhenUnload: boolean;
    onPlay: () => void;
    onUnload: () => void;
    constructor({ id, src, loop, type, screamer, fadeOutWhenUnload, onPlay, onUnload, }: HowlWrapperOptions);
    volume(n: number): void;
    getVolume(): import("../../../store/volume/@types").State;
    getVolumeByType(): number;
    play(withFadeIn?: boolean): Promise<void>;
    pause(withFadeOut?: boolean): Promise<void>;
    stop(withFadeOut?: boolean): Promise<void>;
    unload(): Promise<void>;
    fade(from: number, to: number, dur: number): Promise<void>;
    fadeIn(): Promise<Howl>;
    fadeOut(): Promise<Howl>;
    playing(): boolean;
    state(): "unloaded" | "loading" | "loaded";
    waitTillTheEnd(): Promise<void>;
}
