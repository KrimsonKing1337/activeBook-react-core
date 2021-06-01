import React from 'react';

import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { TableOfContents } from 'components/TableOfContents';

import { Page1 } from 'pages/pagesOfBook/Page1';

import styles from './Page.scss';

export const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <div className={styles.narrative}>
          <div className={styles.title}>
            Глава 1.
          </div>

          <div className={styles.subtitle}>
            Важный день.
          </div>

          <div className={styles.text}>
            <Page1 />
            <Page1 />
            <Page1 />
            <Page1 />
          </div>
        </div>

        <Toolbar />

        <Menu />

        <TableOfContents />
      </div>
    </div>
  );
};
