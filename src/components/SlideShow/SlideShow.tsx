import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { setCssVariable } from 'utils/setCssVariable';

import styles from './SlideShow.scss';

type SlideShowMode = 'modal' | null;

export type SlideShowType = {
  children: React.ReactNode;
  isVisible?: boolean;
  isWithoutBorders?: boolean,
  mode?: SlideShowMode;
  onSlideChange?: () => void;
}

export const SlideShow = ({
  children,
  isVisible = true,
  mode = null,
  isWithoutBorders = false,
  onSlideChange = () => {},
}: SlideShowType) => {
  const childrenAsArray = React.Children.toArray(children);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isOverflow, setIsOverflow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isModalMode = mode === 'modal';

  // сбрасываем состояние, если слайд-шоу скрывается (например, модалку закрыли)
  useEffect(() => {
    if (isVisible) {
      return;
    }

    setSlideIndex(0);
    setIsOverflow(false);
    setCssVariable('--slide-show-transform-translate-x', '0%');
  }, [isVisible]);

  useEffect(() => {
    const wrapperElement = wrapperRef?.current;

    if (wrapperElement) {
      const isOverflow = wrapperElement.offsetHeight > window.innerHeight;

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

    onSlideChange();
  };

  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.isWithoutBorders]: isWithoutBorders || isModalMode,
  });

  const slideShowClassNames = classNames({
    [styles.slideShow]: true,
    [styles.isOverflow]: isOverflow,
    [styles.isModalMode]: isModalMode,
  });

  const leftArrowClassNames = classNames({
    [styles.left]: true,
    [styles.isModalMode]: isModalMode,
  });

  const rightArrowClassNames = classNames({
    [styles.right]: true,
    [styles.isModalMode]: isModalMode,
  });

  return (
    <div className={wrapperClassNames}>
      <div className={'SlideShowToolbar'}>
        <div className={leftArrowClassNames} onClick={() => clickHandler(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        <div className={rightArrowClassNames} onClick={() => clickHandler(true)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className={slideShowClassNames}>
        <div ref={wrapperRef} className={styles.itemsWrapper}>
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
