import { type PayloadAction } from '@reduxjs/toolkit';
import type { BackgroundEffect } from 'hooks/effects/background/@types';
import type { BackgroundEffects, State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setEffect(_state: import("immer").WritableDraft<State>, _action: PayloadAction<BackgroundEffect>): void;
    deleteEffect(_state: import("immer").WritableDraft<State>, _action: PayloadAction<string>): void;
    setEffects(state: import("immer").WritableDraft<State>, action: PayloadAction<BackgroundEffects>): void;
}, "@effects/background">, reducer: import("redux").Reducer<State>;
