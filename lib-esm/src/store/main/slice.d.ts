import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const reducer: import("redux").Reducer<State>, actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setRoute(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['route']>): void;
    setPage(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['page']>): void;
    prevPage(_state: import("immer/dist/internal").WritableDraft<State>): void;
    nextPage(_state: import("immer/dist/internal").WritableDraft<State>): void;
    setMenuActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['menuActiveState']>): void;
    setIsLoading(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isLoading']>): void;
    setIsVibrationAvailable(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isVibrationAvailable']>): void;
    setIsFlashlightAvailable(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isFlashlightAvailable']>): void;
    setFlashlightProblems(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['flashlightProblems']>): void;
}, "@main">;
