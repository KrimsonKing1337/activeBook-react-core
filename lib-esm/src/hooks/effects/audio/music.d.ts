type UseMusicProps = {
    src: string;
    loop?: boolean;
    playOnLoad?: boolean;
};
export declare function useMusic({ src, loop, playOnLoad }: UseMusicProps): import("../../../store/effects/audio/music/@types").HowlInst;
export declare function useMusicUnload(): void;
export {};
