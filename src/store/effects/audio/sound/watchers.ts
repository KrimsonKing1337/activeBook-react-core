import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';

import { HowlInst, HowlInstances } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetSound(action: PayloadAction<HowlInst>) {
  const { payload } = action;

  const howlInstances: HowlInstances = yield select(selectors.soundsInstances);

  const newValue = {
    ...howlInstances,
    payload,
  };

  yield put(actions.setSoundInstances(newValue));
}

export function* watchDeleteSound(action: PayloadAction<string>) {
  const { payload } = action;

  const howlInstances: HowlInstances = yield select(selectors.soundsInstances);

  const newValue = {
    ...howlInstances,
  };

  delete newValue[payload];

  yield put(actions.setSoundInstances(newValue));
}

export function* watchActions() {
  yield takeLatest(actions.setSound, watchSetSound);
  yield takeLatest(actions.deleteSound, watchDeleteSound);
}
