import { PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'history';
export declare function watchSetIsOpen(action: PayloadAction<boolean>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<import("redux-first-history/build/es6/actions").CallHistoryMethodAction<[to: import("history").To, state?: any]>>, void, Location>;
export declare function watchSetBookmarks(): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
