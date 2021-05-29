import React from 'react';
import ReactSlider from 'react-slider'

import styles from './Slider.scss';

export const Slider = () => {
  return (
    <ReactSlider
      defaultValue={100}
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
    />
  )
};
