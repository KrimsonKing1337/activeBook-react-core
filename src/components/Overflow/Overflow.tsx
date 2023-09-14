import { PropsWithChildren, useEffect, useRef } from 'react';

import classNames from 'classnames';

import { useDispatch } from 'store';
import { mainActions } from 'store/main';

import { getNarrativeElement } from 'components/PageWrapper/components/Narrative/utils';

import styles from './Overflow.scss';

export type OverflowProps = {
  isOpen: boolean;
};

export const Overflow = ({ children, isOpen }: PropsWithChildren<OverflowProps>) => {
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
    [styles.overflow]: true,
    [styles.isOpen]: isOpen,
  });

  return (
    <div ref={overflowRef} className={overflowClassNames} tabIndex={0}>
      {children}
    </div>
  );
};
