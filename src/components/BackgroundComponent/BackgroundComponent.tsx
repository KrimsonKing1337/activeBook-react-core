import type { PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './BackgroundComponent.scss';

type BackgroundComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
}

export const BackgroundComponent = ({
  children,
  className,
  ...etc
}: PropsWithChildren<BackgroundComponentProps>) => {
  const wrapperClassName = classnames([styles.wrapper, className]);

  return (
    <div className={wrapperClassName} {...etc}>
      {children}
    </div>
  );
};
