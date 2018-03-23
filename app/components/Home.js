import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ActionLike from 'material-ui-icons/ThumbUp';
import ActionShare from 'material-ui-icons/Share';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
class CardExampleWithAvatar extends React.Component{
  constructor(props){
    super(props);
    this.state={
       like:false
    }
  }
  RunFile() {
    var WshShell = new ActiveXObject("WScript.Shell");
    WshShell.Run("c:/windows/system32/notepad.exe", 1, false);
    }
  like(){


    
    // var that =this;
    // var msg = new SpeechSynthesisUtterance('Linh đẹp trại');
    //  console.log(msg);
    //     msg.lang = 'vn'
       
    //     console.log(SpeechSynthesisUtterance);
    //   window.speechSynthesis.speak(msg);
      console.log('like');
    this.setState({like:!this.state.like});
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
            // if(rs[0].transcript==="tắt máy"){
            //   that.RunFile();
            // }
         }
      }
    //  output.textContent = event.results[0][0].transcript;
    }
    recognition.start();
  }
  render(){
    var that=this;
    return(
        <Card>
          <CardHeader
            title="Xuân Nguyễn"
            subtitle="Gấu chó"
            avatar="images/xuan.jpg"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="images/linh.jpg" alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <Divider />
          <CardActions>
            <IconButton iconStyle={{fill:that.state.like ? "rgb(88, 144, 255)":"black"}} onClick={this.like.bind(this)}  >   <ActionLike style={{fill:that.state.like ? "blue":"none"}} /></IconButton>
            <IconButton>   <ActionShare /></IconButton>
          </CardActions>
          <Divider />
        </Card>
    )
  }
  
}

module.exports =  CardExampleWithAvatar;