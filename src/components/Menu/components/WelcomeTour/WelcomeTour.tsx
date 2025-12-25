import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';

import * as styles from './WelcomeTour.scss';

export const WelcomeTour = () => {
  const dispatch = useDispatch();

  const isActive = useSelector(configSelectors.welcomeTour);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setWelcomeTour(value));

    if (value) {
      toast.success('Обучение вновь доступно на заглавной странице. Нажмите на кнопку "читать"');
    }
  };

  return (
    <div className={styles.WelcomeTour}>
      <Toggle
        label="Показать обучение"
        isActiveDefault={isActive}
        withoutBorder={true}
        onClickOn={() => toggleClickHandler(true)}
        onClickOff={() => toggleClickHandler(false)}
      />
    </div>
  );
};
