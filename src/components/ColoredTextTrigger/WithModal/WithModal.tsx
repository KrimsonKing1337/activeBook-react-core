import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { Modal as ModalComponent, ModalProps } from 'components/Modal';
import { Action } from 'components/ColoredTextTrigger/Action';
import { AuthorComment } from 'components/ColoredTextTrigger/AuthorComment';
import { EasterEgg } from 'components/ColoredTextTrigger/EasterEgg';

import styles from './WithModal.scss';

export type TriggerType = 'action' | 'author' | 'egg';

export type ModalWithVideoEasterEggProps = {
  mode?: ModalProps['mode'];
  text: string;
  triggerType: TriggerType;
  eggId?: string;
};

export const WithModal = ({
  children,
  mode = 'media',
  text,
  triggerType,
  eggId,
}: PropsWithChildren<ModalWithVideoEasterEggProps>) => {
  const [isActive, setIsActive] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const getTrigger = () => {
    if (triggerType === 'author') {
      return (
        <AuthorComment onClick={() => setIsActive(true)}>
          {text}
        </AuthorComment>
      );
    }

    if (triggerType === 'egg') {
      if (!eggId) {
        console.error(new Error('Id for EasterEgg must be passed!'));

        return null;
      }

      return (
        <EasterEgg onClick={() => setIsActive(true)} id={eggId}>
          {text}
        </EasterEgg>
      );
    }

    return (
      <Action onClick={() => setIsActive(true)}>
        {text}
      </Action>
    );
  };

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    const video = wrapperRef.current.querySelector('video');

    if (!video) {
      return;
    }

    if (isActive) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const trigger = getTrigger();

  return (
    <span className={styles.wrapper} ref={wrapperRef}>
      <ModalComponent
        isOpen={isActive}
        onClose={() => setIsActive(false)}
        mode={mode}
        canCrop
        cropDefault={false}
        canFullScreen
      >
        {children}
      </ModalComponent>

      {trigger}
    </span>
  );
};
