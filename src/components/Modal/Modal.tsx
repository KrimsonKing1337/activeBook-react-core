import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Modal.scss';

const MODAL_IS_OPEN_LOCATION = '/modal';
const MODAL_IS_CLOSE_LOCATION = '/';

type Func = () => void;

type ModalMode = 'media' |  null;

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  closeFunction: Func;
  mode?: ModalMode;
  hideExpandButton?: boolean;
  onClose: Func;
};

export const Modal = ({
  children,
  onClose,
  isOpen,
  closeFunction,
  mode = null,
  hideExpandButton = false,
}: ModalProps) => {
  const [componentUuid, setComponentUuid] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isCrop, setIsCrop] = useState(true);
  const [prevLocationPath, setPrevLocationPath] = useState(MODAL_IS_CLOSE_LOCATION);
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    const uuidValue = uuidv4();

    setComponentUuid(uuidValue);
  }, []);

  const isMediaMode = mode === 'media';

  useEffect(() => {
    if (!componentUuid) {
      return;
    }

    if (!prevLocationPath.includes(componentUuid) && !pathname.includes(componentUuid)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === MODAL_IS_CLOSE_LOCATION) {
        close();
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const path =`${MODAL_IS_OPEN_LOCATION}/${componentUuid}`;

    history.push(path);
  }, [isOpen]);

  const close = () => {
    closeFunction();
    history.push(MODAL_IS_CLOSE_LOCATION);

    onClose();
  };

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
