import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';

import { HowlInst, LastInstIndex } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetMusic(action: PayloadAction<HowlInst>) {
  const { payload } = action;

  const lastInstIndex: LastInstIndex = yield select(selectors.lastInstIndex);

  if (lastInstIndex === 1) {
    yield put(actions.setHowlInst2(payload));
    yield put(actions.setHowlInst1(null));
    yield put(actions.setLastInstIndex(2));
  } else {
    yield put(actions.setHowlInst1(payload));
    yield put(actions.setHowlInst2(null));
    yield put(actions.setLastInstIndex(1));
  }
}

export function* watchActions() {
  yield takeLatest(actions.setMusic, watchSetMusic);
}
