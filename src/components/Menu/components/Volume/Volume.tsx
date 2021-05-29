import React from 'react';

import { Label } from '../Label';

import { Slider } from './components/Slider';

import styles from './Volume.scss';

export const Volume = () => {
  return (
    <div className={styles.volume}>
      <div className={styles.item}>
        <Label label={'Общая громкость'} />

        <Slider />
      </div>

      <div className={styles.item}>
        <Label label={'Фоновые звуки'} />

        <Slider />
      </div>

      <div className={styles.item}>
        <Label label={'Прочие звуки'} />

        <Slider />
      </div>
    </div>
  );
}
