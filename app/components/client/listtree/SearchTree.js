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
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';

import SelectField from 'material-ui/SelectField';
import Select from 'react-select';

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
    <MenuItem  containerElement={ <Link to="/treedetail." ></Link>} > Xem chi tiết </MenuItem>
    <MenuItem >Gửi phản hồi</MenuItem>
  </IconMenu>
);

class ListExampleMessages extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      listtree:[],
      listGroupTree:[],
      selectedOption: '',
      grouptree:null,
      tree:null,
      switched:false
    }
  }
  follow(tree_id){
    console.log('follow',tree_id)
        io.socket.post('/tree/subscribe_tree',{tree_id},function(jwres,res){
          if(res.EC==0){
                console.log(res)
          }
          else{

          }
        })
  }


  async getOptionsSYMBOL(input) {
    return { options: this.state.listGroupTree }
  }
  async getOptionsTree(input) {
    return { options: this.state.listTree }
  }
  onChangeSYMBOL(e) {
    var that = this;
    if(e){
    }
    this.setState({ grouptree: e,tree:null });
  }
  onChangeTree(e) {
    var that = this;
    if(e){

    }
    this.setState({ tree: e });
  }
  renderRightIconMenu(tree_id){
    let urlDetail = "/treedetail."+tree_id+".html"
    let self = this
    return(
          <IconMenu iconButtonElement={iconButtonElement}>
        {/* <MenuItem>Tưới cây</MenuItem> */}
        <MenuItem  containerElement={ <Link to={urlDetail} ></Link>} > Xem chi tiết </MenuItem>
        <MenuItem onClick={self.follow.bind(this,tree_id)} >Nhận thông báo</MenuItem>
      </IconMenu>
    )
  }
  componentDidMount(){
       let self = this
       let grouptree_id = this.props.grouptree_id||null
       if(grouptree_id)
        axios.post('/tree/gitlist_grouptree',{grouptree_id})
        .then((res)=>{
            self.setState({listtree:res.data.DT})
        })
  }
  render(){
    let self = this
    let {listtree} = this.state
    return(

  
  <div>
       <div className="title-page">
            Tìm kiếm cây
          </div>
          <div>
          <div className="col-xs-12">
              <h5 className="col-xs-5">Nhóm cây</h5>
              <div className="col-xs-7 ">
                {/* <InputComponent placeholder="VFMVF1" validate={this.state.SYMBOL.validate} type="text" name="SYMBOL"
                        tooltip={this.state.SYMBOL.tooltip} onChange={this.handleChange.bind(this)} /> */}
                {/* <SelectFactory isAutoUppercase={true} type="SYMBOL" CDTYPE="SA" CDNAME="FUND" onChange={this.onChangeAllcode.bind(this)}  placeholder="Nhập MCCQ" /> */}
                <Select.Async
                  multi={true}
                  name="form-field-name"
                  disabled={this.state.switched}
                  placeholder="Nhập tên nhóm cây"
                  loadOptions={this.getOptionsSYMBOL.bind(this)}
                  value={this.state.grouptree}
                
                  options={this.state.listGroupTree}
                  onChange={this.onChangeSYMBOL.bind(this)}
                  cache={false}
                />
              </div>
      
            </div>
            <div style={{marginTop:"5px"}} className="col-xs-12">
              <h5 className="col-xs-5">Mã cây</h5>
              <div className="col-xs-7 ">
                {/* <InputComponent placeholder="VFMVF1" validate={this.state.SYMBOL.validate} type="text" name="SYMBOL"
                        tooltip={this.state.SYMBOL.tooltip} onChange={this.handleChange.bind(this)} /> */}
                {/* <SelectFactory isAutoUppercase={true} type="SYMBOL" CDTYPE="SA" CDNAME="FUND" onChange={this.onChangeAllcode.bind(this)}  placeholder="Nhập MCCQ" /> */}
                <Select.Async
                 
                  name="form-field-name"
                  placeholder="Nhập mã cây"
                  loadOptions={this.getOptionsTree.bind(this)}
                  value={this.state.tree}
                
                  options={this.state.listTree}
                  onChange={this.onChangeTree.bind(this)}
                  cache={false}
                />
              </div>
      
            </div>
            <div style={{marginTop:"5px"}} className="col-xs-12">
              <h5 className="col-xs-5">Trạng thái</h5>
              <div className="col-xs-7 ">
                {/* <InputComponent placeholder="VFMVF1" validate={this.state.SYMBOL.validate} type="text" name="SYMBOL"
                        tooltip={this.state.SYMBOL.tooltip} onChange={this.handleChange.bind(this)} /> */}
                 <select className="form-control">
                        <option>Tốt</option>
                        <option>Kém</option>

                  </select>
              </div>
      
            </div>
            <div style={{textAlign:"center",padding:"10px"}} className="col-md-12">
            <RaisedButton label="Tìm kiếm" primary={true} style={{margintop:10}} />
            </div>
           

          </div>
    <div>
      
      <List>

        <Subheader>{listtree.length>0?listtree[0].groupname:""}</Subheader>
         {listtree.length>0?
         listtree.map((tree,index)=>{
           //ti lệ nước đang có
           let ratio_water = (tree.waternow*100/tree.waterneed) 
           let colorStatus = "";
           let texStatus = "Tốt"
           if(ratio_water<50){
             texStatus = "Thiếu nước"
             colorStatus= "red"
           }
           if(ratio_water>50&&ratio_water<80){
             texStatus="Đủ nước"
             colorStatus = "#1c4fde"
           }

           console.log('colorStatus',colorStatus)
           return(
            <ListItem
            key={index}
            leftAvatar={<Avatar src="images/tree/khe.jpg" />}
            primaryText={<div style={{fontSize:"13px"}}>Mã cây: {tree.code}</div>}
            rightIconButton={self.renderRightIconMenu(tree.id)}
            style={{height:"100px"}}
            secondaryText={
              <div style={{height:"42px",fontSize:"13px",color:"black"}}>
             
              Tọa độ: <i style={{color: "green",
    fontWeight: "bold"}}> X = {tree.coordinate.X} và Y = {tree.coordinate.Y}</i>
           
             <br />
              <div style={{color:"black"}}>Tỉ lệ nước </div>
              <LinearProgress color={colorStatus} mode="determinate" value={ratio_water} />
              
              </div>
            }
            secondaryTextLines={2}
          >
               <span  className="time-alert"><div style={{float:"left",marginRight:"5px",color:"black"}}>
               
               Trạng thái:</div> <div>  <span style={{

color:
    tree.status_code == "0" ? 'rgb(162, 42, 79)'
        : 'rgb(0, 255, 247)' ,
transition: 'all .3s ease'
}}>
&#x25cf;
</span> {
tree.status_tree
}</div>
               
               
               </span>

                                  {/* <span>      <span style={{

                                color:
                                    tree.status_code == "0" ? 'rgb(162, 42, 79)'
                                        : 'rgb(0, 255, 247)' ,
                                transition: 'all .3s ease'
                                }}>
                                &#x25cf;
                                </span> {
                                tree.status_tree
                                }
                                </span> */}
          </ ListItem>
           
           )
         }):<div className="">Chưa có cây nào được trồng</div>
        }
        {/* <ListItem
          leftAvatar={<Avatar src="images/tree/khe.jpg" />}
          primaryText={<div style={{fontSize:"13px"}}>Mã cây: SUAA123</div>}
          rightIconButton={rightIconMenu}
          style={{height:"100px"}}
          secondaryText={
            <div style={{height:"42px",fontSize:"13px"}}>
           
            Tọa độ: <i> X =12 và Y = 86</i>
         
           <br />
            <div>Tỉ lệ nước </div>
            <LinearProgress mode="determinate" value={80} />
            
            </div>
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
            <div style={{height:"42px",fontSize:"13px"}}>
           
            Tọa độ: <i> X =14 và Y = 86</i>
         
           <br />
            <div>Tỉ lệ nước </div>
            <LinearProgress mode="determinate" value={50} />
            
            </div>
          }
          secondaryTextLines={2}
        >
             <span className="time-alert">Trạng thái: bình thường</span>
        </ ListItem>
      */}
      </List>
    </div>
    
  </div>
);
  }}
module.exports = ListExampleMessages;