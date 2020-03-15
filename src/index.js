import 'react-native-gesture-handler';

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import App from './App';

function index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}

export default index;
