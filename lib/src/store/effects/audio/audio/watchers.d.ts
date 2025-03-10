import type { PayloadAction } from '@reduxjs/toolkit';
import type { HowlInst, HowlInstances } from '../../../../@types.js';
export declare function watchSetAudioInstance(action: PayloadAction<HowlInst>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInstances;
    type: "@effects/audio/setAudioInstances";
}>, void, HowlInstances>;
export declare function watchDeleteAudioInstance(action: PayloadAction<string>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInstances;
    type: "@effects/audio/setAudioInstances";
}> | import("redux-saga/effects").PutEffect<{
    payload: boolean;
    type: "@effects/audio/setIsDeleting";
}>, void, HowlInstances>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
