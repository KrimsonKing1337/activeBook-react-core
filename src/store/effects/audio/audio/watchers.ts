import type { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';

import type { HowlInst, HowlInstances } from '@types';

import { unloadAudio } from 'utils/effects/audio/unloadAudio';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetAudioInstance(action: PayloadAction<HowlInst>) {
  const { payload } = action;

  if (!payload) {
    return;
  }

  const { id } = payload;

  const howlInstances: HowlInstances = yield select(selectors.audioInstances);

  const newValue = {
    ...howlInstances,
    [id]: payload,
  };

  yield put(actions.setAudioInstances(newValue));
}

export function* watchDeleteAudioInstance(action: PayloadAction<string>) {
  const { payload } = action;

  const howlInstances: HowlInstances = yield select(selectors.audioInstances);

  const howlInstance = howlInstances[payload];

  if (!howlInstance) {
    return;
  }

  yield put(actions.setIsDeleting(true));

  Object.values(howlInstance.timers).forEach((timerCur) => {
    if (timerCur) {
      clearTimeout(timerCur);
    }
  });

  if (!howlInstance.isUnloading) {
    unloadAudio(howlInstance);
  }

  const newValue = {
    ...howlInstances,
  };

  delete newValue[payload];

  yield put(actions.setAudioInstances(newValue));
  yield put(actions.setIsDeleting(false));
}

export function* watchActions() {
  yield takeLatest(actions.setAudioInstance, watchSetAudioInstance);
  yield takeLatest(actions.deleteAudioInstance, watchDeleteAudioInstance);
}
