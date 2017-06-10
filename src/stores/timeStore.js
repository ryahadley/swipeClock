"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const _ = require('lodash');
const CHANGE_EVENT = 'change';

let timeCard = [];

const TimeStore = assign({}, EventEmitter.prototype, {
  // addChangeListener: (callback) => {
  //   this.on(CHANGE_EVENT, callback);
  // },
  //
  // removeChangeListener: (callback) => {
  //   this.removeListener(CHANGE_EVENT, callback);
  // },
  //
  // emitChange: () => {
  //   this.emit(CHANGE_EVENT);
  // },

  getAllTimeCards: () => {
    return timeCard;
  },

  // getAuthorById: (id) => {
  //   return _.find(timeCard, {id: id});
  // }
});

Dispatcher.register((action) => {
  switch(action.actionType) {
    case ActionTypes.INITALIZE: {
      timeCard = action.initialData.timeCards;
      // TimeStore.emitChange();
      break;
    }
    case ActionTypes.CREATE_TIME: {
      timeCard.push(action.time);
      // TimeStore.emitChange();
      break;
    }
    case ActionTypes.UPDATE_TIME: {
      let exisitingAuthor = _.find(timeCard, {id: action.time.id});
      let exisitingAuthorIndex = _.indexOf(timeCard, exisitingAuthor);
      timeCard.splice(exisitingAuthorIndex, 1, action.time);
      // TimeStore.emitChange();
      break;
    }
    case ActionTypes.DELETE_TIME: {
      _.remove(timeCard, (time) => {
        return action.id === author.id;
      });
      // TimeStore.emitChange();
      break;
    }
    default: //no op
  }
});

module.exports = TimeStore;
