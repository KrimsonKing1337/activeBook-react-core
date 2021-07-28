import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { configSelectors } from 'store/config/reducer';
import { setLineHeight } from 'store/config/actions';

import { Label } from 'components/Label';

import { getNewValueForNarrativeTextStyle } from 'utils/getNewValueForNarrativeTextStyle';

import styles from './LineHeight.scss';

function getClassNames(className: string) {
  return classNames([
    styles.item,
    className,
  ]);
}

export const LineHeight = () => {
  const dispatch = useDispatch();
  const lineHeight = useSelector(configSelectors.lineHeight);

  const dispatchSetLineHeight = (isMoreAction: boolean) => {
    const lineHeightNewValue = getNewValueForNarrativeTextStyle(lineHeight, isMoreAction);

    if (lineHeightNewValue === lineHeight) {
      return;
    }

    dispatch(setLineHeight(lineHeightNewValue));
  };

  const minusClickHandler = () => {
    dispatchSetLineHeight(false);
  };

  const plusClickHandler = () => {
    dispatchSetLineHeight(true);
  };

  const currentValueLabel = `${lineHeight}%`;

  return (
    <div className={styles.lineHeight}>
      <Label label={'Межстрочный интервал'} />

      <div className={styles.itemsWrapper}>
        <div className={getClassNames(styles.isMinus)} onClick={minusClickHandler}>
          -
        </div>

        <div className={getClassNames(styles.isValue)}>
          { currentValueLabel }
        </div>

        <div className={getClassNames(styles.isPlus)} onClick={plusClickHandler}>
          +
        </div>
      </div>
    </div>
  );
};
