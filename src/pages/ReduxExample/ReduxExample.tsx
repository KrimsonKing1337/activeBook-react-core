import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, incrementAsync } from 'store/increment/actionsTypes';
import { incrementSelectors } from 'store/increment/reducer';

import { Button } from 'components/Button';

function doIncrement(dispatch: ReturnType<typeof useDispatch>) {
  dispatch(increment());
}

function doIncrementAsync(dispatch: ReturnType<typeof useDispatch>) {
  dispatch(incrementAsync());
}

export const ReduxExample = () => {
  const counter = useSelector(incrementSelectors.counter);
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    if (counter % 2 === 0) {
      doIncrement(dispatch);

      return;
    }

    doIncrementAsync(dispatch);
  }, [counter, dispatch]);

  return (
    <div>
      <Button onClick={handleButtonClick} />

      <div>Counter</div>

      <div>{counter}</div>
    </div>
  );
};
