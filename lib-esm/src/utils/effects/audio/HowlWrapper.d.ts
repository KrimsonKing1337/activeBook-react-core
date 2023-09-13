import { Howl, HowlOptions } from 'howler';
type AudioType = 'bg' | 'music' | 'sfx';
export type HowlWrapperOptions = {
    id?: string;
    src: HowlOptions['src'];
    loop?: HowlOptions['loop'];
    type?: AudioType;
    screamer?: boolean;
    onPlay?: () => void;
};
export declare class HowlWrapper {
    private static fadeDurationDefault;
    readonly howlInst: Howl;
    id: HowlWrapperOptions['id'];
    src: HowlOptions['src'];
    isUnloading: boolean;
    type: AudioType;
    onPlay: () => void;
    constructor({ id, src, loop, type, screamer, onPlay, }: HowlWrapperOptions);
    volume(n: number): void;
    getVolume(): import("../../../store/volume/@types").State;
    getVolumeByType(): number;
    play(withFadeIn?: boolean): Promise<void>;
    pause(withFadeOut?: boolean): Promise<void>;
    stop(withFadeOut?: boolean): Promise<void>;
    unload(withFadeOut?: boolean): Promise<void>;
    fade(from: number, to: number, dur: number): Promise<void>;
    fadeIn(): Promise<Howl>;
    fadeOut(): Promise<Howl>;
    playing(): boolean;
    state(): "unloaded" | "loading" | "loaded";
    waitTillTheEnd(): Promise<void>;
}
export {};
