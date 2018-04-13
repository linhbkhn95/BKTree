var redux = require('redux');
var username = require('./username.js');
var auth = require('./auth.js');
var settings = require('./settings.js');
var titlePage = require('./titlePage')
 var reducer = redux.combineReducers ({username,auth,settings,titlePage});
 module.exports = reducer;
