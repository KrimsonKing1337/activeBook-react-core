import { call, put, takeLatest, delay, fork, select, take, cancel } from 'redux-saga/effects';

import { effectsActions } from 'store/effects/common';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetMenuActiveState() {
  yield call(() => {
    window.history.pushState(null, '', window.location.href);
  });
}
function* showAfterDelay(ms: number) {
  yield delay(ms);

  const pending: boolean = yield select(selectors.isLoading);

  if (pending) {
    yield put(actions.setShowLoader(true));
  }
}

export function* watchLoaderGate() {
  let timerTask: any = null;

  while (true) {
    yield take([
      effectsActions.setImagesAmount.type,
      effectsActions.setImagesReadyAmount.type,
      effectsActions.setImageReady.type,
      effectsActions.setVideosAmount.type,
      effectsActions.setVideoReady.type,
      effectsActions.setVideosReadyAmount.type,
      effectsActions.setDotLottieAmount.type,
      effectsActions.setDotLottieReady.type,
      effectsActions.setDotLottieReadyAmount.type,
      // effectsActions.setHowlerLoading.type,
    ]);

    const pending: boolean = yield select(selectors.isLoading);
    const show: boolean = yield select(selectors.showLoader);

    if (pending) {
      if (!timerTask && !show) {
        // @ts-expect-error asd
        timerTask = yield fork(showAfterDelay, 250);
      }
    } else {
      if (timerTask) {
        yield cancel(timerTask);
        timerTask = null;
      }
      if (show) {
        yield put(actions.setShowLoader(false));
      }
    }
  }
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield fork(watchLoaderGate);
}
