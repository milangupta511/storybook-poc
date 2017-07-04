import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './configureStore';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';
import './index.css';
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);