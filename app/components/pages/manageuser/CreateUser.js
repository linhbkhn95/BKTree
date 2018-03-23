import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';


class CreateUSer extends React.Component{
    constructor(props){
        super(props);
        const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);
        this.state={
             data:{
                address:{
                    errorText:'',
                    value:''

                },
                username:{
                    errorText:'',
                    value:''

                },
                fullname:{
                    errorText:'',
                    value:''

                },
                sex:{
                    errorText:'',
                    value:null

                },
                minDate: minDate,
                maxDate: maxDate,
                autoOk: false,
                disableYearSelection: false,
             }
        }
    }
    handleChangeMinDate = (event, date) => {
        this.setState({
          minDate: date,
        });
      };
    
      handleChangeMaxDate = (event, date) => {
        this.setState({
          maxDate: date,
        });
      };
    
      handleToggle = (event, toggled) => {
        this.setState({
          [event.target.name]: toggled,
        });
      };
    
    onChange(type,event,index,value) {
        if(!value){
            this.state.data[type].value = event.target.value
            if (event.target.value=="") {
                this.state.data[type].errorText = 'This field is required'
            
            } else {
                this.state.data[type].errorText = ''
            }
        }
        else{
            this.state.data[type].value = value
        }
        this.setState({data:this.state.data})
      }
    render(){

    return(
  <div>
    {/* <TextField
      hintText="Styled Hint Text"
      hintStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom error color"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom Underline Color"
      underlineStyle={styles.underlineStyle}
    /><br />
    <TextField
      hintText="Custom Underline Focus Color"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
    <TextField
      floatingLabelText="Styled Floating Label Text"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /> */}
    <div className="col-md-6" >
                     <TextField
                          errorText={this.state.data.username.errorText}
                          required={true} 
                          hintText="Mã nhân viên"
                        //   ref="username"
                          onChange={this.onChange.bind(this,'username')}
                          floatingLabelText="Mã nhân viên"
                    /><br />
                   <TextField
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Họ tên"
                        //   ref="username"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br />
                    <SelectField
                            floatingLabelText="Giới tính"
                            value={this.state.data.sex.value}
                            onChange={this.onChange.bind(this,'sex')}
                            >
                            <MenuItem value={null} primaryText="" />
                            <MenuItem value='male' primaryText="Nam" />
                            <MenuItem value='female' primaryText="Nữ" />
                            </SelectField>
                    <br />
                   <TextField
                      errorText={this.state.data.address.errorText}
                      onChange={this.onChange.bind(this,"address")}
                      required={true} 
                      hintText="Địa chỉ"
                      floatingLabelText="Địa chỉ"
                    //   ref="password"
                    //   type="password"
                    /><br />
                    </div>
                    <div className="col-md-6" >
                     <TextField
                          errorText={this.state.data.username.errorText}
                          required={true} 
                          hintText="Số chứng minh thư nhân dân"
                        //   ref="username"
                          onChange={this.onChange.bind(this,'cmtnd')}
                          floatingLabelText="Số chứng minh thư nhân dân"
                    /><br />
                   <TextField
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Số điện thoại liên hệ"
                        //   ref="username"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Số điện thoại liên hệ"
                    /><br />
                    <SelectField
                            floatingLabelText="Chức vụ"
                            value={this.state.data.sex.value}
                            onChange={this.onChange.bind(this,'sex')}
                            >
                            <MenuItem value={null} primaryText="" />
                            <MenuItem value='nv' primaryText="Nhân viên tưới cây" />
                            <MenuItem value='ql' primaryText="Quản lý" />
                            <MenuItem value='bv' primaryText="Bảo vệ" />

                            </SelectField>
                    <br />
                    <DatePicker
          floatingLabelText="Ngày sinh"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        /><br />
                    </div>
                    
  </div>
)   
    }
}

export default CreateUSer;