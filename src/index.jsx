import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './App';
import DevTools from './utils/Devtools';
import './assets/stylesheets/main.scss';
import moment from 'moment';

moment.locale('es');

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <DevTools />
        <App />
      </div>
    </BrowserRouter>
  </Provider>
);