import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import { useSelector } from 'store';
import { configSelectors } from 'store/config';
import { mainSelectors } from 'store/main';

import * as styles from './AuthorComment.scss';

export type ActionProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  onClick?: () => void;
};

export const AuthorComment = ({
  children,
  className = '',
  onClick = () => {},
  ...etc
}: PropsWithChildren<ActionProps>) => {
  const allPagesSeen = useSelector(mainSelectors.allPagesSeen);
  const authorCommentsIsOn = useSelector(configSelectors.authorComments);

  const clickHandler = () => {
    onClick();
  };

  const showComment = (allPagesSeen && authorCommentsIsOn) || isDemoMode;

  const authorCommentClassNames = classNames({
    [styles.authorComment]: true,
    [className]: !!className,
  });

  return showComment ? (
    <span className={authorCommentClassNames} onClick={clickHandler} {...etc}>
      {' '}
      {children}
    </span>
  ) :
    <>
      {children}
    </>;
};
