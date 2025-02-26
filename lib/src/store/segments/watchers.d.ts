import { PayloadAction } from '@reduxjs/toolkit';
import { Segment, Segments } from './@types';
export declare function watchSetSegment(action: PayloadAction<Segment>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: string;
    type: "@segments/setLastActiveId";
}> | import("redux-saga/effects").PutEffect<{
    payload: Segments;
    type: "@segments/setSegments";
}>, void, Segments & string>;
export declare function watchRemoveSegment(action: PayloadAction<string>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: Segments;
    type: "@segments/setSegments";
}>, void, Segments>;
export declare function watchIncrementSegmentsCount(): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@segments/setSegmentsCount";
}>, void, number>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
