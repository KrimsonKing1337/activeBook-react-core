import { put, select, takeLatest } from 'redux-saga/effects';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetDotLottieReady() {
  const dotLottieReadyAmount: number = yield select(selectors.dotLottieReadyAmount);

  yield put(actions.setDotLottieReadyAmount(dotLottieReadyAmount + 1));
}

export function* watchSetImageReady() {
  const imagesReadyAmount: number = yield select(selectors.imagesReadyAmount);

  yield put(actions.setImagesReadyAmount(imagesReadyAmount + 1));
}

export function* watchSetVideoReady() {
  const videosReadyAmount: number = yield select(selectors.videosReadyAmount);

  yield put(actions.setVideosReadyAmount(videosReadyAmount + 1));
}

export function* watchSetAudioReady() {
  const audiosReadyAmount: number = yield select(selectors.audiosReadyAmount);

  yield put(actions.setAudiosReadyAmount(audiosReadyAmount + 1));
}

export function* watchActions() {
  yield takeLatest(actions.setDotLottieReady, watchSetDotLottieReady);
  yield takeLatest(actions.setImageReady, watchSetImageReady);
  yield takeLatest(actions.setVideoReady, watchSetVideoReady);
  yield takeLatest(actions.setAudioReady, watchSetAudioReady);
}
