import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { Page } from 'components/Page';

export const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);
