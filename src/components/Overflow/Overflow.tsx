import { PropsWithChildren, useEffect, useRef } from 'react';

import classNames from 'classnames';


import { useDispatch } from 'store';
import { mainActions } from 'store/main';

import { getNarrativeElement } from 'components/PageWrapper/components/Narrative/utils';

import * as styles from './Overflow.scss';

export type OverflowProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren & {
  isOpen: boolean;
  className?: string;
};

export const Overflow = ({ children, isOpen, className = '', ...etc }: OverflowProps) => {
  const dispatch = useDispatch();

  const overflowRef = useRef<HTMLDivElement>(null);

  // закрываем по Esc активный Overflow в данный момент
  useEffect(() => {
    const keypressEscHandler = (e: KeyboardEvent) => {
      const { key } = e;

      if (key === 'Escape') {
        dispatch(mainActions.setMenuActiveState(null));
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', keypressEscHandler);
    }

    return () => {
      document.removeEventListener('keydown', keypressEscHandler);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
      overflowRef.current?.focus();
    } else {
      // возвращаем фокус на текст
      const narrativeElement = getNarrativeElement();

      narrativeElement?.focus();
    }
  }, [isOpen]);

  const overflowClassNames = classNames({
    [styles.Overflow]: true,
    [styles.isOpen]: isOpen,
    [className]: !!className,
  });

  return (
    <div
      ref={overflowRef}
      className={overflowClassNames}
      tabIndex={0}
      {...etc}
    >
      {children}
    </div>
  );
};
