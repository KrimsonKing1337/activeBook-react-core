import { PropsWithChildren, useEffect } from 'react';

import classNames from 'classnames';

import { useDispatch, useSelector } from 'store';

import { mainSelectors } from 'store/main';
import { effectsSelectors } from 'store/effects/common';
import { segmentsActions } from 'store/segments';
import { backgroundEffectsActions } from 'store/effects/background';

import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { TableOfContents } from 'components/TableOfContents';
import { Bookmarks } from 'components/Bookmarks';
import { SideEffects } from 'components/SideEffects';
import { BackgroundEffects } from 'components/BackgroundEffects';

import { Narrative } from './components/Narrative';

import * as styles from './PageWrapper.scss';

export type PageWrapperProps = {
  withoutToolbar?: boolean;
  sbMode?: boolean;
};

export const PageWrapper = ({
  children,
  withoutToolbar,
  sbMode,
}: PropsWithChildren<PageWrapperProps>) => {
  const dispatch = useDispatch();

  const inverseColorIsActive = useSelector(effectsSelectors.inverseColorIsActive);
  const isLoading = useSelector(mainSelectors.shouldShowLoader);

  useEffect(() => {
    return () => {
      dispatch(segmentsActions.reset());
      dispatch(backgroundEffectsActions.setEffects({}));
    };
  }, []);

  const pageWrapperClassNames = classNames({
    [styles.pageWrapper]: true,
    [styles.inverseColorIsActive]: inverseColorIsActive,
  });

  const mainContendClassNames = classNames({
    [styles.mainContent]: true,
    [styles.isLoading]: isLoading,
  });

  return (
    <div id="page-wrapper" className={pageWrapperClassNames}>
      <div id="main-content-wrapper" className={mainContendClassNames}>
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
      </div>
    </div>
  );
};
