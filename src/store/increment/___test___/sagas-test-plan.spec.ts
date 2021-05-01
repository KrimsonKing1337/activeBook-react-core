import { expectSaga } from 'redux-saga-test-plan';

import { initialState } from '../initialState';
import { incrementReducer } from '../reducer';
import { incrementSaga } from '../sagas';

describe('sagas-test-plan', () => {
  it('should increment counter', () => {
    return expectSaga(incrementSaga)
      .withReducer(incrementReducer, initialState)
      .hasFinalState({
        ...initialState,
        counter: 1,
      })
      .run();
  });
});
