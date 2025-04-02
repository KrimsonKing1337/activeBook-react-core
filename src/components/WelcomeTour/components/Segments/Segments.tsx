import { useState } from 'react';

import classNames from 'classnames';

import { Segment } from 'components';

import { useVibration } from 'hooks/effects/vibration';

import styles from './Segments.scss';

export const Segments = () => {
  const { vibrationOn, vibrationOff } = useVibration();

  const [isSegment1Active, setIsSegment1Active] = useState(false);
  const [isSegment2Active, setIsSegment2Active] = useState(false);

  const segment1EnterHandler = () => {
    vibrationOn(1000);

    setIsSegment1Active(true);
  };

  const segment1ExitHandler = () => {
    vibrationOff();

    setIsSegment1Active(false);
  };

  const segment2EnterHandler = () => {
    vibrationOn(500);

    setIsSegment2Active(true);
  };

  const segment2ExitHandler = () => {
    vibrationOff();

    setIsSegment2Active(false);
  };

  const segment1ContentClassNames = classNames({
    [styles.SegmentContent]: true,
    [styles.isActive]: isSegment1Active,
  });

  const segment2ContentClassNames = classNames({
    [styles.SegmentContent]: true,
    [styles.isActive]: isSegment2Active,
  });

  return (
    <div data-welcome-tour-id="segments">
      <Segment onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
        <p>
          Нажми на меня
        </p>

        <p className={segment1ContentClassNames}>
          Меня видно только когда этот сегмент активен
        </p>
      </Segment>

      <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
        <p>
          И на меня нажми!
        </p>

        <p className={segment2ContentClassNames}>
          Внутри сегментов прячутся текст, эффекты и многое другое!
        </p>
      </Segment>
    </div>
  );
};
