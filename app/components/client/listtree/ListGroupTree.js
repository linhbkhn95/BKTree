

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ViewList from 'material-ui-icons/RemoveRedEye';
import {Link } from 'react-router-dom'
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
    img: 'images/tree/bong.jpg',
    title: 'Bỏng',
    author: 'Việt Nam',
  },
  {
    img: 'images/tree/dauta.jpg',
    title: 'Dâu ta',
    author: 'Việt Nam',
  },
  {
    img: 'images/tree/khe.jpg',
    title: 'Khế',
    author: 'Việt Nam',
  },
  {
    img: 'images/tree/dudu.jpg',
    title: 'Đu đủ',
    author: 'Thái Lan',
  },
  {
    img: 'images/tree/sung.jpg',
    title: 'Sung ta',
    author: 'Việt Nam',
  },
  {
    img: 'images/tree/thanglong.jpg',
    title: 'Thanh Long',
    author: 'Lào',
  },
  {
    img: 'images/tree/vaithieu.jpg',
    title: 'Vải thiều',
    author: 'Việt Nam',
  },
  {
    img: 'images/tree/mit.jpg',
    title:'Mít',
    author: 'Thái Lan',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const ListTree = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={2}
      padding={1}
    >
      <Subheader>Danh sách cây </Subheader>
      {tilesData.map((tile) => (
        <GridTile
        
          key={tile.img}
          title={<div>{tile.title}  <span style={{float:"right",fontSize:"14px"}}>19 cây</span></div>}
          
          subtitle={
                <div>
                  
                   <span> Số cây cần tưới: <b>5</b></span>
                   <br />
                   <span> nguồn gốc <b>{tile.author}</b></span>
                </div>
          }
          actionIcon={<IconButton containerElement={ <Link to="/list-tree-group" />}><ViewList  color="white" /></IconButton>}
          // containerElement={<div>19 cây</div>}
          containerElement={ <Link to="/list-tree-group" >19 cây </Link>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

  
  export default ListTree;