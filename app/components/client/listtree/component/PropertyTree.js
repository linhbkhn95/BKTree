import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ModalTree from './modalTree'
import axios from 'axios'
class CardExampleWithAvatar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      openModal:false,
      infoTree:{}
    }
  }
  openModal(){
      this.setState({openModal:true})
  }
  close(){
    this.setState({openModal:false})

  }
  componentDidMount(){
    let self = this
    let tree_id = this.props.tree_id||null
    if(tree_id)
      axios.post('/tree/getDetail',{tree_id})
      .then((res)=>{
          if(res.data.EC==0){
            self.setState({infoTree:res.data.DT})
          }
      })
  }
  render(){
    let infoTree = this.state.infoTree
    return(
      <Card>
      {/* <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
      /> */}
      <CardMedia
        overlay={<CardTitle title={infoTree.code} subtitle={infoTree.groupname}/>}
      >
        <img src={infoTree.url_image} alt="" />
      </CardMedia>
      {/* <CardTitle title="Khế ta" subtitle="MSDAAA1" /> */}
      <CardText>
      <List>
        <Subheader inset={true}>Chi tiết</Subheader>
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Mã cây"
          secondaryText={infoTree.code}
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Loại cây"
          secondaryText={infoTree.groupname}
        />
         <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Tình trạng cây"
          secondaryText={infoTree.status}
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Lượng nước đang có"
          secondaryText={infoTree.waternow +"ml"}
        />
         <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Lượng nước cần"
          secondaryText={infoTree.waterneed +"ml"}
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Tuổi đời"
          secondaryText={infoTree.age}
        />
          {/* <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Nguồn gốc"
          secondaryText={begin.}
        /> */}
        </List>
      </CardText>
      <CardActions>
        <FlatButton onClick={this.openModal.bind(this)} label="Tưới cây" />
        <FlatButton label="Phản hồi" />
      </CardActions>
      <ModalTree open ={this.state.openModal} close={this.close.bind(this)}/>
    </Card>
    )
  }
}
export default CardExampleWithAvatar;