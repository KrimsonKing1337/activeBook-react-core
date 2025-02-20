import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { Howler } from 'howler';

import { AudioType } from '@types';

import type { HowlInstances } from '@types';

import { getAudioInstances } from 'utils/effects/audio/getAudioInstances';

import type { State } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

function* saveInLocalStorage() {
  const volume: State = yield select(selectors.all);

  const volumeAsJson = JSON.stringify(volume);

  localStorage.setItem('volume', volumeAsJson);
}

export function* watchSetAll(action: PayloadAction<State>) {
  const { payload } = action;
  const { global, bg, music, sfx } = payload;

  yield call(() => {
    Howler.volume(global / 100);
  });

  yield put(actions.setGlobal(global));
  yield put(actions.setSfx(sfx));
  yield put(actions.setMusic(music));
  yield put(actions.setBg(bg));
}

export function* watchSetGlobal(action: PayloadAction<State['global']>) {
  const { payload } = action;

  yield call(() => {
    // todo: video volume also need to be changed
    Howler.volume(payload / 100);
  });

  yield call(saveInLocalStorage);
}

function setVolumeByType(type: AudioType, volume: number) {
  const setVolume = (audioInstances: HowlInstances) => {
    Object.values(audioInstances).forEach((audioInstanceCur) => {
      if (!audioInstanceCur) {
        return;
      }

      if (audioInstanceCur.type === type) {
        audioInstanceCur.volume(volume / 100);
      }
    });
  };

  const { audioInstances, audioBgInstances } = getAudioInstances();

  setVolume(audioInstances);
  setVolume(audioBgInstances);
}

export function* watchSetBg(action: PayloadAction<State['bg']>) {
  const { payload } = action;

  yield call(() => {
    setVolumeByType('bg', payload);
  });

  yield call(saveInLocalStorage);
}

export function* watchSetSfx(action: PayloadAction<State['sfx']>) {
  const { payload } = action;

  yield call(() => {
    setVolumeByType('sfx', payload);
  });

  yield call(saveInLocalStorage);
}

export function* watchSetMusic(action: PayloadAction<State['music']>) {
  const { payload } = action;

  yield call(() => {
    setVolumeByType('music', payload);
  });

  yield call(saveInLocalStorage);
}

export function* watchActions() {
  yield takeLatest(actions.setAll, watchSetAll);
  yield takeLatest(actions.setGlobal, watchSetGlobal);
  yield takeLatest(actions.setBg, watchSetBg);
  yield takeLatest(actions.setSfx, watchSetSfx);
  yield takeLatest(actions.setMusic, watchSetMusic);
}
