import { PayloadAction } from '@reduxjs/toolkit';
import { State, Segment, Segments } from './@types';
export declare const initialState: State;
export declare const reducer: import("redux").Reducer<State>, actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setSegments(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<Segments>): void;
    setLastActiveId(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<string>): void;
    setSegmentsCount(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<number>): void;
    incrementSegmentsCount(): void;
    setSegment(_state: import("immer/dist/internal").WritableDraft<State>, _action: PayloadAction<Segment>): void;
    removeSegment(_state: import("immer/dist/internal").WritableDraft<State>, _action: PayloadAction<string>): void;
    reset(): State;
}, "@segments">;
