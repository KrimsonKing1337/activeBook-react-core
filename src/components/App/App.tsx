import { PropsWithChildren, useEffect } from 'react';

import { HistoryRouter } from 'redux-first-history/rr6';

import { history, StoreProvider } from 'store';
import { Counter } from 'components';
import { AppWrapper } from 'components/AppWrapper';
import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { addKeyboardControl } from 'utils/control/keyboardControl';

import { EffectsJson } from '@types';

import { Routes } from './Routes';

export type AppProps = {
  effectsJson: EffectsJson;
};

export const App = ({ effectsJson, children }: PropsWithChildren<AppProps>) => {
  useEffect(() => {
    // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
    addKeyboardControl();
    hideAddressBarInMobileDevices();
  }, []);

  return (
    <StoreProvider>
      <HistoryRouter history={history}>
        <AppWrapper effectsJson={effectsJson}>
          <Counter />

          <Routes>
            {children}
          </Routes>
        </AppWrapper>
      </HistoryRouter>
    </StoreProvider>
  );
};
