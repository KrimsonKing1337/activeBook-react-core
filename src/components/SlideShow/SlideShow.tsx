import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

import Hammer from 'hammerjs';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SlideShow.scss';

type SlideShowMode = 'modal' | null;

export type SlideShowProps = {
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
  onSlideChange = () => {
  },
}: PropsWithChildren<SlideShowProps>) => {
  const childrenAsArray = React.Children.toArray(children);

  // один slideIndex нужен для хаммера, другой для того чтобы useEffect срабатывал
  const slideIndexRef = useRef(0);

  const [slideIndex, setSlideIndex] = useState(0);
  const [isOverflow, setIsOverflow] = useState(false);
  const [arrowsAreVisible, setArrowsAreVisible] = useState(true);

  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

    slideIndexRef.current = 0;
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

  useEffect(() => {
    const { current } = wrapperRef;

    if (!current) {
      return;
    }

    const hammertime = new Hammer(current, { domEvents: true });

    hammertime.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 50,
    });

    hammertime.on('tap', (e) => {
      const { target } = e;

      const attrOfOnlyIcon = 'data-icon';

      if (target.getAttribute(attrOfOnlyIcon)) {
        return;
      }

      if (target.firstElementChild?.getAttribute(attrOfOnlyIcon)) {
        return;
      }
    });

    hammertime.on('swipe', (e) => {
      e.srcEvent.stopPropagation();

      const { direction } = e;

      const isNext = direction === Hammer.DIRECTION_LEFT;

      changeSlide(isNext);
    });

    return () => {
      hammertime.off('tap');
      hammertime.off('swipe');
      hammertime.destroy();
    };
  }, []);

  const changeSlide = (isNext: boolean) => {
    let nextIndex = isNext ? slideIndexRef.current + 1 : slideIndexRef.current - 1;
    const lastIndex = childrenAsArray.length - 1;

    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    slideIndexRef.current = nextIndex;
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

  const isModalMode = mode === 'modal';

  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.arrowsAreVisible]: arrowsAreVisible,
    [styles.isWithoutBorders]: isWithoutBorders || isModalMode,
    [styles.isModalMode]: isModalMode,
  });

  const slideShowClassNames = classNames({
    [styles.slideShow]: true,
    [styles.isOverflow]: isOverflow,
    [styles.isModalMode]: isModalMode,
  });

  const itemsWrapperClassNames = classNames({
    [styles.itemsWrapper]: true,
    [styles.isModalMode]: isModalMode,
    [styles.isOverflow]: isOverflow,
  });

  return (
    <div ref={wrapperRef} className={wrapperClassNames} onClick={wrapperClickHandler}>
      <div className="SlideShowToolbar">
        <div className={styles.left} onClick={(e) => arrowClickHandler(e, false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        <div className={styles.right} onClick={(e) => arrowClickHandler(e, true)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className={slideShowClassNames}>
        <div ref={itemsWrapperRef} className={itemsWrapperClassNames}>
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
