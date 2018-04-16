import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.props.close();
  };
  access = () => {
    this.props.access();
  };

  render() {
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

    return (
      <div>
        <Dialog
          title="Xác nhận thông tin"
          actions={actions}
          modal={false}
          open={this.props.show}
          onRequestClose={this.handleClose}
        >
         Bạn có chắc chắn không ?
        </Dialog>
      </div>
    );
  }
}