import React from 'react';

import { PageWrapperProps } from '../../PageWrapper';

import styles from './Narrative.scss';

export const Narrative = ({ title, subtitle, children }: PageWrapperProps) => {
  return (
    <div className={styles.narrative}>
      {title && (
        <div className={styles.title}>
          { title }
        </div>
      )}

      {subtitle && (
        <div className={styles.subtitle}>
          { subtitle }
        </div>
      )}

      <div className={styles.text}>
        { children }
      </div>
    </div>
  );
}
