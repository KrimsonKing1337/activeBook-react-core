import { PropsWithChildren } from 'react';

import classNames from 'classnames';
import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { AchievementsProgress } from 'components/AchievementsProgress';
import { TableOfContents } from 'components/TableOfContents';
import { Bookmarks } from 'components/Bookmarks';
import { SideEffects } from 'components/SideEffects';
import { BackgroundEffects } from 'components/BackgroundEffects';

import { mainSelectors } from 'store/main';
import { effectsSelectors } from 'store/effects/common';
import { useSelector } from 'store';

import { Narrative } from './components/Narrative';
import styles from './PageWrapper.scss';

export type PageWrapperProps = {
  withoutToolbar?: boolean;
  sbMode?: boolean;
};

export const PageWrapper = ({ children, withoutToolbar, sbMode }: PropsWithChildren<PageWrapperProps>) => {
  const inverseColorIsActive = useSelector(effectsSelectors.inverseColorIsActive);
  const isLoading = useSelector(mainSelectors.isLoading);

  const pageWrapperClassNames = classNames({
    [styles.pageWrapper]: true,
    [styles.inverseColorIsActive]: inverseColorIsActive,
  });

  const mainContendClassNames = classNames({
    [styles.mainContent]: true,
    [styles.isLoading]: isLoading,
  });

  return (
    <div className={pageWrapperClassNames}>
      <div className={mainContendClassNames}>
        <Narrative>
          {children}
        </Narrative>

        <SideEffects />

        <BackgroundEffects />

        {!withoutToolbar && (
          <Toolbar sbMode={sbMode} />
        )}

        <Menu />

        <TableOfContents />

        <Bookmarks />

        <AchievementsProgress />
      </div>
    </div>
  );
};
