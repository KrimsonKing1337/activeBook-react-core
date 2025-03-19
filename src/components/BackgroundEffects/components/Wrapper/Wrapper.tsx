import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Wrapper.scss';

export type WrapperProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren & {
  className?: string;
};

export const Wrapper = ({ children, className = '', ...etc }: WrapperProps) => {
  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [className]: !!className,
  });

  return (
    <div className={wrapperClassNames} {...etc}>
      {children}
    </div>
  );
};
