import type { Task } from 'redux-saga';
import { call, put, takeLatest, race, delay, fork, join } from 'redux-saga/effects';

import { actions } from './slice';

import { waitForHowlerLoad } from './utils';

export function* watchSetMenuActiveState() {
  yield call(() => {
    window.history.pushState(null, '', window.location.href);
  });
}
const nextFrame = () => {
  return new Promise<void>((resolve) => {
    return requestAnimationFrame(() => resolve());
  });
};

function* doLoad() {
  yield call(nextFrame);
  yield call(nextFrame);

  yield call(waitForHowlerLoad);
}

export function* watchSetPage() {
  const task: Task = yield fork(doLoad);

  const { timeout } = yield race({
    load: join(task),
    timeout: delay(500),
  });

  if (timeout) {
    yield put(actions.setIsLoading(true));
    yield join(task);
    yield put(actions.setIsLoading(false));
  }
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield takeLatest(actions.setPage, watchSetPage);
}
