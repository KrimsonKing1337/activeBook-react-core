import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { goToPage } from 'utils/control/goToPage';

import { playAchievement } from './utils';
import styles from './Item.scss';

export type ItemProps = {
  title: string;
  subtitle: string;
  pageNumber: number;
};

export const Item = ({ title, subtitle, pageNumber }: ItemProps) => {
  const pages = useSelector(mainSelectors.pages);

  const clickHandler = () => {
    const n = pageNumber > pages ? pages : pageNumber;

    goToPage(n);

    playAchievement();
  };

  return (
    <div className={styles.item} onClick={clickHandler}>
      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.subtitle}>
        {subtitle}
      </div>

      <div className={styles.pageNumber}>
        {pageNumber}
      </div>
    </div>
  );
};
