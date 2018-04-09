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
class CardExampleWithAvatar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      openModal:false
    }
  }
  openModal(){
      this.setState({openModal:true})
  }
  close(){
    this.setState({openModal:false})

  }
  render(){
    return(
      <Card>
      {/* <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
      /> */}
      <CardMedia
        overlay={<CardTitle title="MAD222" subtitle="Khế ta" />}
      >
        <img src="images/tree/khe.jpg" alt="" />
      </CardMedia>
      {/* <CardTitle title="Khế ta" subtitle="MSDAAA1" /> */}
      <CardText>
      <List>
        <Subheader inset={true}>Chi tiết</Subheader>
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Mã cây"
          secondaryText="MDSSAA"
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Loại cây"
          secondaryText="Khế ta"
        />
         <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Tình trạng cây"
          secondaryText="tốt"
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Lượng nước đang có"
          secondaryText="250ml"
        />
         <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Lượng nước cần"
          secondaryText="280ml"
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Tuổi đời"
          secondaryText="5 tháng"
        />
          <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Nguồn gốc"
          secondaryText="Việt Nam"
        />
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