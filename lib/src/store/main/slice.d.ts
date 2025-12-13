import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const initialState: State;
export declare const reducer: import("redux").Reducer<State>, actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setEasterEggs(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['easterEggs']>): void;
    setAuthorComments(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['authorComments']>): void;
    setPages(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['pages']>): void;
    setTableOfContents(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['tableOfContents']>): void;
    setPage(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['page']>): void;
    setMenuActiveState(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['menuActiveState']>): void;
    setIsLoading(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isLoading']>): void;
    setIsVibrationAvailable(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isVibrationAvailable']>): void;
    setIsFlashlightAvailable(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isFlashlightAvailable']>): void;
    setFlashlightProblems(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['flashlightProblems']>): void;
}, "@main">;
