import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Item.scss';

export type ItemProps = React.HTMLAttributes<HTMLImageElement> & {
  className?: string;
};

export const Item = ({ children, className, ...etc }: PropsWithChildren<ItemProps>) => {
  const itemClassNames = classNames([
    styles.item,
    className,
  ]);

  return (
    <div className={itemClassNames} {...etc}>
      {children}
    </div>
  );
};
