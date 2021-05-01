import { call, put, takeLatest } from 'redux-saga/effects';

import { sleep } from 'utils/sleep';

import { actionsTypes } from './actionsTypes';

export function* incrementSaga() {
  try {
    yield call(sleep);
    yield put({ type: actionsTypes.INCREMENT });
  } catch (e) {
    //
  }
}

export function* watchIncrementActions() {
  yield takeLatest(actionsTypes.INCREMENT_ASYNC, incrementSaga);
}
