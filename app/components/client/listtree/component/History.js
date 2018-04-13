import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment';
import axios from 'axios'

// import ReactTooltip from 'react-tooltip'
 var date = Date.now();
var datedemo=1511399642970;
const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Ẩn</MenuItem>
    <MenuItem>Xóa</MenuItem>
  </IconMenu>
);

class ListExampleMessages extends React.Component{
  constructor(props){
    super(props);
    this.state={
      openModal:false,
      listHistoryTree:[]
    }
  }
  componentDidMount(){
    let self = this
    let tree_id = this.props.tree_id||null
    if(tree_id)
      axios.post('/historytree/gitlist_bytree',{tree_id})
      .then((res)=>{
          if(res.data.EC==0){
            self.setState({listHistoryTree:res.data.DT})
          }
      })
  }
  render(){
    let listHistoryTree = this.state.listHistoryTree
    return (
  <div>
     
    <div>
      <List>
        <Subheader>Hôm nay</Subheader>
         {
           listHistoryTree.length>0?
           listHistoryTree.map((history,index)=>{
             return(
               <div key={index}>
              <ListItem
                    leftAvatar={<Avatar src={history.url_avatar?history.url_avatar:'images/user/me.png'} />}
                  //   primaryText="Nhỏ Ngọc"
                    secondaryText={
                      <p>
                        <span style={{color: darkBlack}}>{history.fullname_user?history.fullname_user:history.username} </span> --
                        &apos; Đã tưới {history.water_use}ml nước cho cây
                         (lượng nước cần lúc đó {history.waterneed}ml)
                        <br />
                        
                      </p>
                    }
                    secondaryTextLines={2}
                  >
                      <span className="time-alert">{moment(history.createdAt).lang('vi').fromNow()=='Invalid date'?'':moment(history.createdAt).lang('vi').fromNow()}</span>
                  </ ListItem>
                  <Divider inset={true} />
                </div>
             )
           }):null
         }
      
       
       
        
      </List>
    </div>
    <div>
      <List>
        <Subheader>Hôm qua</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/duong.jpg" />}
          rightIconButton={rightIconMenu}
        //   primaryText="Đăng Dương"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Đăng Dương</span><br />
              &apos; đã tạo ra cây <span style={{color: darkBlack}}>Xương Rồng</span> mới
            </p>
          }
          secondaryTextLines={2}
        >
            <span className="time-alert">{moment(datedemo).lang('vi').fromNow()}</span>
            </ ListItem>
      </List>
    </div>
  </div>
);
  }}

export default ListExampleMessages;