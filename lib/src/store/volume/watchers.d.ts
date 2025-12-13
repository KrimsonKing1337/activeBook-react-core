import { PayloadAction } from '@reduxjs/toolkit';
import type { State } from './@types';
export declare function watchSetAll(action: PayloadAction<State>): Generator<import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@volume/setSfx";
}> | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@volume/setMusic";
}> | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@volume/setBg";
}> | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@volume/setVideos";
}> | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@volume/setGlobal";
}>, void, unknown>;
export declare function watchSetGlobal(action: PayloadAction<State['global']>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<void>, void, State>;
export declare function watchSetBg(action: PayloadAction<State['bg']>): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchSetSfx(action: PayloadAction<State['sfx']>): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchSetMusic(action: PayloadAction<State['music']>): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchSetVideos(action: PayloadAction<State['videos']>): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
