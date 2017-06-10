"use strict";

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Navbar = React.createClass({
  render: () => {
    return (
        <div className="background">
          <Link to="dashboard" activeClassName="active" className="link">
            <div className="flex navbar-link dashboard">
              <img className="noIcon" src="./images/dashboardHover.png" /><img className="icon" src="./images/dashboard.png" /><div>Dashboard</div>
            </div>
          </Link>
          <Link to="webclock" activeClassName="active" className="link">
            <div className="flex navbar-link clock">
              <img className="noIcon" src="./images/clockHover.png" /><img className="icon" src="./images/clock.png" /><div>WebClock</div>
            </div>
          </Link>
          <Link to="timecard" activeClassName="active" className="link">
            <div className="flex navbar-link time">
              <img className="noIcon" src="./images/timecardHover.png" /><img className="icon" src="./images/timecard.png" /><div>Time Card</div>
            </div>
          </Link>
          <Link to="schedule" className="link">
            <div className="flex navbar-link calendar">
              <img className="noIcon" src="./images/calendarHover.png" /><img className="icon" src="./images/calendar.png" /><div>Schedule</div>
            </div>
          </Link>
        </div>
    );
  }
});

module.exports = Navbar;
