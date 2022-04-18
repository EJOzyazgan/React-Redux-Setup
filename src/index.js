import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <FunctionComponent />
    <ClassComponent />
  </Provider>,
);
