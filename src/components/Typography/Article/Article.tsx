import type { PropsWithChildren } from 'react';

import * as styles from './Article.scss';

export const Article = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.Article}>
      {children}
    </div>
  );
};
