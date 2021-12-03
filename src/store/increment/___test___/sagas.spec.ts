import { runSaga } from 'redux-saga';

import { actionsTypes, IncrementAction, IncrementActionsTypes } from '../actionsTypes';
import { incrementSaga } from '../sagas';

describe('sagas', () => {
  // пример теста по шагам

  /*
  it('should dispatch action "INCREMENT_ASYNC"', () => {
    const generator = saga();

    expect(generator.next().value).toEqual(takeLatest(actions.INCREMENT_ASYNC, increment));
    expect(generator.next().done).toBeTruthy();
  });
  */

  it('should dispatch action "INCREMENT"', async () => {
    const dispatched: IncrementActionsTypes[] = [];

    await runSaga(
      {
        dispatch: (action: IncrementAction) => dispatched.push(action),
        getState: () => ({ type: actionsTypes.INCREMENT }),
      },
      incrementSaga,
    ).toPromise();

    expect(dispatched).toEqual([{ type: actionsTypes.INCREMENT }]);
  });
});
