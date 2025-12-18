import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'store';

import { configActions, configSelectors } from 'store/config';

import { Label } from 'components/Label';
import { Spoiler } from 'components/Spoiler';

import { getIsMobile } from 'utils/mobile/getIsMobile';

import * as styles from './Themes.scss';

const isMobile = getIsMobile();

export const Themes = () => {
  const dispatch = useDispatch();

  const activeTheme = useSelector(configSelectors.theme);
  const themes = useSelector(configSelectors.themes);

  const clickHandler = (theme: string) => {
    dispatch(configActions.setTheme(theme));
  };

  return (
    <div className={styles.themes}>
      <Label label="Оформление" />

      <div className={styles.themesItemsWrapper}>
        {Object.entries(themes).map(([themeName, themeOptions]) => {
          const { main, bg } = themeOptions;

          const style = {
            backgroundColor: bg,
            color: main,
            borderColor: main,
          };

          return (
            <div
              key={themeName}
              style={style}
              className={styles.themesItem}
              onClick={() => clickHandler(themeName)}
            >
              {activeTheme === themeName && <FontAwesomeIcon icon={faCheck} />}
            </div>
          );
        })}
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
