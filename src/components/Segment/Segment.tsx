import { type PropsWithChildren, useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';

import { nanoid } from 'nanoid';

import { mainSelectors } from 'store/main';
import { segmentsActions, segmentsSelectors } from 'store/segments';

import { useDispatch, useSelector } from 'store';

import * as styles from './Segment.scss';

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

  const wasActiveRef = useRef(false);

  const [id, setId] = useState('');

  const isLoading = useSelector(mainSelectors.isPending);

  const segments = useSelector(segmentsSelectors.segments);
  const activeId = useSelector(segmentsSelectors.activeId);

  const segmentsLength = Object.keys(segments).length;

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const isNowActive = activeId === id;

    if (isNowActive && !wasActiveRef.current) {
      wasActiveRef.current = true;

      onEnter();
    }

    if (!isNowActive && wasActiveRef.current) {
      wasActiveRef.current = false;

      onExit();
    }
  }, [isLoading, id, activeId, onEnter, onExit]);

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
    [styles.Segment]: true,
    [styles.isActive]: isActive,
    [styles.withButton]: withButton,
  });

  return (
    <div className={segmentClassNames} onClick={segmentClickHandler}>
      {children}

      {withButton && (
        <div className={styles.SegmentButton} onClick={buttonClickHandler}>
          <div className={styles.SegmentButtonIconWrapper}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      )}
    </div>
  );
};
