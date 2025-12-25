import classNames from 'classnames';


import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';

import { Label } from 'components/Label';

import { getNewValueForNarrativeTextStyle } from 'utils/styles/getNewValueForNarrativeTextStyle';

import * as styles from './LineHeight.scss';

function getClassNames(className: string) {
  return classNames([
    styles.Item,
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

    dispatch(configActions.setLineHeight(lineHeightNewValue));
  };

  const minusClickHandler = () => {
    dispatchSetLineHeight(false);
  };

  const plusClickHandler = () => {
    dispatchSetLineHeight(true);
  };

  const currentValueLabel = `${lineHeight}%`;

  return (
    <div className={styles.LineHeight}>
      <Label label="Межстрочный интервал" />

      <div className={styles.ItemsWrapper}>
        <div className={getClassNames(styles.IsMinus)} onClick={minusClickHandler}>
          -
        </div>

        <div className={getClassNames(styles.IsValue)}>
          {currentValueLabel}
        </div>

        <div className={getClassNames(styles.IsPlus)} onClick={plusClickHandler}>
          +
        </div>
      </div>
    </div>
  );
};
