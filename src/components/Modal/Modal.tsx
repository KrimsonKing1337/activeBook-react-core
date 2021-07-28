import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Modal.scss';

type ModalMode = 'media' |  null;

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  mode?: ModalMode;
  hideExpandButton?: boolean;
  onClose: () => void;
};

export const Modal = ({
  children,
  onClose,
  isOpen,
  mode = null,
  hideExpandButton = false,
}: ModalProps) => {
  const isMediaMode = mode === 'media';

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isCrop, setIsCrop] = useState(true);

  const close = () => onClose();

  const closeIconClickHandler = () => close();
  const overflowClickHandler = () => close();

  const overflowClassNames = classNames({
    [styles.overflow]: true,
    [styles.isOpen]: isOpen,
  });

  const modalClassNames = classNames({
    [styles.modal]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
  });

  const iconExpandClassNames = classNames({
    [styles.iconExpand]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
    [styles.isHidden]: hideExpandButton,
  });

  const iconCloseClassNames = classNames({
    [styles.iconClose]: true,
    [styles.isMediaMode]: isMediaMode,
  });

  const iconCompressClassNames = classNames({
    [styles.iconCompress]: true,
    [styles.isFullScreen]: isFullScreen,
  });

  const iconCropClassNames = classNames({
    [styles.iconCrop]: true,
    [styles.isFullScreen]: isFullScreen,
  });

  const contentClassNames = classNames({
    [styles.content]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isCrop]: isCrop,
  });

  return (
    <div className={overflowClassNames} onClick={overflowClickHandler}>
      <div className={modalClassNames}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className={'modalToolbar'}>
            <div className={iconCloseClassNames} onClick={closeIconClickHandler}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <div className={iconExpandClassNames} onClick={() => setIsFullScreen(true)}>
              <FontAwesomeIcon icon={faExpand} />
            </div>

            <div className={iconCompressClassNames} onClick={() => setIsFullScreen(false)}>
              <FontAwesomeIcon icon={faCompress} />
            </div>

            <div className={iconCropClassNames} onClick={() => setIsCrop(!isCrop)}>
              <FontAwesomeIcon icon={faCrop} />
            </div>
          </div>

          <div className={contentClassNames}>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
};
