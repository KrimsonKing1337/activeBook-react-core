import ReactSlider from 'react-slider';

import styles from './Slider.scss';

type SliderProps = {
  value: number;
  onChange?: (value: number) => void;
  onAfterChange?: () => void;
};

export const Slider = ({ value, onChange, onAfterChange }: SliderProps) => {
  const changeHandler = (value: number) => {
    if (onChange) {
      onChange(value);
    }
  };

  const afterChangeHandler = () => {
    if (onAfterChange) {
      onAfterChange();
    }
  };

  return (
    <ReactSlider
      value={value}
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      onChange={changeHandler}
      onAfterChange={afterChangeHandler}
    />
  );
};
