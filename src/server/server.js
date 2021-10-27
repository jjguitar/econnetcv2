import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import AppContext from '../frontend/context/AppContext';
import axios from 'axios';

import reducer from '../frontend/reducers';

dotenv.config();

const { ENV, PORT, API_URL } = process.env;
const app = express();
app.use(express.json())

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  // const serverConfig = { port: PORT, hot: true };
  const serverConfig = { serverSideRender: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

}

const setResponse = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>React shop</title>
    </head>

    <body>
      <div id="app">${html}</div>
      <script id="preloadedState">
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <div id="modal"></div>
    </body>
    <script src="assets/app.js" type="text/javascript"></script>

    </html>
  `);
};

const renderApp = async(req, res) => {
  let initialState = {
    meetings: [],
    cart: [],
    openModal: false,
    findData: {},
    defaultValue: '',
  };

  // console.log(API_URL)
  let meetings;
  try {
    meetings = await axios({
      url: `${API_URL}/api/v1/meeting`,
      method: 'get',
    });
    meetings = meetings.data;
    initialState ={
      ...initialState,
      meetings: meetings,
      cart: []
    }
    console.log(initialState)
  } catch (err) {
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  // console.log(preloadedState)
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState));
};

app.post("/meetings", async function (req, res, next) {
  const { body } = req
  console.log(body)
  let reqVolunteer = false
  if(body.isVolunteerRequired === '1') {
    reqVolunteer = !reqVolunteer
  }

  try {
    const meetingData = await axios({
      url: `${API_URL}/api/v1/meeting`,
      method: "post",
      data: {
        'name': body.tittle,
        'date': body.date,
        'description': body.description,
        'reqVolunteer': reqVolunteer
      }
    });
    res.status(201).json({
      // console.log(req.body)
      // email: req.body.email,
      // id: meetingData.data.id
    });
  } catch (error) {
    next(error);
  }
  console.log(res.body)
});

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server running on port '+ PORT);
});