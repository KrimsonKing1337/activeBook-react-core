import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Hammer from 'hammerjs';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Modal.scss';

const IS_OPEN_LOCATION = '/modal';
const IS_CLOSE_LOCATION = '/';

type Func = () => void;

type ModalMode = 'media' |  null;

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  closeFunction: Func;
  mode?: ModalMode;
  hideExpandButton?: boolean;
  hideCropButton?: boolean;
  onClose: Func;
};

export const Modal = ({
  children,
  onClose,
  isOpen,
  closeFunction,
  mode = null,
  hideExpandButton = false,
  hideCropButton = false,
}: ModalProps) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const [componentUuid, setComponentUuid] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isCrop, setIsCrop] = useState(true);
  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);
  const [isZooming, setIsZooming] = useState(false);

  const overflowRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iconCloseRef = useRef<HTMLDivElement>(null);
  const iconExpandRef = useRef<HTMLDivElement>(null);
  const iconCompressRef = useRef<HTMLDivElement>(null);
  const iconCropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const uuidValue = uuidv4();

    setComponentUuid(uuidValue);
  }, []);

  const isMediaMode = mode === 'media';

  /*
  * todo: мне кажется, я тут какую-то костыльную хрень придумал.
  *  эта штука будет срабатывать каждый раз, когда меняется pathname по всему приложению.
  *  и так по всех компонентах, где я использую похожую логику:
  *  Menu, TableOfContents, Bookmarks.
  *  разобраться как сделать нормально, если это возможно (посмотреть в сторону Switch у Router)
  * */
  useEffect(() => {
    if (!componentUuid) {
      return;
    }

    if (!prevLocationPath.includes(componentUuid) && !pathname.includes(componentUuid)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE_LOCATION) {
        close();
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const path =`${IS_OPEN_LOCATION}/${componentUuid}`;

    history.push(path);
  }, [isOpen]);

  // todo: инициализировать один раз, но переменные в зависимостях шоб были актуальные (они нужны в хэндлерах)
  useEffect(() => {
    const { current } = overflowRef;

    if (!current) {
      return;
    }

    const hammertime = new Hammer(current);

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
    hammertime.on('pinchend pinchcancel', () => setIsZooming(false));

    return () => {
      setIsZooming(false);
      hammertime.off('tap');
      hammertime.off('pinch');
      hammertime.destroy();
    };
  }, [isFullScreen, isZooming, isCrop]);

  useEffect(() => {
    const { current } = wrapperRef;

    if (!current) {
      return;
    }

    const wrapperWidth = current.clientWidth;

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

  const close = () => {
    closeFunction();
    history.push(IS_CLOSE_LOCATION);

    onClose();
  };

  const closeIconClickHandler = () => close();
  const overflowClickHandler = () => close();
  const doubleTapHandler = () => {
    setIsFullScreen(!isFullScreen);
  };

  const zoomInHandler = () => {
    if (!isFullScreen) {
      setIsZooming(true);
      setIsFullScreen(true);

      return;
    }

    if (!isZooming) {
      setIsCrop(true);
    }
  };

  const zoomOutHandler = () => {
    if (isCrop) {
      setIsZooming(true);
      setIsCrop(false);

      return;
    }

    if (!isZooming) {
      setIsFullScreen(false);
    }
  };

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
    [styles.isFullScreen]: isFullScreen,
  });

  const iconCompressClassNames = classNames({
    [styles.iconCompress]: true,
    [styles.isFullScreen]: isFullScreen,
  });

  const iconCropClassNames = classNames({
    [styles.iconCrop]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
    [styles.isHidden]: hideCropButton,
  });

  const contentClassNames = classNames({
    [styles.content]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isCrop]: isCrop,
  });

  return (
    <div ref={overflowRef} className={overflowClassNames} onClick={overflowClickHandler}>
      <div ref={wrapperRef} className={modalClassNames}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className={'modalToolbar'}>
            <div ref={iconCloseRef} className={iconCloseClassNames} onClick={closeIconClickHandler}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <div ref={iconExpandRef} className={iconExpandClassNames} onClick={() => setIsFullScreen(true)}>
              <FontAwesomeIcon icon={faExpand} />
            </div>

            <div ref={iconCompressRef} className={iconCompressClassNames} onClick={() => setIsFullScreen(false)}>
              <FontAwesomeIcon icon={faCompress} />
            </div>

            <div ref={iconCropRef} className={iconCropClassNames} onClick={() => setIsCrop(!isCrop)}>
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
