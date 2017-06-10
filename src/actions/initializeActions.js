"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const TimeApi = require('../api/timeApi');

const InitializeAcitons = {
  initApp: () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITALIZE,
      initialData: {
        timeCards: TimeApi.getAllTimeCards()
      }
    });
  }
};

module.exports = InitializeAcitons;
