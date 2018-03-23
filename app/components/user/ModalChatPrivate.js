import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ListFriends from './ListFriends';
const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
class DialogExampleScrollable extends React.Component {
  state = {
    open: false,
  };


handleClose(){


  
               this.props.close();
     
  }
  render() {
    const actions = [
      <FlatButton
        label="Sử dụng micro"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />
     
    ];

   

    return (
      <div>
 
        <Dialog
          title="Trò chuyện"
          actions={actions}
          modal={false}
          open={this.props.open}
        
          autoScrollBodyContent={true}
        >
         viết gì ở đây
        </Dialog>
      </div>
    );
  }
}
module.exports = DialogExampleScrollable;