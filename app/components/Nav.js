
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

	class Login extends React.Component {
	  static muiName = 'FlatButton';

	  render() {
	    return (
	      <FlatButton {...this.props} containerElement={ <Link to='/login' />} label="Login" />
	    );
	  }
	}
  
	class Logged extends React.Component{
    state={
       open:false,
       display:""
    }
    logout(){
      console.log('logout');
      this.props.logout();
    }
    help(){
      console.log('help');
      this.props.help();
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
             
             
      return(
        <div >
           
         

          <NavLink to={"/"+this.props.username} > <Avatar style={{marginTop:"-15px"}}  src="images/xuan.jpg" /></NavLink>
                {/* <Popover
                  open={this.state.open}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  onRequestClose={this.handleRequestClose}
                >
                
                 Thông báo 
                 <Divider/ >
                  <Menu>
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help &amp; feedback" />
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Sign out" />
                  </Menu>
             
                </Popover> */}
               {/* {notify} */}
           
          <IconMenu
            
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
              <MenuItem primaryText="Me" />
              <MenuItem onClick={this.help.bind(this)} primaryText="List Friends" />
              <MenuItem onClick={this.logout.bind(this)} primaryText="Sign out" />
          </IconMenu>
        </div>
      );
    }
  }

 Logged.muiName = 'IconMenu';

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
  //     let store = createStore(settings:{
  //       backgroupNav:"#00bcd4",
  //       backgroupSlideMenu:"White",
  //       backgroupBody:"White",
  //       colorNav:"white",
  //       nameHeader:"WebAssitant"
  //        }
  //  );
  }
  logout(){
    this.props.dispatch(logout());
    this.context.router.history.push('/login');
    // this.props.history.push('/login');
 }
  help(){
    this.setState({help:true});
   
  }
  handleClose(){
     this.setState({help:false});
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
        <AppBar style={{background:this.props.backgroupNav}}   iconElementRight={this.props.username ? <Logged username={this.props.username} help={that.help.bind(this)}  logout={that.logout.bind(this)} /> : <Login />}  title={this.props.nameHeader} onLeftIconButtonTouchTap={this.handleToggle} />
        </div>
        {/* <ModalInf open={this.state.help} /> */}
        <ListFriend handleClose={this.handleClose.bind(this)} open={this.state.help} />
        <Drawer docked={false} onRequestChange={this.closeDrawer}  style={{backgroundColor:"black"}} type="permanent" width={250}  open={this.state.open} >
            <div style={{drawerHeader}}>
              <IconButton onClick={this.handleToggle}>
                  <ChevronLeftIcon />
           	 </IconButton>
            </div>
          	  {/* <MenuSlide /> */}
              <MenuDemo />
              <Divider />
              <ListChat />
        </Drawer>
      </div>
    );
  }
}

  DrawerOpenRightExample.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
 module.exports = connect(function(state){
 	return{
     username:state.username,
     backgroupNav:state.settings.backgroupNav,
     nameHeader:state.settings.nameHeader
 	};
 })(DrawerOpenRightExample);