import React from 'react';
import { render } from 'react-dom';

import { App } from 'components/App';

import 'modern-css-reset/dist/reset.min.css';
import 'styles/reset.scss';
import 'styles/fonts.scss';

function initApp() {
  render(<App />, document.getElementById('root'));
}

// prevent refreshing whole page, see: https://github.com/gaearon/react-hot-loader/issues/422
if (module.hot) {
  module.hot.accept();
}

if ((window as any).cordova) {
  document.addEventListener('deviceready', () => {
    initApp();
  }, false);
} else {
  initApp();
}
