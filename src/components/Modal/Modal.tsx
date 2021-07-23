import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { mainSelectors } from 'store/main/reducer';
import { setModalIsOpen } from 'store/main/actionsTypes';

import styles from './Modal.scss';

export const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(mainSelectors.modalIsOpen);

  const close = () => {
    dispatch(setModalIsOpen(false));
  };

  const closeIconClickHandler = () => {
    close();
  };

  const overflowClickHandler = () => {
    close();
  };

  const overflowClassNames = classNames({
    [styles.overflow]: true,
    [styles.isOpen]: isOpen,
  });

  return (
    <div className={overflowClassNames} onClick={overflowClickHandler}>
      <div className={styles.modal}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className={styles.toolbar}>
            <div className={styles.iconClose} onClick={closeIconClickHandler}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <div className={styles.iconExpand}>
              <FontAwesomeIcon icon={faExpand} />
            </div>

            <div className={styles.iconCompress}>
              <FontAwesomeIcon icon={faCompress} />
            </div>

            <div className={styles.iconCrop}>
              <FontAwesomeIcon icon={faCrop} />
            </div>
          </div>

          <div className={styles.content}>
            <img src="/assets/img/cinemagraph.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
