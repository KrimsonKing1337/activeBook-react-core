import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';

import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';
import { achievementsSelectors } from 'store/achievements';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';


import { Volume } from './components/Volume';
import { Themes } from './components/Themes';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/FlashLight';
import { AuthorComments } from './components/AuthorComments';
import { LineHeight } from './components/LineHeight';
import { Footer } from './components/Footer';

export const Menu = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const achievements = useSelector(achievementsSelectors.achievements);
  const bookmarksIsOpen = useSelector(bookmarksSelectors.isOpen);

  const allPagesSeen = achievements?.allPagesSeen;

  const isOpen = menuActiveState === 'menu';

  // закрываю менюшки, если пользователь сделал navigator.goBack
  useEffect(() => {
    if (!location.hash) {
      if (menuActiveState !== null) {
        dispatch(mainActions.setMenuActiveState(null));
      }

      if (bookmarksIsOpen) {
        dispatch(bookmarksActions.setIsOpen(false));
      }
    } else if (location.hash === '#menu') {
      if (menuActiveState === 'tableOfContents' || menuActiveState === 'achievementsProgress') {
        dispatch(mainActions.setMenuActiveState(null));
      }
    }
  }, [location, menuActiveState, bookmarksIsOpen]);

  return (
    <Overflow isOpen={isOpen}>
      <Header label="Настройки" />

      <Volume />

      <Themes />

      <Vibration />

      <Flashlight />

      {allPagesSeen && <AuthorComments />}

      <LineHeight />

      <Footer />
    </Overflow>
  );
};
