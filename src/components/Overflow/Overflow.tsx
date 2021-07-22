import React from 'react';

import classNames from 'classnames';

import styles from './Overflow.scss';

export type OverflowProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Overflow = ({ children, isOpen }: OverflowProps) => {
  const overflowClassNames = classNames({
    [styles.overflow]: true,
    [styles.isOpen]: isOpen,
  });

  return (
    <div className={overflowClassNames}>
      {children}
    </div>
  );
};
