import { type PayloadAction } from '@reduxjs/toolkit';
import type { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setColor(state: import("immer").WritableDraft<State>, action: PayloadAction<State["color"]>): void;
    setStyle(state: import("immer").WritableDraft<State>, action: PayloadAction<State["style"]>): void;
    reset(): State;
}, "@effects/font">, reducer: import("redux").Reducer<State>;
