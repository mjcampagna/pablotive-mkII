import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../rootReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import Pangolin from './Pangolin';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(),
);

export default function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Pangolin />
      </Router>
    </Provider>
  );
};
