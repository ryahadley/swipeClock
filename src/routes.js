"use strict";

const React = require('react');

const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;

const App = require('./components/app');

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={App} />
  </Route>
);

module.exports = routes;
