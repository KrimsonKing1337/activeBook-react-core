import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isActive']>): void;
    setColor(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['color']>): void;
    setSpeed(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['speed']>): void;
}, "@effects/sideShadow">, reducer: import("redux").Reducer<State>;
