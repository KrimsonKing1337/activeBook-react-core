import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Item.scss';

export type ItemProps = {
  className?: string;
  [key: string]: any;
};

export const Item = ({ children, className, ...rest }: PropsWithChildren<ItemProps>) => {
  const itemClassNames = classNames([
    styles.item,
    className,
  ]);

  return (
    <div className={itemClassNames} {...rest}>
      {children}
    </div>
  );
};
