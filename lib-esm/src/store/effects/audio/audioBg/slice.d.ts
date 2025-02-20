import { PayloadAction } from '@reduxjs/toolkit';
import type { HowlInst, HowlInstances } from '@types';
import type { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setAudioInstance(_state: import("immer/dist/internal").WritableDraft<State>, _action: PayloadAction<HowlInst>): void;
    deleteAudioInstance(_state: import("immer/dist/internal").WritableDraft<State>, _action: PayloadAction<string>): void;
    setAudioInstances(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<HowlInstances>): void;
}, "@effects/audioBg">, reducer: import("redux").Reducer<State>;
