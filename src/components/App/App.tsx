import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { AppWrapper } from 'components/AppWrapper';

import { addTouchSupportForCssHover } from 'utils/touch/addTouchSupportForCssHover';

export const App = () => {
  useEffect(() => {
    addTouchSupportForCssHover();
  }, []);

  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};
