
import {NavLink,Link} from 'react-router-dom';
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui-icons/Menu';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
var MenuSlide = require('./Menu.js');
import Notifications from 'material-ui-icons/Notifications';

var ModalInf = require('./user/ModalInf.js');
var ListFriend = require('./user/ListFriend.js');
import {connect} from 'react-redux';
import {logout} from 'app/action/actionUserName';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';


import MenuDemo from './MapTree'
import Divider from 'material-ui/Divider';
import ListChat from './ListChat'

 import { createStore } from 'redux';
import Notification from './pages/notification/Notification'
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import notifications from 'material-ui/svg-icons/social/notifications';
import {setNotification,resetNotification} from 'app/action/actionNotification'
import Logged from './Logout'
const style = {
  marginRight: 20,
};



	class Login extends React.Component {
	  static muiName = 'FlatButton';

	  render() {
	    return (
	      <FlatButton {...this.props} containerElement={ <Link to='/login' />} label="Login" />
	    );
	  }
	}
  
	
  class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	  open: false,
    	  logged: false,
        help:false
     };
  }
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
    axios.get('/tree/setAllStatus').then((resdata)=>{
         
    })
    io.socket.post('/notification/get_number_notifi',{username:this.props.auth.user.username},function(res,jwRes){
        if(res.EC==0){
          dispatch(setNotification(res.DT))
        }
    })

  //     let store = createStore(settings:{
  //       backgroupNav:"#00bcd4",
  //       backgroupSlideMenu:"White",
  //       backgroupBody:"White",
  //       colorNav:"white",
  //       nameHeader:"WebAssitant"
  //        }
  //  );
  }
  componentWillMount(){
    io.socket.get('/notification/follow', function gotResponse(data, jwRes) {
      console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
    
    });
  }
  logout(){
    let self  =this
    axios.post('/auth/logOut')
    .then((res)=>{
       if(res.data.EC==0){
        var {dispatch,history} = this.props;
       
          localStorage.removeItem('jwToken');
           dispatch(setCurrentUser({}));
          self.context.router.history.push('/login');

       }
       else{

       }
    })
    // this.context.router.history.push('/login');
    // // this.props.history.push('/login');
 }
  help(){
    this.setState({help:true});
   
  }
  handleClose(){
     this.setState({help:false});
  }
  goback(){
    this.context.router.history.goBack()
   }
  handleToggle = () => this.setState({open: !this.state.open});
  closeDrawer = () => {this.setState({ open: false }); console.log('change');};
  render() {
  	var drawerHeader={
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 8px',
          height: 56   
    }
    var that=this;
    return (
      <div >
       <div>
      
        <AppBar style={{background:this.props.backgroupNav,position: "fixed"}}   iconElementRight={this.props.auth.isAuthenticated? <Logged notification={this.props.notification} auth={this.props.auth} help={that.help.bind(this)}  logout={that.logout.bind(this)} /> : <Login />}  title={this.props.nameHeader} onLeftIconButtonTouchTap={this.props.auth.isAuthenticated?this.handleToggle:()=>{}} />
        </div>
        {/* <ModalInf open={this.state.help} /> */}
        <ListFriend handleClose={this.handleClose.bind(this)} open={this.state.help} />
        {this.props.auth.isAuthenticated?
        <Drawer docked={false} onRequestChange={this.closeDrawer}  style={{backgroundColor:"black"}} type="permanent" width={250}  open={this.state.open} >
            <div style={{drawerHeader}}>
              <IconButton onClick={this.handleToggle}>
                  <ChevronLeftIcon />
           	 </IconButton>
              <FloatingActionButton onClick={this.goback.bind(this)} style={style}>
      <ContentAdd />
    </FloatingActionButton>
            </div>

          	  {/* <MenuSlide /> */}
              <MenuDemo />
              <Divider />
              <ListChat />
        </Drawer>:null}
      </div>
    );
  }
}

  DrawerOpenRightExample.contextTypes = {
    router: PropTypes.object.isRequired
  }
 module.exports = connect(function(state){
 	return{
     username:state.username,
     backgroupNav:state.settings.backgroupNav,
     nameHeader:state.settings.nameHeader,
     auth:state.auth,
     notification:state.notification

 	};
 })(DrawerOpenRightExample);