import { Toggle } from 'components/Toggle';
import { Spoiler } from 'components/Spoiler';
import { playAchievement } from 'components/Menu/utils';

import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';
import { mainSelectors } from 'store/main';
import { on as vibrationOn } from 'utils/effects/vibration';

import styles from './Vibration.scss';

export const Vibration = () => {
  const dispatch = useDispatch();

  const vibrationState = useSelector(configSelectors.vibration);
  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setVibration(value));

    playAchievement();

    if (value && isVibrationAvailable) {
      vibrationOn(300);
    }
  };

  return (
    <div className={styles.vibration}>
      <Toggle
        label="Вибрация (там, где доступно)"
        isActiveDefault={vibrationState}
        withoutBorder={true}
        onClickOn={() => toggleClickHandler(true)}
        onClickOff={() => toggleClickHandler(false)}
      />

      <Spoiler label="Не работает вибрация?">
        Проверьте, что ваше устройство поддерживает вибрацию, и что не включён беззвучный режим.
        Часто он не даёт вибрации срабатывать
      </Spoiler>
    </div>
  );
};
