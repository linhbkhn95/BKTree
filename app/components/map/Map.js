import React from 'react'
import ListTree from './Layout'
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
var {Provider} = require('react-redux');

var store = require('app/store.js');
class LeftMenu extends React.Component{
  
    render (){
      return (
            <Provider store={store}>
                 <ListTree />
            </Provider>
        );
    } 
  };
  module.exports = LeftMenu