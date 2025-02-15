import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '@types';
import { Label } from 'components/Label';
import { Spoiler } from 'components/Spoiler';

import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';
import { getIsMobile } from 'utils/mobile/getIsMobile';

import { getClassNames, playAchievement, themes } from './utils';
import styles from './Themes.scss';

const isMobile = getIsMobile();

export const Themes = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(configSelectors.theme);

  const clickHandler = (theme: Theme) => {
    dispatch(configActions.setTheme(theme));

    playAchievement();
  };

  return (
    <div className={styles.themes}>
      <Label label="Оформление" />

      <div className={styles.themesItemsWrapper}>
        {themes.map((themeCur) => (
          <div key={themeCur} className={getClassNames(themeCur)} onClick={() => clickHandler(themeCur)}>
            {activeTheme === themeCur && <FontAwesomeIcon icon={faCheck} />}
          </div>
        ))}
      </div>

      {isMobile && (
        <Spoiler label="Внимание" className={styles.spoiler}>
          Если цвета меняются некорректно - проверьте настройки тёмного режима вашего телефона.
          Например, у Xiaomi это Настройки {'->'} Экран {'->'} Параметры тёмного режима.
          Там найти activeBook и убедиться, что туда-сюдашечка не находится в положении "вкл"
        </Spoiler>
      )}
    </div>
  );
};
