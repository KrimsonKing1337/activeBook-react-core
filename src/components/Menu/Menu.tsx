import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';

import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';

import {
  Volume,
  Themes,
  Vibration,
  Flashlight,
  AuthorComments,
  LineHeight,
  Footer,
  WelcomeTour,
} from './components';

export const Menu = () => {
  const dispatch = useDispatch();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const allPagesSeen = useSelector(mainSelectors.allPagesSeen);

  const isOpen = menuActiveState === 'menu';

  // закрываю менюшки, если пользователь сделал navigator.goBack
  useEffect(() => {
    const listener = () => {
      dispatch(mainActions.setMenuActiveState(null));

      window.history.pushState(null, '', window.location.href);
    };

    window.addEventListener('popstate', listener);

    return () => {
      window.removeEventListener('popstate', listener);
    };
  }, []);

  return (
    <Overflow isOpen={isOpen}>
      <Header label="Настройки" />
      <Volume />
      <Themes />
      <WelcomeTour />
      <Vibration />
      <Flashlight />

      {allPagesSeen && (
        <AuthorComments />
      )}

      <LineHeight />
      <Footer />
    </Overflow>
  );
};
