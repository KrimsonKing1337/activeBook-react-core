import classNames from 'classnames';

import { Color } from 'utils/effects/achievements/utils';

import styles from './Item.scss';

export type ItemProps = {
  title: string;
  status: boolean;
  type: Color;
};

export const Item = ({ title, status, type }: ItemProps) => {
  const statusLabel = status ? 'Получено' : 'В процессе';

  const itemClassNames = classNames([
    styles.item,
    type,
  ]);

  return (
    <div className={itemClassNames}>
      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.status}>
        {statusLabel}
      </div>
    </div>
  );
};
