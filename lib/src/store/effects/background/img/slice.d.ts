import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isActive']>): void;
    setSrc(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['src']>): void;
}, "@effects/background/img">, reducer: import("redux").Reducer<State>;
