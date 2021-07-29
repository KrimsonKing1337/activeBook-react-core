import React, { useEffect, useRef, useState } from 'react';
import Hammer from 'react-hammerjs';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SlideShow.scss';

const hammerOptions = {
  recognizers: {
    tap: {
      threshold: 200,
      direction: 6, // horizontal
    },
  },
};

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
  const [arrowsAreVisible, setArrowsAreVisible] = useState(true);
  const [isSwiping, setIsSwiping] = useState(false);

  const itemsWrapperRef = useRef<HTMLDivElement>(null);

  const isModalMode = mode === 'modal';

  const setSlideShowTransformTranslateX = (value: string) => {
    const itemsWrapperElement = itemsWrapperRef?.current;

    if (!itemsWrapperElement) {
      return;
    }

    itemsWrapperElement.style.transform = `translateX(${value})`;
  };

  // сбрасываем состояние, если слайд-шоу скрывается (например, модалку закрыли)
  useEffect(() => {
    if (isVisible) {
      return;
    }

    setSlideIndex(0);
    setIsOverflow(false);
    setSlideShowTransformTranslateX('0%');
  }, [isVisible]);

  useEffect(() => {
    const itemsWrapperElement = itemsWrapperRef?.current;

    if (!itemsWrapperElement) {
      return;
    }

    const isOverflow = itemsWrapperElement.offsetHeight > window.innerHeight;

    setIsOverflow(isOverflow);
  }, [slideIndex]);

  const changeSlide = (isNext: boolean) => {
    let nextIndex = isNext ? slideIndex + 1 : slideIndex - 1;
    const lastIndex = childrenAsArray.length - 1;

    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    setSlideIndex(nextIndex);

    const newValue = Math.abs(nextIndex * 100);

    setSlideShowTransformTranslateX(`-${newValue}%`);

    onSlideChange();
  };

  const wrapperClickHandler = () => {
    setArrowsAreVisible(!arrowsAreVisible);
  };

  const arrowClickHandler = (e: React.MouseEvent, isNext: boolean) => {
    e.stopPropagation();

    changeSlide(isNext);
  };

  const swipeHandler = (e: any) => {
    const { direction, distance } = e;

    if (isSwiping) {
      return;
    }

    if (distance < 150) {
      return;
    }

    setIsSwiping(true);

    const isNext = direction === 2;

    changeSlide(isNext);
  };


  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.arrowsAreVisible]: arrowsAreVisible,
    [styles.isWithoutBorders]: isWithoutBorders || isModalMode,
  });

  const slideShowClassNames = classNames({
    [styles.slideShow]: true,
    [styles.isOverflow]: isOverflow,
    [styles.isModalMode]: isModalMode,
  });

  return (
    <Hammer
      options={hammerOptions}
      direction={'DIRECTION_HORIZONTAL'}
      onPan={swipeHandler}
      onPanEnd={() => setIsSwiping(false)}
      onPanCancel={() => setIsSwiping(false)}
    >
      <div className={wrapperClassNames} onClick={wrapperClickHandler}>
        <div className={'SlideShowToolbar'}>
          <div className={styles.left} onClick={(e) => arrowClickHandler(e,false)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <div className={styles.right} onClick={(e) => arrowClickHandler(e,true)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className={slideShowClassNames}>
          <div ref={itemsWrapperRef} className={styles.itemsWrapper}>
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
    </Hammer>
  );
};
