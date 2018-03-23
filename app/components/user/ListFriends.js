import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ModalChatPrivate from './ModalChatPrivate.js';
class ListExampleChat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false
          
        }
    }
    openChat(){
        this.setState({open:true});
    }
    handleClose(){


    
    var that =this;
   
   
    var recognition = new webkitSpeechRecognition();
     console.log(recognition);
   // recognition.continuous = true;
    recognition.lang= "vi-VN";
    
  //  console.log(recognition);
    recognition.onresult = function(e) {
      console.log(e);
     var rs = event.results[event.results.length-1]
      if(event.results.length>0){
         var rs = event.results[event.results.length-1];
         //kiem tra nguoi ns ket thuc câu
         if(rs.isFinal){
           console.log(rs[0].transcript);
            alert(rs[0].transcript);
            if(rs[0].transcript==="trò chuyện"){
                if(!that.state.open){
                   that.setState({open:true});
                     alert('bật:');
                }
             
            }
            if(rs[0].transcript==="tắt"){
               that.setState({open:false});
                alert('tắt')
            }
         }
      }
    //  output.textContent = event.results[0][0].transcript;
    }
     recognition.start();
  }
   close(){
       this.setState({open:false});
   }
    render(){
        return(
           <div>
               <FlatButton
                    label="Sử dụng giọng nói"
                    primary={true}
                    onClick={this.handleClose.bind(this)}
                />
     
                <ModalChatPrivate close={this.close.bind(this)} open={this.state.open} />
                <List>
                    <Subheader>Trò chuyện gần đây</Subheader>
                    <ListItem
                        primaryText="Linh đẹp trai"
                        onClick={this.openChat.bind(this)}
                        leftAvatar={<Avatar src="images/anhdaidienlinh.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Dương óc"
                        leftAvatar={<Avatar src="images/anhdaidienduong.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Xuân xinh gái"
                        leftAvatar={<Avatar src="images/anhdaidienxuan.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Linh"
                        leftAvatar={<Avatar src="images/anhdaidienlinh.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Â"
                        leftAvatar={<Avatar src="images/anhdaidienlinh.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    </List>
                    <Divider />
                    <List>
                    <Subheader>Các trò chuyện trước</Subheader>
                    <ListItem
                        primaryText="linh đẹp trai"
                        leftAvatar={<Avatar src="images/anhdaidienlinh.jpg" />}
                    />
                    <ListItem
                        primaryText="Xuân xinh gái"
                        leftAvatar={<Avatar src="images/anhdaidienxuan.jpg" />}
                    />
                </List>
    </div>
        )
    }
  
}

module.exports =ListExampleChat;