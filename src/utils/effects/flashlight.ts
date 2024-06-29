import { store } from 'store';
import { mainActions } from 'store/main';

export class Flashlight {
  private track: MediaStreamTrack | null;

  static getIsFlashlightAvailable() {
    return store.getState().main.isFlashlightAvailable;
  }

  static getIsTorchSupported(capabilities: any) {
    return capabilities.torch || (
      'fillLightMode' in capabilities &&
      capabilities.fillLightMode.length !== 0 &&
      capabilities.fillLightMode !== 'none'
    );
  }

  static getNavigatorCameraPermission() {
    const permissionName = 'camera' as PermissionName;

    return navigator.permissions.query({ name: permissionName });
  }

  static getIsCordovaFlashlight() {
    return !!(window as any).plugins?.flashlight;
  }

  static initCordovaFlashlight(cordovaFlashlight: any) {
    cordovaFlashlight.available((isAvailable: boolean) => {
      const state = isAvailable ? 'cordova' : false;

      store.dispatch(mainActions.setIsFlashlightAvailable(state));
    });
  }

  constructor() {
    this.track = null;
  }

  torchControl(state: boolean) {
    if (!this.track) {
      return;
    }

    this.track.applyConstraints({
      advanced: [{
        torch: state,
      }],
    });
  }

  mediaStreamTrackStop() {
    this.track?.stop();
  }

  /**
   * реализацию взял отсюда: https://stackoverflow.com/a/70228940
   * присутствует небольшая задержка перед срабатыванием.
   * в кордове этой проблемы нет
   */
  async torchInit() {
    if (!navigator.mediaDevices) {
      console.log('no navigator.mediaDevices');

      return Promise.resolve();
    }

    const devices = await navigator.mediaDevices.enumerateDevices();

    const cameras = devices.filter((device) => device.kind === 'videoinput');

    if (cameras.length === 0) {
      console.log('no camera found on this device');

      store.dispatch(mainActions.setFlashlightProblems('Камера не найдена'));

      return Promise.resolve();
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment',
      },
    });

    this.track = stream.getVideoTracks()[0];

    if (!(window as any).ImageCapture) {
      return Promise.resolve();
    }

    const imageCapture = new ImageCapture(this.track);

    const capabilities = await imageCapture.getPhotoCapabilities() as any;

    const torchSupported = Flashlight.getIsTorchSupported(capabilities);

    if (!torchSupported) {
      console.log('no torch found');

      store.dispatch(mainActions.setFlashlightProblems('Вспышка не найдена'));

      this.mediaStreamTrackStop();

      return Promise.resolve();
    }

    store.dispatch(mainActions.setIsFlashlightAvailable('js'));
  }

  init() {
    const cordovaFlashlight = Flashlight.getIsCordovaFlashlight();

    if (cordovaFlashlight) {
      Flashlight.initCordovaFlashlight(cordovaFlashlight);

      return Promise.resolve();
    } else {
      return this.torchInit();
    }
  }

  on() {
    const flashLightAvailableState = Flashlight.getIsFlashlightAvailable();

    if (!flashLightAvailableState) {
      return;
    }

    if (flashLightAvailableState === 'js') {
      this.torchControl(true);
    } else if (flashLightAvailableState === 'cordova') {
      (window as any).plugins.flashlight.switchOn();
    }
  }

  off() {
    const flashLightAvailableState = Flashlight.getIsFlashlightAvailable();

    if (!flashLightAvailableState) {
      return;
    }

    if (flashLightAvailableState === 'js') {
      this.torchControl(false);
    } else if (flashLightAvailableState === 'cordova') {
      (window as any).plugins.flashlight.switchOff();
    }
  }
}

export const flashlightInst = new Flashlight();
