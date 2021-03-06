import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import reducer from './reducers';
import { createBrowserHistory } from 'history';
import App from '@routes/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
const history = createBrowserHistory();

delete window.__PRELOADED_STATE__;
document.getElementById("preloadedState").remove()

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate

renderMethod(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}