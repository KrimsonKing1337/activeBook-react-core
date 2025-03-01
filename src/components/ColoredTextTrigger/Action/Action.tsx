import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Action.scss';

export type ActionProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  fullWidth?: boolean;
  withSpaces?: boolean;
  onClick?: () => void;
};

export const Action = ({
  children,
  className = '',
  fullWidth = false,
  withSpaces = true,
  onClick = () => {
  },
  ...etc
}: PropsWithChildren<ActionProps>) => {
  const actionClassNames = classNames({
    [styles.action]: true,
    [styles.isFullWidth]: fullWidth,
    [className]: !!className,
  });

  return (
    <span className={actionClassNames} onClick={onClick} {...etc}>
      { withSpaces && ' ' }
      {children}
      { withSpaces && ' ' }
    </span>
  );
};
