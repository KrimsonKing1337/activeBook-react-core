import type { PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './BackgroundComponent.scss';

type BackgroundComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  withShadow?: boolean;
}

export const BackgroundComponent = (props: PropsWithChildren<BackgroundComponentProps>) => {
  const { children, className, withShadow = true } = props;

  const wrapperClassName = classnames([styles.wrapper, className]);

  return (
    <div className={wrapperClassName} {...props}>
      {withShadow && (
        <div className={styles.shadow} />
      )}

      {children}
    </div>
  );
};
