import { PayloadAction } from '@reduxjs/toolkit';
import { HowlInst, LastInstIndex, State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setSound(_state: import("immer/dist/internal").WritableDraft<State>, _action: PayloadAction<HowlInst>): void;
    setHowlInst1(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<HowlInst>): void;
    setHowlInst2(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<HowlInst>): void;
    setLastInstIndex(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<LastInstIndex>): void;
}, "@effects/audio/soundBg">, reducer: import("redux").Reducer<State>;
