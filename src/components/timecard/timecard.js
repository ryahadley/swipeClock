"use strict";

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const TimeStore = require('../../stores/timeStore');
const TimeCardList = require('./timeCardList');

const TimeCard = React.createClass({
  getInitialState: () => {
    return {
      timeCards: TimeStore.getAllTimeCards()
    };
  },

  render: () => {
    return (
      <div className="">
        <h1>Time Card</h1>

        <TimeCardList timeCards={this.state.timeCards} />
      </div>
    );
  }
});

module.exports = TimeCard;
