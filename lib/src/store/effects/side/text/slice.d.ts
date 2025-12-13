import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isActive']>): void;
    setTemplate(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['template']>): void;
    setSpeed(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['speed']>): void;
}, "@effects/sideText">, reducer: import("redux").Reducer<State>;
