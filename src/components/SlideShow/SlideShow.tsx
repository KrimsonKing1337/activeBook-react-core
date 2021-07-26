import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { setCssVariable } from 'utils/setCssVariable';

import styles from './SlideShow.scss';

export type SlideShowType = {
  children: React.ReactNode;
  isVisible?: boolean;
}

export const SlideShow = ({ children, isVisible = true }: SlideShowType) => {
  const childrenAsArray = React.Children.toArray(children);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isOverflow, setIsOverflow] = useState(false);
  const wrapperElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) {
      setCssVariable('--slide-show-transform-translate-x', '0%');
    }
  }, [isVisible]);

  useEffect(() => {
    const wrapperEl = wrapperElement?.current;

    if (wrapperEl) {
      const isOverflow = wrapperEl.offsetHeight > window.innerHeight;

      setIsOverflow(isOverflow);
    }
  }, [slideIndex]);

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

  const slideShowClassNames = classNames({
    [styles.slideShow]: true,
    [styles.isOverflow]: isOverflow,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.left} onClick={() => clickHandler(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        <div className={styles.right} onClick={() => clickHandler(true)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className={slideShowClassNames}>
        <div ref={wrapperElement} className={styles.itemsWrapper}>
          {childrenAsArray.map((childCur, index) => {
            const itemClassNames = classNames({
              [styles.item]: true,
              [styles.isActive]: index === slideIndex,
            });

            return (
              <div key={index} className={itemClassNames}>
                {childCur}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
