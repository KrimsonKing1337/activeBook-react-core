import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Action.scss';

export type ActionProps = React.HTMLAttributes<HTMLDivElement> & {
  fullWidth?: boolean;
  withSpaces?: boolean;
  onClick?: () => void;
};

export const Action = ({
  children,
  fullWidth = false,
  withSpaces = true,
  onClick = () => {
  },
  ...props
}: PropsWithChildren<ActionProps>) => {
  const actionClassNames = classNames({
    [styles.action]: true,
    [styles.isFullWidth]: fullWidth,
  });

  return (
    <div className={actionClassNames} onClick={onClick} {...props}>
      { withSpaces && ' ' }
      {children}
      { withSpaces && ' ' }
    </div>
  );
};
