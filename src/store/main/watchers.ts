import { call, put, takeLatest, race, delay } from 'redux-saga/effects';

import { actions } from './slice';

import { waitForHowlerLoad, waitForMediaLoad } from './utils';

export function* watchSetMenuActiveState() {
  yield call(() => {
    window.history.pushState(null, '', window.location.href);
  });
}

function* doLoad() {
  yield call(waitForHowlerLoad);
  yield call(waitForMediaLoad);
}

export function* watchSetPage() {
  const { timeout } = yield race({
    load: call(doLoad),
    timeout: delay(500),
  });

  if (timeout) {
    yield put(actions.setIsLoading(true));
    yield call(doLoad);
    yield put(actions.setIsLoading(false));
  }
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield takeLatest(actions.setPage, watchSetPage);
}
