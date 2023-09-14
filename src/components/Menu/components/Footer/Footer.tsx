import classNames from 'classnames';

import { useDispatch } from 'store';
import { mainActions } from 'store/main';

import styles from './Footer.scss';

function getClassNames(className: string) {
  return classNames([
    styles.button,
    className,
  ]);
}

export const Footer = () => {
  const dispatch = useDispatch();

  const tableOfContentsButtonClickHandler = () => {
    dispatch(mainActions.setMenuActiveState('tableOfContents'));
  };

  const achievementsProgressClickHandler = () => {
    dispatch(mainActions.setMenuActiveState('achievementsProgress'));
  };

  const closeButtonClickHandler = () => {
    dispatch(mainActions.setMenuActiveState(null));
  };

  return (
    <div className={styles.footer}>
      <button className={getClassNames(styles.isTableOfContents)} onClick={tableOfContentsButtonClickHandler}>
        Оглавление
      </button>

      <button className={getClassNames(styles.isAchievementsProgress)} onClick={achievementsProgressClickHandler}>
        Прогресс достижений
      </button>

      <button className={getClassNames(styles.isClose)} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </div>
  );
};
