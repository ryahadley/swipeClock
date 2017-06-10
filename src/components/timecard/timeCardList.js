"use strict";

var React = require('react');
var Link = require('react-router').Link;
var Router = require('react-router');

var TimeList = React.createClass({
  //Define required propTypes
  // propTypes: {
  //   authors: React.propTypes.array.isRequired
  // },
  // 
  // deleteAuthor: function(id, event) {
  //   event.preventDefault();
  //   AuthorActions.deleteAuthor(id);
  //   toastr.success('Author Deleted');
  // },

  render: function() {
    var createAuthorRow = function(time) {
      return (
        <tr key={time.id}>
        {/*<td><a href="#" onClick={this.deleteAuthor.bind(this, time.id)}>Delete</a></td>
          <td><Link to="manageAuthor" params={{id: time.id}}>{time.id}</Link></td>*/}
          <td>{time.firstName} {time.lastName}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.timeCards.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TimeList;
