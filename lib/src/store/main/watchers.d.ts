export declare function watchSetMenuActiveState(): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function watchSetPage(): Generator<import("redux-saga/effects").CallEffect<void> | import("redux-saga/effects").RaceEffect<import("redux-saga/effects").CallEffect<void> | import("redux-saga/effects").CallEffect<true>> | import("redux-saga/effects").PutEffect<{
    payload: boolean;
    type: "@main/setIsLoading";
}>, void, {
    timeout: any;
}>;
export declare function watchActions(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
