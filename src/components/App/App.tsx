import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { ReduxExample } from 'pages/ReduxExample';

export const App = () => (
  <Provider store={store}>
    <ReduxExample />
  </Provider>
);
