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
import LinearProgress from 'material-ui/LinearProgress';
import {Link} from 'react-router-dom'
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
    <MenuItem>Tưới cây</MenuItem>
    <MenuItem  containerElement={ <Link to="/treedetail" ></Link>} > Xem chi tiết </MenuItem>
    <MenuItem >Gửi phản hồi</MenuItem>
  </IconMenu>
);

const ListExampleMessages = () => (
  <div>
       {/* <div className="title-page">
              Thông báo
          </div> */}
    <div>
      <List>
        <Subheader>Khế ta</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/tree/khe.jpg" />}
          primaryText={<div style={{fontSize:"13px"}}>Mã cây: SUAA123</div>}
          rightIconButton={rightIconMenu}
          style={{height:"100px"}}
          secondaryText={
            <p style={{height:"42px",fontSize:"13px"}}>
           
            Tọa độ: <i> X =12 và Y = 86</i>
         
           <br />
            <div>Tỉ lệ nước </div>
            <LinearProgress mode="determinate" value={80} />
            
            </p>
          }
          secondaryTextLines={2}
        >
             <span className="time-alert">Trạng thái: tốt</span>
        </ ListItem>
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="images/tree/mit.jpg" />}
          primaryText={<div style={{fontSize:"13px"}}>Mã cây: SASA3</div>}
          rightIconButton={rightIconMenu}
          style={{height:"100px"}}
          secondaryText={
            <p style={{height:"42px",fontSize:"13px"}}>
           
            Tọa độ: <i> X =14 và Y = 86</i>
         
           <br />
            <div>Tỉ lệ nước </div>
            <LinearProgress mode="determinate" value={50} />
            
            </p>
          }
          secondaryTextLines={2}
        >
             <span className="time-alert">Trạng thái: bình thường</span>
        </ ListItem>
     
      </List>
    </div>
    
  </div>
);

export default ListExampleMessages;