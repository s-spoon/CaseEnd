import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import testData from './actions/testData.json';

const initialState = {
  products: testData,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
