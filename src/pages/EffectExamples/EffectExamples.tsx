import React from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/reducer';

import { PageWrapper } from 'components/PageWrapper';

import { FishText } from './components/FishText';
import { Shadow as SideShadow } from './components/SideEffects/Shadow';
import { Text as SideText } from './components/SideEffects/Text';
import { Video as BackgroundVideo } from './components/BackgroundEffects/Video';
import { Img as BackgroundImg } from './components/BackgroundEffects/Img';
import { Dots as BackgroundDots } from './components/BackgroundEffects/Dots';
import { InverseColor } from './components/InverseColor';
import { Single as SingleSound } from './components/Sounds/Single';
import { Loop as LoopSound } from './components/Sounds/Loop';
import { LoadingScreen } from './components/LoadingScreen';
import { Img as ModalWithImg } from './components/Modals/Img';
import { Video as ModalWithVideo } from './components/Modals/Video';
import { Text as ModalWithText } from './components/Modals/Text';
import { MixedContent as ModalWithMixedContent } from './components/Modals/MixedContent';
import { SlideShow as ModalWithSlideShow } from './components/Modals/SlideShow';
import { SlideShowMixedContent as ModalWithSlideShowMixedContent } from './components/Modals/SlideShowMixedContent';
import { Dialog as ModalWithDialog } from './components/Modals/Dialog';
import { Spoiler as SpoilerRegular } from './components/Spoilers/Spoiler';
import { SlideShow as SpoilerWithSlideShow } from './components/Spoilers/SlideShow';
import { SlideShowMixedContent as SpoilerWithSlideShowMixedContent } from './components/Spoilers/SlideShowMixedContent';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/Flashlight';

export const EffectExamples = () => {
  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

  return (
    <PageWrapper title={'Эффекты'} subtitle={'Здесь можно посмотреть все возможные эффекты'}>
      <div className={'EffectsWrapper'}>
        <FishText />

        <SideShadow />
        <SideText />

        <BackgroundVideo />
        <BackgroundImg />
        <BackgroundDots />

        <InverseColor />

        <SingleSound />
        <LoopSound />

        <LoadingScreen />

        <ModalWithImg />
        <ModalWithVideo />
        <ModalWithText />
        <ModalWithMixedContent />
        <ModalWithSlideShow />
        <ModalWithSlideShowMixedContent />
        <ModalWithDialog />

        <SpoilerRegular />
        <SpoilerWithSlideShow />
        <SpoilerWithSlideShowMixedContent />

        {isVibrationAvailable && (
          <Vibration />
        )}

        {isFlashlightAvailable && (
          <Flashlight />
        )}
      </div>
    </PageWrapper>
  );
};
