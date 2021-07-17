import React from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';
import { effectsSelectors } from 'store/effects/reducer';

import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { TableOfContents } from 'components/TableOfContents';
import { Bookmarks } from 'components/Bookmarks';
import { SideEffects } from 'components/SideEffects';
import { BackgroundEffects } from 'components/BackgroundEffects';

import { Narrative } from './components/Narrative';

import styles from './PageWrapper.scss';

export type PageWrapperProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const PageWrapper = ({ title, subtitle, children }: PageWrapperProps) => {
  const inverseColorIsActive = useSelector(effectsSelectors.inverseColorIsActive);

  const pageWrapperClassNames = classNames({
    [styles.pageWrapper]: true,
    [styles.inverseColorIsActive]: inverseColorIsActive,
  });

  return (
    <div className={pageWrapperClassNames}>
      <div className={styles.mainContent}>
        <Narrative title={title} subtitle={subtitle}>
          {children}
        </Narrative>

        <SideEffects />

        <BackgroundEffects />

        <Toolbar />

        <Menu />

        <TableOfContents />

        <Bookmarks />
      </div>
    </div>
  );
};
