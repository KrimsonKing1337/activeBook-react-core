import { useEffect, useState } from 'react';

import {
  type DotLottie as DotLottieOriginal,
  type DotLottieReactProps as DotLottieReactPropsOriginal,
  DotLottieReact as DotLottieReactOriginal,
} from '@lottiefiles/dotlottie-react';

import type { EventType } from '@lottiefiles/dotlottie-web';

import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';

export type DotLottie = DotLottieOriginal;

export type DotLottieReactProps = DotLottieReactPropsOriginal & {
  refCallback?: (dotLottieItem: DotLottie) => void;
  eventListeners?: {
    event: EventType;
    handler: () => void;
  }[];
};

export const DotLottieReact = ({ refCallback, eventListeners = [], ...etc }: DotLottieReactProps) => {
  const dispatch = useDispatch();

  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  useEffect(() => {
    if (!dotLottie) {
      return;
    }

    const readyHandler = () => {
      dispatch(effectsActions.setDotLottieReady());
    };

    dotLottie.addEventListener('load', readyHandler);

    eventListeners.forEach((eventListenerCur) => {
      const { event, handler } = eventListenerCur;

      dotLottie.addEventListener(event, handler);
    });

    return () => {
      if (!dotLottie) {
        return;
      }

      dotLottie.removeEventListener('load', readyHandler);

      eventListeners.forEach((eventListenerCur) => {
        const { event, handler } = eventListenerCur;

        dotLottie.removeEventListener(event, handler);
      });
    };
  }, [dotLottie]);

  const dotLottieRefCallback = (dotLottieItem: DotLottie) => {
    setDotLottie(dotLottieItem);

    if (refCallback) {
      refCallback(dotLottieItem);
    }
  };

  return (
    <DotLottieReactOriginal dotLottieRefCallback={dotLottieRefCallback} {...etc} />
  );
};
