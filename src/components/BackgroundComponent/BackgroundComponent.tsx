import type { PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './BackgroundComponent.scss';

type BackgroundComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  withShadow?: boolean;
  shadowColor?: string;
}

export const BackgroundComponent = ({
  children,
  className,
  withShadow = true,
  shadowColor,
  ...etc
}: PropsWithChildren<BackgroundComponentProps>) => {
  const wrapperClassName = classnames([styles.wrapper, className]);

  return (
    <div className={wrapperClassName} {...etc} style={{ backgroundColor: shadowColor }}>
      {children && withShadow && (
        <div className={styles.shadow} />
      )}

      {children}
    </div>
  );
};
