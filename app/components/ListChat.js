import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const ListExampleChat = () => (
  <div>
    <List>
      <Subheader>Trò chuyện gần đây</Subheader>
      <ListItem
        primaryText="Nhỏ Ngọc"
        leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/29425964_871053206408584_518624791414964224_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHHiPYU4N8nj-MLtmfW2k-S6ZhBAf4T8CaAWVGhjW7jwN4vUhfTiFESsWUjpPXDroaYG5q8gNKmkhLedLOecHQuPmVP9qVKeZvw1Zfg5C3lXg&oh=e486ae055fb24eb921965685a8bdbbb4&oe=5B2D2BB0" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Phương Anh"
        leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/12565587_584562221695924_8989777346784784785_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFwS3gvxxfher6lM1Jc3Wo-QwIwiBu4nNVRJRr6LR70fGDNsZO2Dzs_8qtf8k1f2FsVPHGYp1b31hMgqQ8tFV3NpUINMtkDMKwh4X9kSCzw3w&oh=5b2eb0fa428edec7b89e3dcade7dec62&oe=5B45E24C" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Nguyễn Đức Tài"
        leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/23659259_794466457404947_5837098876567469784_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEtwTtQGN8sEofytHY7xP2PGSSV3AQIRuiWH43k5MrPgb9-T_slC5YONSGxRcRajBxtubD-RXIK3rq9ptJYdmlzDk-p9Ljh0NM2MGCjxx4fbA&oh=1dc29470be1f1a8a2f55e543ae0ac9ee&oe=5B322EA7" />}
        rightIcon={<CommunicationChatBubble />}
      />
      {/* <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      /> */}
    </List>
    <Divider />
    <List>
      <Subheader>Trò chuyện trước</Subheader>
      <ListItem
        primaryText="Nguyễn Đức Tài"
        leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/23659259_794466457404947_5837098876567469784_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEtwTtQGN8sEofytHY7xP2PGSSV3AQIRuiWH43k5MrPgb9-T_slC5YONSGxRcRajBxtubD-RXIK3rq9ptJYdmlzDk-p9Ljh0NM2MGCjxx4fbA&oh=1dc29470be1f1a8a2f55e543ae0ac9ee&oe=5B322EA7" />}
      />
      <ListItem
        primaryText="Nhỏ Ngọc"
        leftAvatar={<Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/29425964_871053206408584_518624791414964224_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHHiPYU4N8nj-MLtmfW2k-S6ZhBAf4T8CaAWVGhjW7jwN4vUhfTiFESsWUjpPXDroaYG5q8gNKmkhLedLOecHQuPmVP9qVKeZvw1Zfg5C3lXg&oh=e486ae055fb24eb921965685a8bdbbb4&oe=5B2D2BB0" />}
      />
    </List>
  </div>
);

export default ListExampleChat;