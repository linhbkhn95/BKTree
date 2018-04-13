

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ViewList from 'material-ui-icons/RemoveRedEye';
import {Link } from 'react-router-dom'
import axios from 'axios'
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
class ListTree extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      listgroup:[]
    }
  }
  componentDidMount(){
    let self = this
    axios.post('/group_tree/get_all')
    .then((resdata)=>{
       if(resdata.data.EC==0){
         self.setState({listgroup:resdata.data.DT})
       }
    })
  }
  getUrl(grouptree_id){
    return "grouptree."+grouptree_id+".html"
  }
  render(){
    let listgroup =this.state.listgroup
    let self  = this
    return (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={2}
      padding={1}
    >
      <Subheader>Danh sách cây </Subheader>
      {listgroup.map((tile) => (
        <GridTile
        
          key={tile.id}
          title={<div>{tile.groupname}  <span style={{float:"right",fontSize:"14px"}}>{tile.count_listtree} cây</span></div>}
          
          subtitle={
                <div>
                  
                   <span> Số cây cần tưới: <b>{tile.count_listtree_needwater}</b></span>
                   <br />
                   <span> nguồn gốc <b>{tile.country}</b></span>
                </div>
          }
          actionIcon={<IconButton containerElement={ <Link to={self.getUrl(tile.id)} />}><ViewList  color="white" /></IconButton>}
          // containerElement={<div>19 cây</div>}
          containerElement={ <Link to={self.getUrl(tile.id)}  >{tile.count_listtree} </Link>}
        >
          <img src={tile.url_image} />
        </GridTile>
      ))}
    </GridList>
  </div>
);
  }}

  
  export default ListTree;