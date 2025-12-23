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

function* hideAfterDelay(ms: number) {
  yield delay(ms);
  const pending: boolean = yield select(selectors.isLoading);
  if (!pending) yield put(actions.setShowLoader(false));
}

export function* watchLoaderGate() {
  let showTask: any = null;
  let hideTask: any = null;

  while (true) {
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
    ]);

    const pending: boolean = yield select(selectors.isLoading);
    const show: boolean = yield select(selectors.showLoader);

    if (pending) {
      // если pending снова true — отменяем скрытие
      if (hideTask) { yield cancel(hideTask); hideTask = null; }

      // если ещё не показали — планируем показ
      if (!show && !showTask) {
        // @ts-expect-error asd
        showTask = yield fork(showAfterDelay, 250);
      }
    } else {
      // pending false — отменяем показ, если он ещё не случился
      if (showTask) { yield cancel(showTask); showTask = null; }

      // если лоадер уже показан — скрываем с задержкой (антифликер)
      if (show && !hideTask) {
        // @ts-expect-error asd
        hideTask = yield fork(hideAfterDelay, 200);
      }
    }
  }
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield fork(watchLoaderGate);
}
