export declare class Flashlight {
    private track;
    static getIsFlashlightAvailable(): import("../../store/main/@types").FlashlightState;
    static getIsTorchSupported(capabilities: any): any;
    static getNavigatorCameraPermission(): Promise<PermissionStatus>;
    static getIsCordovaFlashlight(): boolean;
    static initCordovaFlashlight(cordovaFlashlight: any): void;
    constructor();
    torchControl(state: boolean): void;
    mediaStreamTrackStop(): void;
    /**
     * реализацию взял отсюда: https://stackoverflow.com/a/70228940
     * присутствует небольшая задержка перед срабатыванием.
     * в кордове этой проблемы нет
     */
    torchInit(): Promise<void>;
    init(): Promise<void>;
    on(): void;
    off(): void;
}
export declare const flashlightInst: Flashlight;
