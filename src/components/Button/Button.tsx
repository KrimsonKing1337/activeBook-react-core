import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Button.scss';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  type?: 'primary' | 'secondary' | 'success' | 'error';
  disabled?: boolean;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  type = 'primary',
  disabled = false,
  onClick = () => {},
  ...etc
}: PropsWithChildren<ButtonProps>) => {
  const buttonClassNames = classNames({
    [styles.Button]: true,
    [styles[type]]: true,
    [styles.disabled]: disabled,
  });

  return (
    <button
      type="button"
      className={buttonClassNames}
      onClick={onClick}
      {...etc}
    >
      {children}
    </button>
  );
};
