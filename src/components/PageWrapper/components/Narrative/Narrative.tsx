import React from 'react';
import { useSelector } from 'react-redux';

import { configSelectors } from 'store/config/reducer';

import { PageWrapperProps } from '../../PageWrapper';

import styles from './Narrative.scss';

export const Narrative = ({ title, subtitle, children }: PageWrapperProps) => {
  const fontSize = useSelector(configSelectors.fontSize);
  const lineHeight = useSelector(configSelectors.lineHeight);

  const narrativeStyle = { fontSize: `${fontSize}%` };
  const textStyle = { lineHeight: `${lineHeight * 1.5}%` };

  return (
    <div className={styles.narrative} style={narrativeStyle}>
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

      <div className={styles.text} style={textStyle}>
        { children }
      </div>
    </div>
  );
};
