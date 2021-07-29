import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { store } from 'store';

import { AppWrapper } from 'components/AppWrapper';

import { addTouchSupportForCssHover } from 'utils/touch/addTouchSupportForCssHover';
import { hideAddressBarInMobileDevices } from 'utils/hideAddressBarInMobileDevices';

export const App = () => {
  useEffect(() => {
    addTouchSupportForCssHover();
    hideAddressBarInMobileDevices();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/'}>
            <AppWrapper />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
