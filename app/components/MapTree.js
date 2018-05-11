

import React from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Search from 'material-ui-icons/Search';
import Assignment from 'material-ui-icons/Assignment';
import Update from 'material-ui-icons/Update';
import Contact from 'material-ui-icons/ContactMail';

import Notifications from 'material-ui-icons/Notifications';
import Book from 'material-ui-icons/Book';
import moment from 'moment'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import RaisedButton from 'material-ui/RaisedButton';
import {NavLink,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { format } from 'util';
import { ToastContainer, toast } from 'react-toastify';
import {addNotification} from 'app/action/actionNotification'

class ToastNotifi extends React.Component{
  render(){
      let notifi = this.props.notifi
      console.log('notifi',notifi)
      return(

          <div style={{borderBottom:"none"}} className=" alert-message">
                    <NavLink to={notifi.url_ref} > <div className="col-md-3 row"><NavLink to={"/profile."+notifi.data.user.username+"html"} ><img className="avatar-alert" src={notifi.data.user.url_avatar?notifi.user.url_avatar:'/images/user/me.png'} /></NavLink></div>
                                <div className="col-md-10 row">
                     <NavLink to={"/profile."+notifi.data.user.username+".html"} >  <strong>{notifi.data.user.fullname}</strong></NavLink> {" đã tưới "+notifi.data.water_use +" cho cây "+notifi.treecode}
                                    <br />
                                    <p className="time-alert">{moment(notifi.time_user).lang('vi').fromNow()}</p>
                                </div>
                                </NavLink>
                     </div>
      )
  }
}
 class ListExampleNested extends React.Component {

  state = {
    open: false,
    listMenu:[],
    list_subscribe_tree:[]
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };
  componentDidMount(){
    let self = this
    axios.get('/menu/getmenu_by_role')
    .then((res)=>{
      if(res.data.EC==0){
          self.setState({listMenu:res.data.DT})
      }
      else{
        
      }
    })
  }
  componentWillMount(){
    let self = this
    io.socket.post('/tree/getlist_subscribe_tree',{username:this.props.auth.user.username},function(res,jwres){
      if(res.EC==0){
          self.setState({list_subscribe_tree:res.DT})
      }
      else{
        console.log(jwres)

      }
    })
    var {dispatch} = this.props; 
    let username = this.props.auth.user.username

    io.socket.on('User:'+username, function (data) {
           dispatch(addNotification(data));
           console.log('datanotifi',data);
            toast(<ToastNotifi notifi={data}/>, {autoClose: 500000})
    })
  }
  render_subscribe_tree(){
   
    //  let list_subscribe_tree = this.state.list_subscribe_tree;
    //  console.log('render_subscribe_tree',list_subscribe_tree)

    //  if(list_subscribe_tree.length>0){
    //    for(let i=0;i<list_subscribe_tree.length;i++){
    //   //  list_subscribe_tree.map((sb)=>{
    //       io.socket.on('follow', function (data) {
    //         console.log('Socket `' + data.id + '` đã đăng kí nhận thông báo!',data);
    //       });
          
    //       io.socket.on(list_subscribe_tree[i].room_id, function (data) {
    //         dispatch(addNotification(data))
    //         let msg =  data.data.user.fullname_user? data.data.user.fullname_user: data.data.user.username+
    //      " Đã tưới "+data.data.water_use+"ml nước cho cây"

    //         //tawng so notifi trong db
    //           // io.socket.post('/user/count_number_notifi',{username},function(res,jwres){

    //           // })


    //           toast.success(msg, {
    //             position: toast.POSITION.TOP_CENTER
    //         });
    //         console.log('Socket `' + data.id + '` joined the party!',data);
    //     //  });
    //      })
    //  }
    // }
  }
  render() {
    let auth = this.props.auth
    let fullname = auth.user.fullname?auth.user.fullname:'Cộng tác viên'
    let url_profile = "/profile."+auth.user.username+".html"
    return (
      <div>
        {/* {this.render_subscribe_tree()} */}
        {/* <Toggle
          toggled={this.state.open}
          onToggle={this.handleToggle}
          labelPosition="right"
          label="This toggle controls the expanded state of the submenu item."
        /> */}
   {/* <div className="icon-username"><AccountCircle /> </div> */}
                {/* <div className="user-name">Trịn Đức Bảo Linh </div> */}
        <div style={{paddingLeft:"15px",paddingRight:"15px"}} className=" menu">
        <div className="header-menu"><NavLink to="/">BKTree</NavLink></div>
        <div className="account-menu">
         
            <div className="user-avatar">
                           <NavLink to={url_profile}> <img className="img-user" src={auth.isAuthenticated&&auth.user.url_avatar?auth.user.url_avatar:'images/user/me.png' } /></NavLink>
            </div>
        

           <div style={{float:"left"}} className="">
                            <div className="user-name">
                            {fullname}
                            </div>
                          
               </div>
               <div style={{float:"",clear:"both",textAlign:"center"}} className="">
                            <div className="">
                           ({auth.isAuthenticated?auth.user.rolename:'' })
                            </div>
                          
               </div>
        </div>

        </div>
        {/* <hr style={{}} /> */}
        <Divider  />
        <br />
        <div>
          {this.props.auth.user&&this.props.auth.user.rolecode=="CTV"?
          
          <List>
          {/* <Subheader>Tìm kiếm</Subheader>
       
          <ListItem primaryText="Cây cần hỗ trợ" leftIcon={<Search />} />
          <ListItem primaryText="Trạng thái của cây" leftIcon={<Search />} />
          <Divider /> */}
          <Subheader>Thao tác</Subheader>
          <ListItem  containerElement={ <a href="/map/map"></a>}  primaryText="Bản đồ cây" leftIcon={<Assignment />} />

          <ListItem  containerElement={ <Link to="/list-tree" />}  primaryText="Danh sách cây" leftIcon={<Assignment />} />
          {/* <ListItem primaryText="Cập nhật bản đồ" leftIcon={<Update />} /> */}
          {/* <ListItem containerElement={ <Link to="/notification" />} primaryText="Thông báo" leftIcon={<Badge  style={{top: "-22px", left: "-8px"}}
    badgeContent={4}
    primary={true}
  ><Notifications />  </Badge>} /> */}
          {/* <ListItem primaryText="Thống kê/Báo cáo" leftIcon={<Book />} /> */}
          <ListItem containerElement={ <Link to="/chats" />} primaryText="Liên hệ"  leftIcon={<Contact />} />

        </List>:
        this.props.auth.user&&this.props.auth.user.rolecode=="SS"?

        <List>
        {/* <Subheader>Tìm kiếm</Subheader>
     
        <ListItem primaryText="Cây cần hỗ trợ" leftIcon={<Search />} />
        <ListItem primaryText="Trạng thái của cây" leftIcon={<Search />} />
        <Divider /> */}
        <Subheader>Thao tác</Subheader>
        <ListItem  containerElement={ <a href="/map/map"></a>}  primaryText="Bản đồ cây" leftIcon={<Assignment />} />
        <ListItem  containerElement={ <Link to="/trees" />}  primaryText="Quản nhóm cây" leftIcon={<Assignment />} />
          <ListItem  containerElement={ <Link to="/listall-tree" />}  primaryText="Quản lý cây" leftIcon={<Assignment />} />
        <ListItem  containerElement={ <Link to="/list-tree" />}  primaryText="Danh sách cây" leftIcon={<Assignment />} />
        {/* <ListItem primaryText="Cập nhật bản đồ" leftIcon={<Update />} /> */}
        {/* <ListItem containerElement={ <Link to="/notification" />} primaryText="Thông báo" leftIcon={<Badge  style={{top: "-22px", left: "-8px"}}
  badgeContent={4}
  primary={true}
><Notifications />  </Badge>} /> */}
        {/* <ListItem primaryText="Thống kê/Báo cáo" leftIcon={<Book />} /> */}
        <ListItem containerElement={ <Link to="/chats" />} primaryText="Liên hệ"  leftIcon={<Contact />} />

      </List>:
        <List>
         
            <Divider />
            <Subheader>Thao tác</Subheader>   
            <ListItem  containerElement={ <Link to="/trees" />}  primaryText="Quản nhóm cây" leftIcon={<Assignment />} />
            <ListItem  containerElement={ <Link to="/listall-tree" />}  primaryText="Quản lý cây" leftIcon={<Assignment />} />

            <ListItem  containerElement={ <Link to="/users" />}  primaryText="Quản lý user" leftIcon={<Assignment />} />

            <ListItem containerElement={ <a href="/map/map"></a>}  primaryText="Cập nhật bản đồ" leftIcon={<Update />} />
            {/* <ListItem containerElement={ <Link to="/notification" />} primaryText="Thông báo" leftIcon={<Badge  style={{top: "-22px", left: "-8px"}}
      badgeContent={4}
      primary={true}
    ><Notifications />  </Badge>} /> */}
            <ListItem containerElement={ <Link to="/statis" />}  primaryText="Thống kê/Báo cáo" leftIcon={<Book />} />
            <ListItem containerElement={ <Link to="/chats" />} primaryText="Liên hệ"  leftIcon={<Contact />} />

          </List>
        }
          
        </div>
      </div>
    );
  }
}
module.exports = connect(function(state){
  return{
   
    auth:state.auth

  };
})(ListExampleNested);