"use strict";

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Dashboard = React.createClass({
  render: () => {
    return (
      <div>
        <div className="header">Dashboard</div>

        <div className="component-background flex flex-center">
          <div className="font-48 about-page">Dashboard</div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
