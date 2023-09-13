import { PayloadAction } from '@reduxjs/toolkit';
import { HowlInst, LastInstIndex } from './@types';
export declare function watchSetMusic(action: PayloadAction<HowlInst>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: HowlInst;
    type: "@effects/audio/music/setHowlInst2";
}> | import("redux-saga/effects").PutEffect<{
    payload: HowlInst;
    type: "@effects/audio/music/setHowlInst1";
}> | import("redux-saga/effects").PutEffect<{
    payload: LastInstIndex;
    type: "@effects/audio/music/setLastInstIndex";
}>, void, LastInstIndex>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
