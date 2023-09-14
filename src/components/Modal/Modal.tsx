import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import Hammer from 'hammerjs';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Modal.scss';

type Func = () => void;

type ModalMode = 'media' | 'text';

export type ModalProps = {
  isOpen: boolean;
  onOpen?: Func;
  onClose?: Func;
  mode?: ModalMode;
  canClose?: boolean;
  canFullScreen?: boolean;
  fullScreenDefault?: boolean;
  canCrop?: boolean;
  cropDefault?: boolean;
};

/*
* ниже я реализовал механику на window.location и window.history,
* потому что при использовании хуков из react-router - location неактуальный,
* из-за чего модалка открывается и сразу же закрывается.
* мб дело в redux-first-history, что все действия с location нужно производить через стор и саги.
*/
export const Modal = ({
  children,
  onClose,
  isOpen,
  mode = 'text',
  canClose = true,
  canFullScreen = false,
  fullScreenDefault = false,
  canCrop = false,
  cropDefault = true,
}: PropsWithChildren<ModalProps>) => {
  // здесь реф-версии нужны для хаммера, обычные для того чтобы ре-рендер срабатывал
  const isFullScreenRef = useRef(false);
  const isCropRef = useRef(true);
  const isZoomingRef = useRef(false);

  const [isFullScreen, setIsFullScreen] = useState(fullScreenDefault);
  const [isCrop, setIsCrop] = useState(cropDefault);
  const [componentUuid, setComponentUuid] = useState('');

  const overflowRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iconCloseRef = useRef<HTMLDivElement>(null);
  const iconExpandRef = useRef<HTMLDivElement>(null);
  const iconCompressRef = useRef<HTMLDivElement>(null);
  const iconCropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const uuidValue = nanoid();

    setComponentUuid(uuidValue);
  }, []);

  const escPressHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('popstate', () => {
      if (!window.location.hash) {
        close();
      }
    });
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.removeEventListener('keydown', escPressHandler);

      return;
    }

    const path = `#/modal/${componentUuid}`;

    window.history.pushState('', '', path);

    document.addEventListener('keydown', escPressHandler);
  }, [isOpen]);

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    const wrapperWidth = wrapperRef.current.clientWidth;

    const applyStyleLeftForElement = (element: HTMLDivElement) => {
      element.style.left = `${wrapperWidth}px`;
    };

    const iconClose = iconCloseRef.current;
    const iconExpand = iconExpandRef.current;
    const iconCompress = iconCompressRef.current;
    const iconCrop = iconCropRef.current;

    if (!iconClose || !iconExpand || !iconCompress || !iconCrop) {
      return;
    }

    const arr = [iconClose, iconExpand, iconCompress, iconCrop];

    arr.forEach((cur) => applyStyleLeftForElement(cur));
  }, [isOpen]);

  useEffect(() => {
    if (!overflowRef.current) {
      return;
    }

    const hammertime = new Hammer(overflowRef.current);

    hammertime.get('tap').set({
      taps: 2,
    });

    hammertime.get('pinch').set({
      enable: true,
      threshold: 0.5,
    });

    hammertime.on('tap', doubleTapHandler);
    hammertime.on('pinchout', zoomInHandler);
    hammertime.on('pinchin', zoomOutHandler);

    hammertime.on('pinchend pinchcancel', () => {
      isZoomingRef.current = false;
    });

    return () => {
      isZoomingRef.current = false;

      hammertime.off('tap');
      hammertime.off('pinch');
      hammertime.destroy();
    };
  }, []);

  const close = () => {
    if (!canClose) {
      return;
    }

    window.history.pushState(null, '', '/');

    if (onClose) {
      onClose();
    }
  };

  const closeIconClickHandler = () => close();
  const overflowClickHandler = () => close();

  const doubleTapHandler = () => {
    if (!canFullScreen) {
      return;
    }

    isFullScreenRef.current = !isFullScreenRef.current;
    setIsFullScreen(isFullScreenRef.current);
  };

  const zoomInHandler = () => {
    if (!canFullScreen) {
      return;
    }

    if (!isFullScreenRef.current) {
      isZoomingRef.current = true;

      isFullScreenRef.current = true;
      setIsFullScreen(true);

      return;
    }

    if (!canCrop) {
      return;
    }

    if (!isZoomingRef.current) {
      isCropRef.current = true;
      setIsCrop(true);
    }
  };

  const zoomOutHandler = () => {
    if (isCropRef.current) {
      isZoomingRef.current = true;

      isCropRef.current = false;
      setIsCrop(false);

      return;
    }

    if (!isZoomingRef.current) {
      isFullScreenRef.current = false;
      setIsFullScreen(false);
    }
  };

  const iconExpandClickHandler = () => {
    isFullScreenRef.current = true;
    setIsFullScreen(true);
  };

  const iconCompressClickHandler = () => {
    isFullScreenRef.current = false;
    setIsFullScreen(false);
  };

  const iconCropClickHandler = () => {
    isCropRef.current = !isCropRef.current;
    setIsCrop(!isCrop);
  };

  const isMediaMode = mode === 'media';

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
    [styles.isHidden]: !canFullScreen,
  });

  const iconCloseClassNames = classNames({
    [styles.iconClose]: true,
    [styles.canClose]: canClose,
    [styles.isMediaMode]: isMediaMode,
    [styles.isFullScreen]: isFullScreen,
  });

  const iconCompressClassNames = classNames({
    [styles.iconCompress]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
  });

  const iconCropClassNames = classNames({
    [styles.iconCrop]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
    [styles.isHidden]: !canCrop,
  });

  const contentClassNames = classNames({
    [styles.content]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
    [styles.isCrop]: isCrop,
  });

  return (
    <div ref={overflowRef} className={overflowClassNames} onClick={overflowClickHandler}>
      <div ref={wrapperRef} className={modalClassNames}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className="modalToolbar">
            <div ref={iconCloseRef} className={iconCloseClassNames} onClick={closeIconClickHandler}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <div ref={iconExpandRef} className={iconExpandClassNames} onClick={iconExpandClickHandler}>
              <FontAwesomeIcon icon={faExpand} />
            </div>

            <div ref={iconCompressRef} className={iconCompressClassNames} onClick={iconCompressClickHandler}>
              <FontAwesomeIcon icon={faCompress} />
            </div>

            <div ref={iconCropRef} className={iconCropClassNames} onClick={iconCropClickHandler}>
              <FontAwesomeIcon icon={faCrop} />
            </div>
          </div>

          <div className={contentClassNames}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
