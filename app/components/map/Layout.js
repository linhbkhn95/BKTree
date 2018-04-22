import React from 'react'
import ListTree from './ListGroupTree'
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
var {Provider} = require('react-redux');
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
var store = require('app/store.js');
class LeftMenu extends React.Component{
    componentDidMount(){
     
        let self = this
        let {dispatch } =this.props
        axios.get('/auth/get_session')
        .then((res)=>{
           if(res.data.EC==0){
            localStorage.setItem('jwToken',res.data.DT.token);
            setAuthorizationToken(res.data.DT.token);
            dispatch(setCurrentUser(jwtDecode(res.data.DT.token)));
           }
           else{
            localStorage.removeItem('jwToken');
           self.context.router.history.push('/login');
    
           }
        })
      
      
      
    }
    render (){
      return (
          
                 <ListTree />
           
        );
    } 
  };
  LeftMenu.contextTypes = {
    router: PropTypes.object.isRequired
  }
 module.exports = connect(function(state){
 	return{
   
     auth:state.auth,

 	};
 })(LeftMenu);