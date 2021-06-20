import React from 'react';
import { useSelector } from 'react-redux';

import { effectsSelectors } from 'store/effects/reducer'

import { SideShadow } from './components/SideShadow';

import styles from './SideEffects.scss';

export const SideEffects = () => {
  const sideShadowIsActive = useSelector(effectsSelectors.sideShadowIsActive);

  return (
    <div className={styles.sideEffects}>
      {sideShadowIsActive && <SideShadow />}
    </div>
  );
};
