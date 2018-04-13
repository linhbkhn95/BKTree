import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'

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
            title="Thay đổi thông tin"
            actions={actions}
            modal={false}
            open={this.props.open}
          
            onRequestClose={this.handleClose}
          >
              <TextField  
                       fullWidth={true}        
                          required={true} 
                          hintText="Tên đăng nhập"
                          onChange={this.onChange.bind(this,'username')}
                          floatingLabelText="Tên đăng nhập" 
                          />
                          <br />
                          <TextField
                           fullWidth={true}
                      errorText={this.state.data.password.errorText}
                      onChange={this.onChange.bind(this,'password')}                     
                       required={true} 
                      hintText="Mật khẩu"
                      floatingLabelText="Mật khẩu"
                     
                      type="password"
                    /><br />
                    <TextField
                     fullWidth={true}
                      errorText={this.state.data.confirmPassword.errorText}
                      onChange={this.onChange.bind(this,'confirmPassword')}                     

                      required={true} 
                      hintText="Nhập lại mật khẩu"
                      floatingLabelText="Nhập lại mật khẩu"
                    
                      type="password"
                    /><br />
                    
       
       
                 
                     
                    <TextField
                     fullWidth={true}
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Họ tên"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br />
                    <SelectField
                     fullWidth={true}
                            floatingLabelText="Giới tính"
                            value={this.state.data.sex.value}
                            onChange={this.onChange.bind(this,'sex')}
                            >
                            <MenuItem value={null} primaryText="" />
                            <MenuItem value='tn' primaryText="Nam" />
                            <MenuItem value='xc' primaryText="Nữ" />
                            </SelectField>
                    <br />
                    <DatePicker
                     fullWidth={true}
          floatingLabelText="Ngày sinh"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        /><br />
                  
                    <div style={{color:'red'}}>
                            {this.state.err_msg}
                    </div>
                    <div >
                       <Divider />
                        <div >
                        <RaisedButton  fullWidth={true} onClick={this.register.bind(this)} disabled={disabled} label="Cập nhật thông tin" primary={true} style={style} />
                        </div>
                    </div>
                   
                   
          </Dialog>
        )
    }
}
module.exports = ModalTree