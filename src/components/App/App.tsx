import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { Page } from 'components/Page';

import { addTouchSupportForCssHover } from 'utils/touch/addTouchSupportForCssHover';

export const App = () => {
  useEffect(() => {
    addTouchSupportForCssHover();
  }, []);

  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};
