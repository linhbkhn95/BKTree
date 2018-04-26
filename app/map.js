require("babel-core/register");
require("babel-polyfill");

var React = require('react');
var ReactDOM = require('react-dom');

import LeftMenu from './components/map/Map'
  
getSession(function(user){
  // GetData_Map();
  if(user&&user.rolecode=="PM")
    map.addControl(drawControl);

  ReactDOM.render(<LeftMenu now={new Date().toString()}/>, document.getElementById('container'));
  // getall_coordinates()
}); 
  