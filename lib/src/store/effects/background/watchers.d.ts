import type { PayloadAction } from '@reduxjs/toolkit';
import type { BackgroundEffect } from 'hooks/effects/background/@types';
import type { BackgroundEffects } from 'store/effects/background/@types';
export declare function watchSetEffect(action: PayloadAction<BackgroundEffect>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: BackgroundEffects;
    type: "@effects/background/setEffects";
}>, void, BackgroundEffects>;
export declare function watchDeleteEffect(action: PayloadAction<string>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: BackgroundEffects;
    type: "@effects/background/setEffects";
}>, void, BackgroundEffects>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
