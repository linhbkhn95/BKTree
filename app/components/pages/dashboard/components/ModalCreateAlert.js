import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

 import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
class ModalCreateAlert extends React.Component {
  state={
      value:1
  }
  cancel = () => {
      console.log('close modal list friends');
    this.props.cancel();
  };
   create = () => {
      console.log('close modal list friends');
    this.props.create();
  };
  handleChange(event, index, value){ this.setState({value})}
  render() {
    const actions = [
      <FlatButton
        label="Thoát"
        primary={true}

        onClick={this.cancel.bind(this)}
        />,
        <FlatButton
        label="Tạo"
        keyboardFocused={true}
        secondary={true}
        onClick={this.create.bind(this)}
        />,
     
    ];

   

    return (
      <div>
 
        <Dialog
          titleClassName="title-modal-create-alert"
         
          title="Tạo cảnh báo"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.cancel.bind(this)}
          autoScrollBodyContent={true}
        >
        <div className="content-modal-creat-alert">
                 <TextField
                     style={{fontSize:"12px"}} 
                    hintText="Nhập tên cảnh báo"
                    floatingLabelText="Tên cảnh báo*"
                   
                  />
                  <br />
                    <TextField
                     style={{fontSize:"12px"}} 
                    hintText="Nhập từ câu truy vấn"
                    floatingLabelText="Câu truy vấn*"
                
                  />
                  
                  <br />
                   <TextField
                     style={{fontSize:"12px"}} 
                    hintText="Nhập mô tả cảnh báo"
                    floatingLabelText="Mô tả cảnh báo8"
                   
                  />
                
                
                  <br />
                   <SelectField
                    style={{fontSize:"12px"}} 
                    floatingLabelText="Mức độ cảnh báo*"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={1} primaryText="Cao" />
                    <MenuItem value={2} primaryText="Trung bình" />
                    <MenuItem value={3} primaryText="Thấp" />
                  </SelectField>
        </div>
          
        </Dialog>
      </div>
    );
  }
}
module.exports = ModalCreateAlert;