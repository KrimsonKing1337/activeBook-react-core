import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setMenuActiveState } from 'store/main/actions';
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

const IS_OPEN_LOCATION = '/menu';
const IS_CLOSE_LOCATION = '/';

export const Menu = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  // const backgroundVideoIsActive = useSelector(effectsSelectors.backgroundVideoIsActive);

  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);

  const isOpen = menuActiveState === 'menu';

  useEffect(() => {
    if (!prevLocationPath.includes(IS_OPEN_LOCATION) && !pathname.includes(IS_OPEN_LOCATION)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE_LOCATION) {
        dispatch(setMenuActiveState(null));
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

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
