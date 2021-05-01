import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import { actionsTypes, increment, incrementAsync } from '../actionsTypes';
import { initialState } from '../initialState';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('actions', () => {
  it('increment', () => {
    const expectedActions = [
      {
        type: actionsTypes.INCREMENT,
      },
    ];

    store.dispatch(increment());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('incrementAsync', async () => {
    const expectedActions = [
      {
        type: actionsTypes.INCREMENT_ASYNC,
      },
    ];

    await store.dispatch(incrementAsync());

    expect(store.getActions()).toEqual(expectedActions);
  });

  beforeEach(() => {
    store.clearActions();
  });
});
