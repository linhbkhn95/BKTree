


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
class Logged extends React.Component{
    state={
       open:false,
       display:""
    }

    
    logout(){
     
       this.props.logout();
    }
    changpass(){
      console.log('help');
      this.props.history.router.push('/changepass');
    }
    watchNotifi(){
      let {dispatch} =this.props;
      dispatch(resetNotification);
      this.props.history.router.push('/notification')
    }

     handleTouchTap = (event) => {
    // This prevents ghost click.
        event.preventDefault();

            this.setState({
              open: true,
              display:"none",
              anchorEl: event.currentTarget,
            });
      };

      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
    render(){
     
      var notify= <Badge
                      badgeContent={10}
                      secondary={true}
                     
                     
                      badgeStyle={{top: 12, display:this.state.display, right: 12}}
                    >
                <IconButton onClick={this.handleTouchTap} tooltip="Thông báo">
                  <NotificationsIcon />
                </IconButton>
                </Badge>
             
             let url_profile = "/profile."+this.props.auth.user.username+".html"   
            let number_notifi = this.props.notification.number_notifi;
      return(
        <div >
      {/* <ListItem containerElement={ <Link to="/notification" />} primaryText="Thông báo" leftIcon={<Badge  style={{top: "-22px", left: "-8px"}}
          badgeContent={4}
          primary={true}
        ><Notifications />  </Badge>} />          
     */}

              <NavLink to='/notification'><Badge
            //  onClick={this.watchNotifi.bind(this)}
      badgeContent={number_notifi?number_notifi:''}
      // secondary={true}
      secondary={this.props.notification.number_notifi}

      primary={!this.props.notification.number_notifi}

      style={{padding:"3px"}}
      badgeStyle={{top: -4, right: 12}}
    >
      <IconButton tooltip="Thông báo">
        <NotificationsIcon />
      </IconButton>
    </Badge></NavLink>
    
 
  
          
          <NavLink to={url_profile} > <Avatar style={{marginTop:"-27px"}}  src={this.props.auth.user.url_avatar?this.props.auth.user.url_avatar:'images/user/me.png'} /></NavLink>
              
           
          <IconMenu
            
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
              <MenuItem primaryText="Thay đổi thông tin cá nhân" />
              <NavLink to="/changepass"><MenuItem  primaryText="Thay đổi mật khẩu" /></NavLink>
              <MenuItem onClick={this.logout.bind(this)} primaryText="Đăng xuất" />
          </IconMenu>
        </div>
      );
    }
  }

 Logged.muiName = 'IconMenu';
module.exports =connect(function(state){
    return{
        auth:state.auth
    }
})(Logged)