import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';

import { Overflow } from 'components/Overflow';
import { MenuHeader } from 'components/MenuHeader';

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
      <MenuHeader label="Настройки" />
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
