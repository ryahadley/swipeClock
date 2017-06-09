"use strict";

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const RouteHandler = require('react-router').RouteHandler;
const Navbar = require('./common/navbar');


const App = React.createClass({
  render: () => {
    return (
        <div className="flex">
          <Navbar/>
          <div>
            <RouteHandler/>
          </div>
        </div>
    );
  }
});

module.exports = App;
