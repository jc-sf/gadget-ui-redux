import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IconSettings } from '@salesforce/design-system-react';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <IconSettings iconPath="/assets/icons">
    <Provider store={store}>
      <App />
    </Provider>
  </IconSettings>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
