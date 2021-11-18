import React from 'react';
import Router from './router';
import store from './store';
import { Provider } from 'react-redux';
import {
  Home,
} from './components/templates'

function App() {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
};

export default App;