import { PropsWithChildren } from 'react';

import * as styles from './ExternalLink.scss';

export type ExternalLinkProps = {
  href: string;
}

export const ExternalLink = ({ href, children }: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.Link}
    >
      {' '}
      {children}
    </a>
  );
};
