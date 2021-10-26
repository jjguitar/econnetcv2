import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import reducer from './reducers';
import { createBrowserHistory } from 'history';
import App from '@routes/App';
import AppContext from './context/AppContext';
import { useExps } from './hooks/useExps';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
const history = createBrowserHistory();
console.log(store.getState())
const initialState = useExps(store.getState());

delete window.__PRELOADED_STATE__;

ReactDOM.render(
  <AppContext.Provider value={initialState}>
    <Router history={history}>
      <App />
    </Router>
  </AppContext.Provider>
, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}