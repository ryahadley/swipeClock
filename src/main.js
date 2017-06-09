"use strict";

const React = require('react');
const Router = require('react-router');
const routes = require('./routes');

Router.run(routes, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});
