import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history, store } from 'store';

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
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={'/'}>
            <AppWrapper />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
