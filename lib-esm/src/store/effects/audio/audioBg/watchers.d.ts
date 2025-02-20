import type { PayloadAction } from '@reduxjs/toolkit';
import type { HowlInst, HowlInstances } from '@types';
export declare function watchSetAudioInstance(action: PayloadAction<HowlInst>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInstances;
    type: "@effects/audioBg/setAudioInstances";
}>, void, HowlInstances>;
export declare function watchDeleteAudioInstance(action: PayloadAction<string>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInstances;
    type: "@effects/audioBg/setAudioInstances";
}>, void, HowlInstances>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
