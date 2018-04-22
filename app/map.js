require("babel-core/register");
require("babel-polyfill");

var React = require('react');
var ReactDOM = require('react-dom');

import LeftMenu from './components/map/Map'
  
getSession(function(user){
  // GetData_Map();
  ReactDOM.render(<LeftMenu now={new Date().toString()}/>, document.getElementById('container'));
  // getall_coordinates()
}); 
  