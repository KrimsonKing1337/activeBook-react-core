import React from 'react';

import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { TableOfContents } from 'components/TableOfContents';
import { SideEffects } from 'components/SideEffects';

import { Narrative } from './components/Narrative';

import styles from './PageWrapper.scss';

export type PageWrapperProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const PageWrapper = ({ title, subtitle, children }: PageWrapperProps) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContent}>
        <Narrative title={title} subtitle={subtitle}>
          {children}
        </Narrative>

        <SideEffects />

        <Toolbar />

        <Menu />

        <TableOfContents />
      </div>
    </div>
  );
};
