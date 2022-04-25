import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FunctionComponent />
      <ClassComponent />
    </PersistGate>
  </Provider>,
);
