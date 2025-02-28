import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import type { AudioType } from '@types';

import type { HowlInstances } from '@types';

import { getAudioInstances } from 'utils/effects/audio/getAudioInstances';

import type { State } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

import { setVideosVolume } from './utils';

export function* watchSetAll(action: PayloadAction<State>) {
  const { payload } = action;
  const { global, bg, music, sfx, videos } = payload;

  yield put(actions.setSfx(sfx));
  yield put(actions.setMusic(music));
  yield put(actions.setBg(bg));
  yield put(actions.setVideos(videos));

  // сначала устанавливаем значения для каждой категории отдельно, затем применяем к ним громкость от global
  yield put(actions.setGlobal(global));
}

export function* watchSetGlobal(action: PayloadAction<State['global']>) {
  const { payload } = action;

  const volumeAll: State = yield select(selectors.all);

  const { sfx, bg, music, videos } = volumeAll;

  yield call(() => {
    setAudioVolumeByType('sfx', sfx * (payload / 100));
    setAudioVolumeByType('bg', bg * (payload / 100));
    setAudioVolumeByType('music', music * (payload / 100));

    setVideosVolume(videos * (payload / 100));
  });
}

function setAudioVolumeByType(type: AudioType, volume: number) {
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
    setAudioVolumeByType('bg', payload);
  });
}

export function* watchSetSfx(action: PayloadAction<State['sfx']>) {
  const { payload } = action;

  yield call(() => {
    setAudioVolumeByType('sfx', payload);
  });
}

export function* watchSetMusic(action: PayloadAction<State['music']>) {
  const { payload } = action;

  yield call(() => {
    setAudioVolumeByType('music', payload);
  });
}

export function* watchSetVideos(action: PayloadAction<State['videos']>) {
  const { payload } = action;

  yield call(() => {
    setVideosVolume(payload);
  });
}

export function* watchActions() {
  yield takeLatest(actions.setAll, watchSetAll);
  yield takeLatest(actions.setGlobal, watchSetGlobal);
  yield takeLatest(actions.setBg, watchSetBg);
  yield takeLatest(actions.setSfx, watchSetSfx);
  yield takeLatest(actions.setMusic, watchSetMusic);
  yield takeLatest(actions.setVideos, watchSetVideos);
}
