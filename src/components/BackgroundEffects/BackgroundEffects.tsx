import { type PropsWithChildren, Fragment, memo, useMemo } from 'react';

import { useSelector } from 'store';

import { backgroundEffectsSelectors } from 'store/effects/background';

import { Videos, Images, Shadow, Dots, Wrapper } from './components';

import * as styles from './BackgroundEffects.scss';

const Child = memo(({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
});

export const BackgroundEffects = memo(() => {
  const effects = useSelector(backgroundEffectsSelectors.effects);

  const BackgroundObjectsWrappers = useMemo(() => {
    return Object.keys(effects).map((keyCur) => {
      const effectCur = effects[keyCur];

      const {
        id,
        videos = [],
        images = [],
        Component = null,
        shadow = {},
        style = {},
      } = effectCur;

      const oneOfBgIsActive = !!videos.length || !!images.length || !!Component;

      return oneOfBgIsActive && (
        <Child key={id}>
          <div style={style} className={styles.backgroundObjectsWrapper}>
            <Shadow options={shadow} />

            {Component}

            <Videos videos={videos} />
            <Images images={images} />
          </div>
        </Child>
      );
    });
  }, [effects]);

  return (
    <Wrapper id="background-effects">
      <Dots />

      {BackgroundObjectsWrappers.map((cur) => cur)}
    </Wrapper>
  );
});
