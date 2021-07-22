import React from 'react';

import styles from './Label.scss';

export type LabelPropsType = {
  label: string;
};

export const Label = ({ label }: LabelPropsType) => {
  return (
    <div className={styles.label}>
      { label }
    </div>
  );
};
