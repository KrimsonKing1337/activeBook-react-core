import type { HTMLAttributes, PropsWithChildren } from 'react';

import * as styles from './Article.scss';

export type ArticleProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Article = ({ children, ...etc }: ArticleProps) => {
  return (
    <div className={styles.Article} {...etc}>
      {children}
    </div>
  );
};
