import React, { useEffect, useRef, useState } from 'react';

import styles from './Spoiler.scss';

export type SpoilerProps = {
  children: React.ReactNode;
  needToSetHeight?: boolean;
  setNeedToSetHeightToFalse?: () => void;
  [name: string]: any;
};

export const Spoiler = ({
  children,
  needToSetHeight = false,
  setNeedToSetHeightToFalse = () => {},
  ...rest
} : SpoilerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonText = isOpen ? 'Закрыть' : 'Раскрыть';
  const childrenIsText = typeof children === 'string';

  const setHeight = (isOpen: boolean) => {
    const contentElement = contentRef.current;

    if (!contentElement) {
      return;
    }

    if (!isOpen) {
      contentElement.style.height = '0';
      return;
    }

    const contentHeight = contentElement.firstElementChild?.scrollHeight;

    contentElement.style.height = `${contentHeight}px`;
  };

  useEffect(() => {
    setHeight(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!needToSetHeight) {
      return;
    }

    setHeight(isOpen);
    setNeedToSetHeightToFalse();
  }, [isOpen, needToSetHeight]);

  const buttonClickHandler = () => {
    const contentElement = contentRef.current;

    if (!contentElement) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={'Spoiler'} {...rest}>
      <div className={styles.button} onClick={buttonClickHandler}>
        {buttonText}
      </div>

      <div className={styles.content} ref={contentRef}>
        {childrenIsText ? (<div>{children}</div>) : children}
      </div>
    </div>
  );
};
