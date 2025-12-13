import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare function watchSetAll(action: PayloadAction<State>): Generator<import("redux-saga/effects").PutEffect<{
    payload: boolean;
    type: "@config/setAuthorComments";
}> | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@config/setFontSize";
}> | import("redux-saga/effects").PutEffect<{
    payload: boolean;
    type: "@config/setFlashlight";
}> | import("redux-saga/effects").PutEffect<{
    payload: boolean;
    type: "@config/setVibration";
}> | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@config/setLineHeight";
}> | import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchSetTheme(action: PayloadAction<State['theme']>): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchSetEtc(): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
