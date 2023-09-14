import { PropsWithChildren } from 'react';

import { useSelector } from 'store';
import { achievementsSelectors } from 'store/achievements';
import { configSelectors } from 'store/config';
import { mainSelectors } from 'store/main';
import { seenAuthorComments } from 'utils/localStorage/seenAuthorComments';
import { play } from 'utils/effects/achievements';
import { Flags as AchievementsFlags } from 'utils/effects/achievements/utils';

import styles from './AuthorComment.scss';

export type ActionProps = {
  [name: string]: any;
  onClick?: () => void;
};

export const AuthorComment = ({
  onClick = () => {},
  children,
  ...props
}: PropsWithChildren<ActionProps>) => {
  const achievements = useSelector(achievementsSelectors.achievements);
  const authorCommentsIsOn = useSelector(configSelectors.authorComments);
  const authorCommentsLength = useSelector(mainSelectors.authorComments);

  const clickHandler = () => {
    seenAuthorComments.add();

    const seenAuthorCommentsFromLocalStorage = seenAuthorComments.get();

    if (authorCommentsLength === seenAuthorCommentsFromLocalStorage) {
      play({
        id: AchievementsFlags.allAuthorCommentsSeen,
        text: 'Все комментарии автора прочитаны!',
        type: 'gold',
      });
    }

    onClick();
  };

  const allPagesSeen = achievements?.allPagesSeen;
  const showComment = (allPagesSeen && authorCommentsIsOn) || isDemoMode;

  return showComment ? (
    <div className={styles.authorComment} onClick={clickHandler} {...props}>
      {' '}
      {children}
    </div>
  ) :
    <>
      {children}
    </>;
};
