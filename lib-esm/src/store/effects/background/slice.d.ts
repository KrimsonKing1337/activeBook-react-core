import { type PayloadAction } from '@reduxjs/toolkit';
import type { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setStyle(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['style']>): void;
    setVideos(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['videos']>): void;
    setImages(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['images']>): void;
    setComponent(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['Component']>): void;
    setShadow(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['shadow']>): void;
    reset(): State;
}, "@effects/background">, reducer: import("redux").Reducer<State>;
