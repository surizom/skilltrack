import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <React.StrictMode>
    <App history={history} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
