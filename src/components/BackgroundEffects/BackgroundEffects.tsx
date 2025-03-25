import { type PropsWithChildren, Fragment, memo, useMemo, useState, useEffect } from 'react';

import { useSelector } from 'store';

import type { BackgroundEffects as BackgroundEffectsType } from 'store/effects/background/@types';
import { backgroundEffectsSelectors } from 'store/effects/background';

import { Videos, Images, Shadow, Dots, Wrapper } from './components';

import styles from './BackgroundEffects.scss';

const Child = memo(({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
});

export const BackgroundEffects = memo(() => {
  const [effectsState, setEffectsState] = useState<BackgroundEffectsType>({});

  const effects = useSelector(backgroundEffectsSelectors.effects);

  /*
   этот костыль (useEffect под этим комментарием) нужен для того, чтобы сымитировать nextTick();
   проблема была в том, что в хуке useBackground удаление эффекта происходило после
   рендера текущего компонента (BackgroundEffects).

   из-за чего подтягивались неактуальные (старые) effects и происходил их рендер,
   что вызывало в компоненте DotLottieReactWrapper задвоение исполнения useEffect,
   т.к. он дважды рендерился - один раз когда и должен был. а второй - при переходе на новую страницу,
   чтобы затем при изменении effects уничтожиться.

   и я таким образом как бы подвинул в очереди обновление effects для текущего компонента (BackgroundEffects).
   и теперь компонент получает актуальный список, как и должно.

   чтобы увидеть баг - достаточно в DotLottieReactWrapper в useEffect выводить что-нибудь в консоль,
   затем использовать useBackground и передать туда в качестве Component: <DotLottieReactWrapper />.
   далее зайти на страницу и пройти на следующую - в консоли выведется дважды то, что происходит в useEffect.

   самый быстрый способ увидеть - в первой детской сказке сделать переход с первой страницы на вторую,
   убрав useEffect ниже.
  */

  useEffect(() => {
    setEffectsState(effects);
  }, [effects]);

  const BackgroundObjectsWrappers = useMemo(() => {
    return Object.keys(effectsState).map((keyCur) => {
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
  }, [effectsState]);

  return (
    <Wrapper id="background-effects">
      <Dots />

      {BackgroundObjectsWrappers.map((cur) => cur)}
    </Wrapper>
  );
});
