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

  handleOpen = () => {
    this.setState({open: true});
  };
  componentWillReceiveProps(nextProps) {
     console.log('willl');
  // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
  }
  handleClose = () => {
      console.log('close modal list friends');
    this.props.handleClose();
  };

  render() {
    const actions = [
      <FlatButton
        label="Thoát"
        primary={true}
        onClick={this.handleClose}
      />
     
    ];

   

    return (
      <div>
 
        <Dialog
          title="Danh sách bạn bè"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <ListFriends />
        </Dialog>
      </div>
    );
  }
}
module.exports = DialogExampleScrollable;