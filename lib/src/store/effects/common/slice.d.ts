import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setInverseColorActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['inverseColorIsActive']>): void;
    setDotsActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['dotsIsActive']>): void;
    setFontColor(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['fontColor']>): void;
}, "@effects/common">, reducer: import("redux").Reducer<State>;
