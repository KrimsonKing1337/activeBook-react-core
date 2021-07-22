import React from 'react';
import ReactSlider from 'react-slider';

import styles from './Slider.scss';

type SliderProps = {
  value: number;
  onChange?: (value: number) => void;
};

export const Slider = ({ onChange, value }: SliderProps) => {
  const changeHandler = (value: number) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <ReactSlider
      value={value}
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      onAfterChange={changeHandler}
    />
  );
};
