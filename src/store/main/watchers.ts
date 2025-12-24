import type { Task } from 'redux-saga';
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

  const isPending: boolean = yield select(selectors.isPending);

  if (isPending) {
    yield put(actions.setShowLoader(true));
  }
}

function* hideAfterDelay(ms: number) {
  yield delay(ms);

  const isPending: boolean = yield select(selectors.isPending);

  if (!isPending) {
    yield put(actions.setShowLoader(false));
  }
}

export function* watchLoaderGate() {
  let showTask: Task | null = null;
  let hideTask: Task | null = null;

  while (true) {
    if (showTask && !showTask.isRunning()) showTask = null;
    if (hideTask && !hideTask.isRunning()) hideTask = null;

    yield take([
      // список actions, влияющих на pending
      effectsActions.setImagesAmount.type,
      effectsActions.setImagesReadyAmount.type,
      effectsActions.setImageReady.type,
      effectsActions.setVideosAmount.type,
      effectsActions.setVideosReadyAmount.type,
      effectsActions.setVideoReady.type,
      effectsActions.setDotLottieAmount.type,
      effectsActions.setDotLottieReadyAmount.type,
      effectsActions.setDotLottieReady.type,
      effectsActions.setAudiosAmount.type,
      effectsActions.setAudiosReadyAmount.type,
      effectsActions.setAudioReady.type,
    ]);

    const isPending: boolean = yield select(selectors.isPending);
    const showLoader: boolean = yield select(selectors.showLoader);

    if (isPending) {
      // если pending снова true — отменяем скрытие
      if (hideTask) {
        yield cancel(hideTask);
        hideTask = null;
      }

      // если ещё не показали — планируем показ
      if (!showLoader && !showTask) {
        showTask = yield fork(showAfterDelay, 250);
      }
    } else {
      // pending false — отменяем показ, если он ещё не случился
      if (showTask) {
        yield cancel(showTask);
        showTask = null;
      }

      // если лоадер уже показан — скрываем с задержкой (антифликер)
      if (showLoader && !hideTask) {
        hideTask = yield fork(hideAfterDelay, 200);
      }
    }
  }
}

function* watchSetPage() {
  yield put(effectsActions.setAudiosAmount(0));
  yield put(effectsActions.setAudiosReadyAmount(0));
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield takeLatest(actions.setPage, watchSetPage);

  yield fork(watchLoaderGate);
}
