import React from 'react';

import classNames from 'classnames';

import { Volume } from './components/Volume';
import { Themes } from './components/Themes';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/FlashLight';
import { Invert } from './components/Invert';
import { LineHeight } from './components/LineHeight';
import { Footer } from './components/Footer';

import styles from './Menu.scss';

const menuClassNames = classNames([
  styles.menu,
  styles.isOpen
]);

export const Menu = () => {
  return (
    <div className={menuClassNames}>
      <div className={styles.title}>
        Настройки
      </div>

      <Volume />

      <Themes />

      <Vibration />

      <Flashlight />

      <Invert />

      <LineHeight />

      <Footer />
    </div>
  );
};
