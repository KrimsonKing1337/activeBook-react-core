import { Fragment, memo, useMemo } from 'react';

import { nanoid } from 'nanoid';

import { useSelector } from 'store';

import { backgroundEffectsSelectors } from 'store/effects/background';

import { Videos, Images, Shadow, Dots } from './components';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = memo(() => {
  const effects = useSelector(backgroundEffectsSelectors.effects);

  // todo: при добавлении / удалении эффектов - будет рерндер их всех. в текущей реализации это исправить невозможно
  const BackgroundObjectsWrappers = useMemo(() => {
    return Object.keys(effects).map((keyCur) => {
      const effectCur = effects[keyCur];

      const {
        videos = [],
        images = [],
        Component = null,
        shadow = {},
        style = {},
      } = effectCur;

      const oneOfBgIsActive = !!videos.length || !!images.length || !!Component;

      const uuid = nanoid();

      return (
        <Fragment key={uuid}>
          {oneOfBgIsActive && (
            <div style={style} className={styles.backgroundObjectsWrapper}>
              <Shadow options={shadow} />

              {Component}

              <Videos videos={videos} />
              <Images images={images} />
            </div>
          )}
        </Fragment>
      );
    });
  }, [effects]);

  return (
    <div className={styles.backgroundEffectsWrapper}>
      <Dots />

      {BackgroundObjectsWrappers.map((cur) => cur)}
    </div>
  );
});
