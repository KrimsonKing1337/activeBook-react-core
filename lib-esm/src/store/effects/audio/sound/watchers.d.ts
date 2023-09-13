import { PayloadAction } from '@reduxjs/toolkit';
import { HowlInst, LastInstIndex } from './@types';
export declare function watchSetSound(action: PayloadAction<HowlInst>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInst;
    type: "@effects/audio/sound/setHowlInst2";
}> | import("redux-saga/effects").PutEffect<{
    payload: HowlInst;
    type: "@effects/audio/sound/setHowlInst1";
}> | import("redux-saga/effects").PutEffect<{
    payload: LastInstIndex;
    type: "@effects/audio/sound/setLastInstIndex";
}>, void, LastInstIndex>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
