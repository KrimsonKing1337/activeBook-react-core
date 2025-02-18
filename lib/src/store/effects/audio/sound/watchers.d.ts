import { PayloadAction } from '@reduxjs/toolkit';
import { HowlInst, HowlInstances } from './@types';
export declare function watchSetSound(action: PayloadAction<HowlInst>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInstances;
    type: "@effects/audio/sound/setHowlInstances";
}>, void, HowlInstances>;
export declare function watchDeleteSound(action: PayloadAction<string>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInstances;
    type: "@effects/audio/sound/setHowlInstances";
}>, void, HowlInstances>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
