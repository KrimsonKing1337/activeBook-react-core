import { useEffect, useState } from 'react';

import type { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 0;
const MAX = 100;

import * as styles from './Slider.scss';

type SliderProps = {
  value: number;
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
};

export const Slider = ({ value, onChange, onAfterChange }: SliderProps) => {
  const [values, setValues] = useState([value]);

  useEffect(() => {
    setValues([value]);
  }, [value]);

  const changeHandler = (values: number[]) => {
    setValues(values);

    if (onChange) {
      onChange(values[0]);
    }
  };

  const afterChangeHandler = (values: number[]) => {
    if (onAfterChange) {
      onAfterChange(values[0]);
    }
  };

  const Track = ({ props, children }: IRenderTrackParams) => {
    return (
      <div
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={props.style}
        className={styles.TrackWrapper}
      >
        <div
          ref={props.ref}
          style={{
            background: getTrackBackground({
              values,
              colors: ['var(--main)', '#ccc'],
              min: MIN,
              max: MAX,
            }),
          }}
          className={styles.Track}
        >
          {children}
        </div>
      </div>
    );
  };

  const Thumb = ({ props }: IRenderThumbParams) => {
    return (
      <div
        {...props}
        key={props.key}
        style={props.style}
        className={styles.Thumb}
      />
    );
  };

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={changeHandler}
      onFinalChange={afterChangeHandler}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};
