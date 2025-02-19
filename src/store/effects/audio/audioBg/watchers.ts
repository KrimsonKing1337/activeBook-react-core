import type { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';

import type { HowlInst, HowlInstances } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetAudioInstance(action: PayloadAction<HowlInst>) {
  const { payload } = action;

  const howlInstances: HowlInstances = yield select(selectors.audioInstances);

  const newValue = {
    ...howlInstances,
    payload,
  };

  yield put(actions.setAudioInstances(newValue));
}

export function* watchDeleteAudioInstance(action: PayloadAction<string>) {
  const { payload } = action;

  const howlInstances: HowlInstances = yield select(selectors.audioInstances);

  const newValue = {
    ...howlInstances,
  };

  delete newValue[payload];

  yield put(actions.setAudioInstances(newValue));
}

export function* watchActions() {
  yield takeLatest(actions.setAudioInstance, watchSetAudioInstance);
  yield takeLatest(actions.deleteAudioInstance, watchDeleteAudioInstance);
}
