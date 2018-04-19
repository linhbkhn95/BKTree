import React from 'react'
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
import {setNotification,resetNotification} from 'app/action/actionNotification'
import {connect} from 'react-redux'
import Inti from './Inti'
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

class Layout extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
        items: 10,
        listNotifi:[],
        page:1,
        loadingState: false
      };
    }
  
    componentDidMount() {
      this.refs.iScroll.addEventListener("scroll", () => {
        if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight -20){
          this.loadMoreItems();
        }
      });
      let self = this
      let {dispatch} = this.props
      io.socket.post('/notification/getlist',{page:this.state.page},function(res,jwres){
        if(res.EC==0){
            console.log(res.DT)
            self.setState({listNotifi:res.DT,page:self.state.page+1,loadingState:false})
            dispatch(resetNotification());

        }
      })
    }
  
    displayItems() {
      var items = [];
      for (var i = 0; i < this.state.items; i++) {
        
        items.push(<li key={i}>Item {i}</li>);
      }
      return items;
    }
  
    loadMoreItems() {
       if(this.state.loadingState){
           return;
       }
      this.setState({ loadingState: true });
      let self  =this;
      let {dispatch} = this.props
    
       io.socket.post('/notification/getlist',{page:this.state.page},function(res,jwres){
         if(res.EC==0){
             console.log('dataaaaaaaaaaaaaaaa',res.DT)
             let data = self.state.listNotifi.concat(res.DT)
             self.setState({listNotifi:data,page:self.state.page+1,loadingState:false})
             dispatch(resetNotification());

         }
       })
      // setTimeout(() => {
      //   this.setState({ items: this.state.items + 10, loadingState: false });
      // }, 1000);
    }
  
    render() {
      let listNotifi = this.state.listNotifi
      return (
        <div ref="iScroll" style={{ height:"600px", overflow: "auto" }}>
           <List>
            {/* {this.displayItems()}  */}
            <Subheader>Hôm nay</Subheader>
            {
           listNotifi.length>0?
           listNotifi.map(( notifi,index)=>{
             return(
               <div key={index}>
              <ListItem
                    leftAvatar={<Avatar src={ notifi.data.user.url_avatar? notifi.data.user.url_avatar:'images/user/me.png'} />}
                  //   primaryText="Nhỏ Ngọc"
                    secondaryText={
                      <p>
                        <span style={{color: darkBlack}}>{ notifi.data.user.fullname_user? notifi.data.user.fullname_user: notifi.username} </span> --
                        &apos; Đã tưới { notifi.data.water_use}ml nước cho cây
                         (lượng nước cần lúc đó { notifi.data.waterneed}ml)
                        <br />
                        
                      </p>
                    }
                    secondaryTextLines={2}
                  >
                      <span className="time-alert">{moment( notifi.data.createdAt).lang('vi').fromNow()=='Invalid date'?'':moment(notifi.data.createdAt).lang('vi').fromNow()}</span>
                  </ ListItem>
                  <Divider inset={true} />
                </div>
             )
           }):null
          }
          </List>
  
          {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
  
        </div>
      );
    }
}
module.exports =connect(function(state){
  return{

  }
}) (Layout);