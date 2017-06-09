"use strict";

const React = require('react');

const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;

const App = require('./components/app');
const Dashboard = require('./components/dashboard/dashboard');
const Schedule = require('./components/schedule/schedule');
const TimeCard = require('./components/timecard/timecard');
const WebClock = require('./components/webclock/webclock');

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard} />
    <Route name="dashboard" handler={Dashboard} />
    <Route name="schedule" handler={Schedule} />
    <Route name="timecard" handler={TimeCard} />
    <Route name="webclock" handler={WebClock} />
  </Route>
);

module.exports = routes;
