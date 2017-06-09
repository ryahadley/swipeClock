"use strict";

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Navbar = React.createClass({
  render: () => {
    return (
        <div className="background">
          <Link to="dashboard" className="link">
            <div className="flex navbar-link dashboard">
              <img className="dashboardHover" src="./images/dashboardHover.png" /><img className="noDashboard" src="./images/dashboard.png" /><div>Dashboard</div>
            </div>
          </Link>
          <Link to="webclock" className="link">
            <div className="flex navbar-link clock">
              <img className="clockHover" src="./images/clockHover.png" /><img className="noClock" src="./images/clock.png" /><div>WebClock</div>
            </div>
          </Link>
          <Link to="timecard" className="link">
            <div className="flex navbar-link time">
              <img className="timeHover" src="./images/timecardHover.png" /><img className="noTime" src="./images/timecard.png" /><div>Time Card</div>
            </div>
          </Link>
          <Link to="schedule" className="link">
            <div className="flex navbar-link calendar">
              <img className="calendarHover" src="./images/calendarHover.png" /><img className="noCalendar" src="./images/calendar.png" /><div>Schedule</div>
            </div>
          </Link>
        </div>
    );
  }
});

module.exports = Navbar;
