import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Notifi from 'app/components/pages/notification/Notification'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/29425964_871053206408584_518624791414964224_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHHiPYU4N8nj-MLtmfW2k-S6ZhBAf4T8CaAWVGhjW7jwN4vUhfTiFESsWUjpPXDroaYG5q8gNKmkhLedLOecHQuPmVP9qVKeZvw1Zfg5C3lXg&oh=e486ae055fb24eb921965685a8bdbbb4&oe=5B2D2BB0',
    title: 'Nhân viên chăm sóc cây ',
    author: 'Nhỏ ngọc',
  },
  {
    img: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/p240x240/12565587_584562221695924_8989777346784784785_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFwS3gvxxfher6lM1Jc3Wo-QwIwiBu4nNVRJRr6LR70fGDNsZO2Dzs_8qtf8k1f2FsVPHGYp1b31hMgqQ8tFV3NpUINMtkDMKwh4X9kSCzw3w&oh=5b2eb0fa428edec7b89e3dcade7dec62&oe=5B45E24C',
    title: 'Nhân viên tưới nước',
    author: 'Phương anh',
  },
 
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Danh sách nhân viên</Subheader>
      {/* <Notifi /> */}
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>Họ tên <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;