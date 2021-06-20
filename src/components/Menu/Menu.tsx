import React from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';
import { mainSelectors } from 'store/main/reducer';
// import { effectsSelectors } from 'store/effects/reducer';

import { Header } from 'components/Header';

import { Volume } from './components/Volume';
import { Themes } from './components/Themes';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/FlashLight';
import { InverseColor } from './components/InverseColor';
import { LineHeight } from './components/LineHeight';
import { Footer } from './components/Footer';

import styles from './Menu.scss';

export const Menu = () => {
  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  // const backgroundVideoIsActive = useSelector(effectsSelectors.backgroundVideoIsActive);
  const menuIsOpen = menuActiveState === 'menu';

  const menuClassNames = classNames({
    [styles.menu]: true,
    [styles.isOpen]: menuIsOpen,
    // [styles.isBackgroundObjectActive]: backgroundVideoIsActive,
  });

  return (
    <div className={menuClassNames}>
      <Header label={'Настройки'} />

      <Volume />

      <Themes />

      <Vibration />

      <Flashlight />

      <InverseColor />

      <LineHeight />

      <Footer />
    </div>
  );
};
