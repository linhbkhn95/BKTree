import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
// import ModalTree from './modalTree'
import axios from 'axios'
import {connect} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

class CardExampleWithAvatar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      openModal:false,
      infoUser:{}
    }
  }
  openModal(){
      this.setState({openModal:true})
  }
  close(){
    this.setState({openModal:false})

  }
  componentDidMount(){
    let self = this
    let username = this.props.username||null
    if(username)
      axios.post('/user/get_detail',{username})
      .then((res)=>{
          if(res.data.EC==0){
            self.setState({infoUser:res.data.DT})
          }
      })
  }
  access(wateruse){
    console.log('water use',wateruse)
    let tree_id = this.props.tree_id
    let self = this;
    if(wateruse>0&&tree_id)
      axios.post('/tree/use_tree',{wateruse,tree_id})
      .then((res)=>{
          if(res.data.EC==0){
             self.state.infoUser.waternow = res.data.DT.waternow;
            
             self.setState({infoUser:self.state.infoUser})
             toast.success('Tưới nước thành công', {
              position: toast.POSITION.TOP_CENTER
              });
          }
      })
    else{

    }
    this.setState({openModal:false})

  }
  render(){
    let infoUser = this.state.infoUser
    return(
      <Card>
      {/* <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
      /> */}
      <CardMedia
        overlay={<CardTitle title={infoUser.code} subtitle={infoUser.groupname}/>}
      >
        <img src={infoUser.url_avatar} alt="" />
      </CardMedia>
      {/* <CardTitle title="Khế ta" subtitle="MSDAAA1" /> */}
      <CardText>
      <List>
        <Subheader inset={true}>Thông tin người dùng</Subheader>
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Tên đăng nhập"
          secondaryText={infoUser.username}
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Họ tên"
          secondaryText={infoUser.fullname}
        />
         <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Chức vụ"
          secondaryText={infoUser.rolename}
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Ngày sinh"
          secondaryText={infoUser.birthday}
        />
         <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Giới tính"
          secondaryText={infoUser.sex}
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Địa chỉ"
          secondaryText={infoUser.address}
        />
          {/* <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Nguồn gốc"
          secondaryText={begin.}
        /> */}
        </List>
      </CardText>
      <CardActions>
        <FlatButton onClick={this.openModal.bind(this)} label="Thay đổi thông tin" />
        {/* <FlatButton label="Phản hồi" /> */}
      </CardActions>
      {/* <ModalTree access={this.access.bind(this)} open ={this.state.openModal} close={this.close.bind(this)}/> */}
    </Card>
    )
  }
}
module.exports =connect(function(state){
    return{
        auth:state.auth
    }
}) (CardExampleWithAvatar);