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
                    leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/29425964_871053206408584_518624791414964224_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHHiPYU4N8nj-MLtmfW2k-S6ZhBAf4T8CaAWVGhjW7jwN4vUhfTiFESsWUjpPXDroaYG5q8gNKmkhLedLOecHQuPmVP9qVKeZvw1Zfg5C3lXg&oh=e486ae055fb24eb921965685a8bdbbb4&oe=5B2D2BB0" />}
                  //   primaryText="Nhỏ Ngọc"
                    secondaryText={
                      <p>
                        <span style={{color: darkBlack}}>{history.username} </span> --
                        &apos; Đã tưới {history.water_user}ml nước cho cây
                         (lượng nước cần lúc đó {history.waterneed}ml)
                        <br />
                        
                      </p>
                    }
                    secondaryTextLines={2}
                  >
                      <span className="time-alert">{history.time_user}</span>
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