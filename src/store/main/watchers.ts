import { call, put, takeLatest } from 'redux-saga/effects';

import { actions } from './slice';

import { waitForHowlerLoad, waitForMediaLoad } from './utils';

export function* watchSetMenuActiveState() {
  yield call(() => {
    window.history.pushState(null, '', window.location.href);
  });
}

export function* watchSetPage() {
  yield put(actions.setIsLoading(true));

  yield call(() => {
    return new Promise<void>(resolve => {
      setTimeout(async () => {
        await waitForHowlerLoad();
        await waitForMediaLoad();

        resolve();
      }, 0);
    });
  });

  yield put(actions.setIsLoading(false));
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield takeLatest(actions.setPage, watchSetPage);
}
