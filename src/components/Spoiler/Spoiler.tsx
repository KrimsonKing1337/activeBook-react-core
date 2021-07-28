import React, { useEffect, useRef, useState } from 'react';

import styles from './Spoiler.scss';

export type SpoilerProps = {
  children: React.ReactNode;
  [name: string]: any;
};

export const Spoiler = ({ children, ...rest } : SpoilerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonText = isOpen ? 'Закрыть' : 'Раскрыть';

  useEffect(() => {
    const contentElement = contentRef.current;

    if (!contentElement) {
      return;
    }

    if (!isOpen) {
      contentElement.style.height = '0';

      return;
    }

    const contentHeight = contentElement.scrollHeight;

    contentElement.style.height = `${contentHeight}px`;
  }, [isOpen]);

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
        {children}
      </div>
    </div>
  );
};
