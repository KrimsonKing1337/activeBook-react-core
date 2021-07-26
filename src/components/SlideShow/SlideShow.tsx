import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { setCssVariable } from 'utils/setCssVariable';

import styles from './SlideShow.scss';

export type SlideShowType = {
  children: React.ReactNode;
};

export const SlideShow = ({ children }: SlideShowType) => {
  const childrenAsArray = React.Children.toArray(children);
  const [slideIndex, setSlideIndex] = useState(0);

  const clickHandler = (isNext: boolean) => {
    let nextIndex = isNext ? slideIndex + 1 : slideIndex - 1;
    const lastIndex = childrenAsArray.length - 1;

    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    setSlideIndex(nextIndex);

    const newValue = Math.abs(nextIndex * 100);

    setCssVariable('--slide-show-transform-translate-x', `-${newValue}%`);
  };

  return (
    <div className={styles.slideShow}>
      <div className={'toolbar'}>
        <div className={styles.left} onClick={() => clickHandler(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        <div className={styles.right} onClick={() => clickHandler(true)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className={styles.wrapper}>
        {childrenAsArray.map((childCur, index) => {
          return (
            <div key={index} className={styles.item}>
              {childCur}
            </div>
          );
        })}
      </div>
    </div>
  );
};
