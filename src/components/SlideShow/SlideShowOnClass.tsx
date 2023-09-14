import React, { PropsWithChildren } from 'react';

import Hammer from 'hammerjs';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SlideShow.scss';

type SlideShowMode = 'modal' | null;

export type SlideShowProp = {
  isVisible?: boolean;
  isWithoutBorders?: boolean,
  mode?: SlideShowMode;
  onSlideChange?: () => void;
}

type SlideShowState = {
  slideIndex: number;
  isOverflow: boolean;
  arrowsAreVisible: boolean;
};

// пришлось переписать компонент на классовый, чтобы Hammer не дёргался на "каждый чих". см SlideShowOnHooks.tsx
export class SlideShow extends React.Component<PropsWithChildren<SlideShowProp>, SlideShowState> {
  static defaultProps = {
    isVisible: false,
    isWithoutBorders: false,
    mode: null,
    onSlideChange: () => {
    },
  };

  private hammertime: HammerManager | null;
  private readonly itemsWrapperRef: React.RefObject<HTMLDivElement>;
  private readonly wrapperRef: React.RefObject<HTMLDivElement>;
  private readonly slideShowRef: React.RefObject<HTMLDivElement>;

  childrenAsArray = React.Children.toArray(this.props.children);

  constructor(props: SlideShowProp) {
    super(props);

    this.itemsWrapperRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.slideShowRef = React.createRef();
    this.hammertime = null;

    this.state = {
      slideIndex: 0,
      isOverflow: false,
      arrowsAreVisible: false,
    };
  }

  componentDidMount() {
    const { current } = this.wrapperRef;

    if (!current) {
      return;
    }

    this.hammertime = new Hammer(current, { domEvents: true });

    this.hammertime.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 50,
    });

    // обработчик именно здесь, чтобы onClick не срабатывал вместе с Hammer.swipe. Hammer сам разрулит эту проблему
    this.hammertime.on('tap', (e) => {
      const { target } = e;

      const attrOfOnlyIcon = 'data-icon';

      if (target.getAttribute(attrOfOnlyIcon)) {
        return;
      }

      if (target.firstElementChild?.getAttribute(attrOfOnlyIcon)) {
        return;
      }

      this.wrapperClickHandler();
    });

    this.hammertime.on('swipe', (e) => {
      const { direction } = e;

      const isNext = direction === Hammer.DIRECTION_LEFT;

      this.changeSlide(isNext);
    });
  }

  componentWillUnmount() {
    if (!this.hammertime) {
      return;
    }

    this.hammertime.off('tap');
    this.hammertime.off('swipe');
    this.hammertime.destroy();
  }

  componentDidUpdate(prevProps: SlideShowProp, prevState: SlideShowState) {
    const { isVisible } = this.props;
    const { slideIndex } = this.state;

    if (isVisible !== prevProps.isVisible && !isVisible) {
      this.isNotVisibleHandler();
    }

    if (slideIndex !== prevState.slideIndex) {
      this.setIsOverflow();
    }
  }

  setSlideShowTransformTranslateX = (value: string) => {
    const itemsWrapperElement = this.itemsWrapperRef?.current;

    if (!itemsWrapperElement) {
      return;
    }

    itemsWrapperElement.style.transform = `translateX(${value})`;
  };

  changeSlide = (isNext: boolean) => {
    const { slideIndex } = this.state;
    const { onSlideChange } = this.props;

    let nextIndex = isNext ? slideIndex + 1 : slideIndex - 1;
    const lastIndex = this.childrenAsArray.length - 1;

    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    this.setState({
      slideIndex: nextIndex,
    });

    const newValue = Math.abs(nextIndex * 100);

    this.setSlideShowTransformTranslateX(`-${newValue}%`);

    if (onSlideChange) {
      onSlideChange();
    }
  };

  setIsOverflow = () => {
    if (this.props.mode !== 'modal') {
      return;
    }

    const slideShowElement = this.slideShowRef?.current;

    if (!slideShowElement) {
      return;
    }

    const activeItem = slideShowElement.querySelector(`.${styles.isActive}`) as HTMLElement;

    if (!activeItem) {
      return;
    }

    const isOverflow = activeItem.offsetHeight > slideShowElement.offsetHeight;

    this.setState({ isOverflow });
  };

  isNotVisibleHandler = () => {
    this.setState({
      slideIndex: 0,
      isOverflow: false,
    });

    this.setSlideShowTransformTranslateX('0%');
  };

  wrapperClickHandler = () => {
    const { arrowsAreVisible } = this.state;

    this.setState({
      arrowsAreVisible: !arrowsAreVisible,
    });
  };

  arrowClickHandler = (e: React.MouseEvent, isNext: boolean) => {
    e.stopPropagation();

    this.changeSlide(isNext);
  };

  render() {
    const { isWithoutBorders, mode } = this.props;
    const { slideIndex, isOverflow, arrowsAreVisible } = this.state;

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
      <div ref={this.wrapperRef} className={wrapperClassNames}>
        <div className="SlideShowToolbar">
          <div className={styles.left} onClick={(e) => this.arrowClickHandler(e, false)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <div className={styles.right} onClick={(e) => this.arrowClickHandler(e, true)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div ref={this.slideShowRef} className={slideShowClassNames}>
          <div ref={this.itemsWrapperRef} className={itemsWrapperClassNames}>
            {this.childrenAsArray.map((childCur, index) => {
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
  }
}
