import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Action.scss';

export type ActionProps = {
  onClick?: () => void;
  fullWidth?: boolean;
  [name: string]: any;
};

export const Action = ({
  children,
  fullWidth = false,
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
      {' '}
      {children}
    </div>
  );
};
