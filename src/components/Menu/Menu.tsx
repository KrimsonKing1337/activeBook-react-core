import React from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/reducer';

import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';

import { Volume } from './components/Volume';
import { Themes } from './components/Themes';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/FlashLight';
import { InverseColor } from './components/InverseColor';
import { LineHeight } from './components/LineHeight';
import { Footer } from './components/Footer';

export const Menu = () => {
  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  // const backgroundVideoIsActive = useSelector(effectsSelectors.backgroundVideoIsActive);
  const isOpen = menuActiveState === 'menu';

  return (
    <Overflow isOpen={isOpen}>
      <Header label={'Настройки'} />

      <Volume />

      <Themes />

      <Vibration />

      <Flashlight />

      <InverseColor />

      <LineHeight />

      <Footer />
    </Overflow>
  );
};
