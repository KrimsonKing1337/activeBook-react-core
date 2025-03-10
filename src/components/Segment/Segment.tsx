import { type PropsWithChildren, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';

import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'store';

import { segmentsActions, segmentsSelectors } from 'store/segments';

import styles from './Segment.scss';

export type SegmentProps = PropsWithChildren & {
  isActive?: boolean;
  id?: string;
  onEnter?: () => void;
  onExit?: () => void;
};

export const Segment = ({
  children,
  id: defaultId,
  isActive: isActiveDefault = false,
  onEnter = () => {},
  onExit = () => {},
}: SegmentProps) => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  const segments = useSelector(segmentsSelectors.segments);
  const activeId = useSelector(segmentsSelectors.activeId);
  const lastActiveId = useSelector(segmentsSelectors.lastActiveId);

  const segmentsLength = Object.keys(segments).length;

  useEffect(() => {
    if (activeId === id) {
      onEnter();
    }

    if (lastActiveId && lastActiveId === id) {
      onExit();
    }
  }, [id, activeId, lastActiveId]);

  useEffect(() => {
    const uuid = defaultId ? defaultId : nanoid();

    setId(uuid);

    dispatch(segmentsActions.incrementSegmentsCount());
  }, []);

  useEffect(() => {
    if (!id || segments[id] !== undefined) {
      return;
    }

    dispatch(segmentsActions.setSegment({
      id,
      isActive: isActiveDefault,
    }));
  }, [id, segmentsLength]);

  useEffect(() => {
    return () => {
      dispatch(segmentsActions.reset());
    };
  }, []);

  if (segmentsLength === 0) {
    return null;
  }

  const segmentClickHandler = () => {
    if (activeId === id) {
      return;
    }

    dispatch(segmentsActions.setSegment({
      id,
      isActive: true,
    }));
  };

  const buttonClickHandler = () => {
    const nextId = id + 1;

    dispatch(segmentsActions.setSegment({
      id: nextId,
      isActive: true,
    }));
  };

  const isActive = segments[id];
  // отображаем кнопку, если сегмент не последний и активный
  const withButton = false;

  const segmentClassNames = classNames({
    [styles.segment]: true,
    [styles.isActive]: isActive,
    [styles.withButton]: withButton,
  });

  return (
    <div className={segmentClassNames} onClick={segmentClickHandler}>
      {children}

      {withButton && (
        <div className={styles.segmentButton} onClick={buttonClickHandler}>
          <div className={styles.segmentButtonIconWrapper}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      )}
    </div>
  );
};
