import { useDispatch, useSelector } from 'store';

import { counterSelectors, counterActions } from 'store/counter'

import styles from './Counter.scss';

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(counterSelectors.count);

  const minusClickHandler = () => {
    const newValue = count - 1;

    dispatch(counterActions.setCount(newValue));
  }

  const plusClickHandler = () => {
    const newValue = count + 1;

    dispatch(counterActions.setCount(newValue));
  }

  return (
    <div className={styles.Wrapper}>
      <button onClick={minusClickHandler}>
        -
      </button>

      <div>
        {count}
      </div>

      <button onClick={plusClickHandler}>
        +
      </button>
    </div>
  );
};
