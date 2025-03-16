import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setInverseColorActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['inverseColorIsActive']>): void;
    setDotsActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['dotsIsActive']>): void;
    setDotLottieAmount(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['dotLottieAmount']>): void;
    setDotLottieReadyAmount(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['dotLottieReadyAmount']>): void;
    setDotLottieReady(): void;
}, "@effects/common">, reducer: import("redux").Reducer<State>;
