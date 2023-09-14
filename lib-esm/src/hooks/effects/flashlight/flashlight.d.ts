export declare function useFlashlight(withSideShadow?: boolean, speed?: number): {
    flashlightOff: () => void;
    flashlightOn: (duration?: number) => Promise<void>;
};
