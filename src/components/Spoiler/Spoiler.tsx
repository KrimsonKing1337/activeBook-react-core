import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import styles from './Spoiler.scss';

export type SpoilerProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  isOpenDefault?: boolean;
  needToSetHeight?: boolean;
  setNeedToSetHeightToFalse?: () => void;
};

export const Spoiler = ({
  children,
  label,
  isOpenDefault = false,
  needToSetHeight = false,
  setNeedToSetHeightToFalse = () => {
  },
  ...rest
}: PropsWithChildren<SpoilerProps>) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  useEffect(() => {
    setIsOpen(isOpenDefault);
  }, [isOpenDefault]);

  const contentRef = useRef<HTMLDivElement>(null);

  const buttonText = isOpen ? 'Закрыть' : 'Раскрыть';
  const buttonLabel = label ? label : buttonText;

  // const childrenIsText = typeof children === 'string';

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
    <div className={styles.spoiler} {...rest}>
      <div className={styles.button} onClick={buttonClickHandler}>
        {buttonLabel}
      </div>

      <div className={styles.content} ref={contentRef}>
        <div>{children}</div>
      </div>
    </div>
  );
};
