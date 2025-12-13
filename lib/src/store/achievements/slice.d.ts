import { PayloadAction } from '@reduxjs/toolkit';
import { Achievement, State } from './@types';
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setAchievement(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<Achievement>): void;
    setAll(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['achievements']>): void;
    setToastBgColor(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['toastBgColor']>): void;
}, "@achievements">, reducer: import("redux").Reducer<State>;
