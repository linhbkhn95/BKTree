var redux = require('redux');
var username = require('./username.js');
var auth = require('./auth.js');
var settings = require('./settings.js');
var titlePage = require('./titlePage')
var notification = require('./notification')

 var reducer = redux.combineReducers ({username,notification,auth,settings,titlePage});
 module.exports = reducer;
