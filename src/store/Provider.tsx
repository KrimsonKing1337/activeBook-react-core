import { Provider } from 'react-redux';

import { store, storeContext } from './store';

export const StoreProvider = ({ children } : { children: React.ReactNode }) => {
  return (
    <Provider context={storeContext} store={store}>
      {children}
    </Provider>
  );
}
