import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const reducer: import("redux").Reducer<State>, actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setAll(_state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State>): State;
    setGlobal(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['global']>): void;
    setBg(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['bg']>): void;
    setSfx(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['sfx']>): void;
    setMusic(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['music']>): void;
    setVideos(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['videos']>): void;
}, "@volume">;
