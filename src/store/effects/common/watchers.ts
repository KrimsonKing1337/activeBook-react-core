import { put, select, takeLatest } from 'redux-saga/effects';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetDotLottieReady() {
  const dotLottieReadyAmount: number = yield select(selectors.dotLottieReadyAmount);

  yield put(actions.setDotLottieReadyAmount(dotLottieReadyAmount + 1));
}

export function* watchActions() {
  yield takeLatest(actions.setDotLottieReady, watchSetDotLottieReady);
}
