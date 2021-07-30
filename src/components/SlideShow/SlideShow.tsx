import React, { useEffect, useRef, useState } from 'react';

import Hammer from 'hammerjs';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
  const [arrowsAreVisible, setArrowsAreVisible] = useState(true);

  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // todo: инициализировать один раз, но slideIndex (он юзается в changeSlide()) шоб был актуальный
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

    // обработчик именно здесь, чтобы onClick не срабатывал вместе с Hammer.swipe. Hammer сам разрулит эту проблему
    hammertime.on('tap', (e) => {
      const { target } = e;

      const attrOfOnlyIcon = 'data-icon';

      if (target.getAttribute(attrOfOnlyIcon)) {
        return;
      }

      if (target.firstElementChild?.getAttribute(attrOfOnlyIcon)) {
        return;
      }

      wrapperClickHandler();
    });

    hammertime.on('swipe', (e) => {
      const { direction } = e;

      const isNext = direction === Hammer.DIRECTION_LEFT;

      changeSlide(isNext);
    });

    return () => {
      hammertime.off('tap');
      hammertime.off('swipe');
      hammertime.destroy();
    };
  }, [slideIndex, arrowsAreVisible]);

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
    <div ref={wrapperRef} className={wrapperClassNames}>
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
  );
};
