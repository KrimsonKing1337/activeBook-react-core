import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history, store } from 'store';

import { AppWrapper } from 'components/AppWrapper';

import { addTouchSupportForCssHover } from 'utils/touch/addTouchSupportForCssHover';
import { hideAddressBarInMobileDevices } from 'utils/hideAddressBarInMobileDevices';

type AppProps = {
  children: React.ReactNode;
};

export const App = ({ children }: AppProps) => {
  useEffect(() => {
    addTouchSupportForCssHover();
    hideAddressBarInMobileDevices();
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={'/'}>
            <AppWrapper>
              {children}
            </AppWrapper>
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
