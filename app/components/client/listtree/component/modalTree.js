import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class ModalTree extends React.Component{
    handleOpen = () => {
        this.props.close()
      };
    
      handleClose = () => {
        this.props.close()
      };
    
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
              onClick={this.handleClose}
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
      hintText="Lượng nước tưới cho cây"
      floatingLabelText="Nước(mml)"
      type="number"
    /><br />
          </Dialog>
        )
    }
}
module.exports = ModalTree