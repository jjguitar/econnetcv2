import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import AppContext from '../frontend/context/AppContext';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import axios from 'axios'
import { useExps } from '../frontend/hooks/useExps';

dotenv.config();

const { ENV, PORT, API_URL } = process.env;
const app = express();

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

const setResponse = (html) => {
  return(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="assets/app.css" type="text/css"/>
      <title>React shop</title>
    </head>

    <body>
      <div id="app">${html}</div>
      <div id="modal"></div>
    </body>
    <script src="assets/app.js" type="text/javascript"></script>
    </html>

    `);
}

const renderApp = async (req, res) => {
  let initialState = {
    searchedExps: [],
    cart: []
  };
  let meetings
  try {
    meetings = await axios({
      url: `${API_URL}/api/v1/meeting`,
      method: 'get',
    });
    meetings = meetings.data;
    console.log('meetings')
    console.log(meetings)
    // console.log(initialState)
  } catch (err) {
  }
  // const store = createStore(initialState);
  console.log('meetings 2')
  console.log(meetings)
  initialState = {...initialState, ...meetings}
  const html = renderToString(
    
    <AppContext.Provider value={initialState}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes())}
      </StaticRouter>
    </AppContext.Provider>
  );

  res.send(setResponse(html));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server running on port '+ PORT);
});