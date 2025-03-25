import { PropsWithChildren, useEffect } from 'react';

import { HistoryRouter } from 'redux-first-history/rr6';

import type { RangeEffects, Config, TableOfContents } from '@types';

import { AppWrapper } from 'components/AppWrapper';

import { history, StoreProvider } from 'store';

import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { addKeyboardControl } from 'utils/control/keyboardControl';

import { Routes } from './Routes';

export type AppProps = {
  config: Config;
  tableOfContents: TableOfContents;
  rangeEffects: RangeEffects;
};

export const App = ({ children, config, tableOfContents, rangeEffects }: PropsWithChildren<AppProps>) => {
  useEffect(() => {
    // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
    addKeyboardControl();
    hideAddressBarInMobileDevices();
  }, []);

  return (
    <StoreProvider>
      <HistoryRouter history={history}>
        <AppWrapper config={config} tableOfContents={tableOfContents} rangeEffects={rangeEffects}>
          <Routes>
            {children}
          </Routes>
        </AppWrapper>
      </HistoryRouter>
    </StoreProvider>
  );
};
