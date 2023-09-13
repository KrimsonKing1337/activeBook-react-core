import { PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'history';
import { State } from './@types';
export declare function watchSetMenuActiveState(action: PayloadAction<State['menuActiveState']>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<import("redux-first-history/build/es6/actions").CallHistoryMethodAction<[to: import("history").To, state?: any]>>, void, Location>;
export declare function watchSetRoute(action: PayloadAction<State['route']>): Generator<import("redux-saga/effects").PutEffect<import("redux-first-history/build/es6/actions").CallHistoryMethodAction<[to: import("history").To, state?: any]>>, void, unknown>;
export declare function watchSetPage(action: PayloadAction<State['page']>): Generator<import("redux-saga/effects").PutEffect<import("redux-first-history/build/es6/actions").CallHistoryMethodAction<[to: import("history").To, state?: any]>> | import("redux-saga/effects").PutEffect<{
    payload: boolean;
    type: "@main/setIsLoading";
}> | import("redux-saga/effects").CallEffect<void[]>, void, unknown>;
export declare function watchPrevPage(): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@main/setPage";
}>, void, number>;
export declare function watchNextPage(): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    payload: number;
    type: "@main/setPage";
}>, void, number>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
