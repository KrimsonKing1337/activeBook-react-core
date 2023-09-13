import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setAll(_state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State>): State;
    setTheme(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['theme']>): void;
    setVibration(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['vibration']>): void;
    setFlashlight(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['flashlight']>): void;
    setAuthorComments(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['authorComments']>): void;
    setFontSize(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['fontSize']>): void;
    setLineHeight(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['lineHeight']>): void;
}, "@config">, reducer: import("redux").Reducer<State>;
