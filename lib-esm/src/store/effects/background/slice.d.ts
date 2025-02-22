import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setStyle(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['style']>): void;
    setVideo(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['video']>): void;
    setImg(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['img']>): void;
    setShadow(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['shadow']>): void;
    setComponent(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['Component']>): void;
    reset(): State;
}, "@effects/background">, reducer: import("redux").Reducer<State>;
