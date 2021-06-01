import React from 'react';

import styles from './Header.scss';

export type HeaderPropsType = {
  label: string;
};

export const Header = ({ label }: HeaderPropsType) => {
  return (
    <>
      <div className={styles.header}>
        { label }
      </div>
    </>
  );
};
