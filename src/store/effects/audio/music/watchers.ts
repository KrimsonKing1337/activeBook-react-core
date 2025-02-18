import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';

import { HowlInst, HowlInstances } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetMusicInstance(action: PayloadAction<HowlInst>) {
  const { payload } = action;

  const musicInstances: HowlInstances = yield select(selectors.musicInstances);

  const newValue = {
    ...musicInstances,
    payload,
  };

  yield put(actions.setMusicInstances(newValue));
}

export function* watchDeleteMusicInstance(action: PayloadAction<string>) {
  const { payload } = action;

  const musicInstances: HowlInstances = yield select(selectors.musicInstances);

  const newValue = {
    ...musicInstances,
  };

  delete newValue[payload];

  yield put(actions.setMusicInstances(newValue));
}

export function* watchActions() {
  yield takeLatest(actions.setMusicInstance, watchSetMusicInstance);
  yield takeLatest(actions.deleteMusicInstance, watchDeleteMusicInstance);
}
