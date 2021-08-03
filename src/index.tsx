import React from 'react';
import { render } from 'react-dom';

import { App } from 'components/App';

import { getIsMobile } from 'utils/getIsMobile';

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

const isMobile = getIsMobile();

if (isMobile) {
  document.addEventListener('deviceready', initApp, false);
} else {
  initApp();
}
