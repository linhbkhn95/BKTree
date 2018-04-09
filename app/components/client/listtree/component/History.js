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

const ListExampleMessages = () => (
  <div>
     
    <div>
      <List>
        <Subheader>Hôm nay</Subheader>
        <ListItem
          leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/29425964_871053206408584_518624791414964224_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHHiPYU4N8nj-MLtmfW2k-S6ZhBAf4T8CaAWVGhjW7jwN4vUhfTiFESsWUjpPXDroaYG5q8gNKmkhLedLOecHQuPmVP9qVKeZvw1Zfg5C3lXg&oh=e486ae055fb24eb921965685a8bdbbb4&oe=5B2D2BB0" />}
        //   primaryText="Nhỏ Ngọc"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Nhỏ Ngọc </span> --
              I&apos; Đã tưới 250ml nước cho cây
              <br />
              
            </p>
          }
          secondaryTextLines={2}
        >
             <span className="time-alert">{moment(date).lang('vi').fromNow()}</span>
        </ ListItem>
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/12565587_584562221695924_8989777346784784785_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFwS3gvxxfher6lM1Jc3Wo-QwIwiBu4nNVRJRr6LR70fGDNsZO2Dzs_8qtf8k1f2FsVPHGYp1b31hMgqQ8tFV3NpUINMtkDMKwh4X9kSCzw3w&oh=5b2eb0fa428edec7b89e3dcade7dec62&oe=5B45E24C" />}
        //   primaryText={
        //     <p>Phương Anh&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
        //   }
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Phương Anh</span> --
             &apos;Đã tưới 500ml nước cho cây
            
            </p>
          }
          secondaryTextLines={5}
        >
         <span className="time-alert">{moment(date).lang('vi').fromNow()}</span>
        </ ListItem>
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="images/xuan.jpg" />}
        //   primaryText="Nguyễn xuân"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Nguyễn Xuân</span> --
             đã tưới 50ml nước cho cây
            
            </p>
          }
          secondaryTextLines={2}
        >
        <span className="time-alert">{moment(date).lang('vi').fromNow()}</span>
        </ ListItem>
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

export default ListExampleMessages;