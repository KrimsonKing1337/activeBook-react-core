type UseSoundProps = {
    src: string;
    fadeOutWhenUnload?: boolean;
    bg?: boolean;
    loop?: boolean;
    playOnLoad?: boolean;
    stopBy?: number;
    delay?: number;
    screamer?: boolean;
    onPlay?: () => void;
    onUnmount?: () => void;
};
export declare function useSound({ src, fadeOutWhenUnload, bg, loop, playOnLoad, stopBy, delay, screamer, onPlay, onUnmount, }: UseSoundProps): import("../../../store/effects/audio/sound/@types").HowlInst;
export {};
