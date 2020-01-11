import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import allReducer from './reducers/index';
import { Provider } from 'react-redux';

//STORE -> globalized state
const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//ACTION i.e. increment, describes what you want to do
//type is the name of the action e.g. type: INCREMENT
const increment = () => {
  return {
    type: INCREMENT
  }
}

//REDUCER describes how actions transform state to the next state

//DISPATCH excecutes action


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
