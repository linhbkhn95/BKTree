import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import {Prompt} from 'react-router-dom'
class ModalTree extends React.Component{
    constructor(props){
      super(props);
      this.state={
        wateruse:0
      }
    }



    handleOpen = () => {
        this.props.close()
      };
    
      handleClose = () => {
        
        this.props.close()
      };
      access = ()=>{
        let self = this
        let wateruse = this.state.wateruse

        this.props.access(wateruse)
      }
      onChange(type,event,index,value) {
        
         this.state[type] = event.target.value
        
        this.setState(this.state
        )
      }
    render(){
        const actions = [
            <FlatButton
              label="Thoát"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Đồng ý"
              primary={true}
              keyboardFocused={true}
              onClick={this.access}
            />,
          ];
        return(
            <Dialog
            title="Lượng nước tưới"
            actions={actions}
            modal={false}
            open={this.props.open}
          
            onRequestClose={this.handleClose}
          >

             <TextField
               value={this.state.wateruse}
                 onChange={this.onChange.bind(this,'wateruse')}
      hintText="Lượng nước tưới cho cây"
      floatingLabelText="Nước(mml)"
      type="number"
    /><br />
          </Dialog>
        )
    }
}
module.exports = ModalTree