import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
const style = {
  
  
    margin:5
   };
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
                password:{
                    errorText:'',
                    value:''

                },
                confirmPassword:{
                    errorText:'',
                    value:''
                },
                us:{
                    errorText:'',
                    value:''

                },
                fullname:{
                    errorText:'',
                    value:''

                },
                sex:{
                    errorText:'',
                    value:''

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
        console.log(type,event,index,value)
        if(!value){
            this.state.data[type].value = event.target.value
            if (event.target.value=="") {
                this.state.data[type].errorText = 'Trương này không được bỏ trống'
            
            } else {
                this.state.data[type].errorText = ''
            }
        }
        else{
            this.state.data[type].value = event.target.value
        }
        this.setState({data:this.state.data})
      }
    validate(){

    }
    getDataRegister(){

    }
    register(){
        let data = this.state.data
        let self = this
        let username = data.username.value ;
        let password = data.password.value ;
        let confirmPassword = data.confirmPassword.value
        if(username!=''&&password!=''&&confirmPassword!=''){
            if(data.password!=data.confirmPassword){
                this.setState({err_msg:'Mật khẩu không khớp'})
            }
            else{
                axios.post('/user/create',{username,password,confirmPassword})
                .then((res)=>{
                    if(res.data.EC==0){
                        console.log(res.data)
                    }
                    else{
                        self.setState({err_msg:res.data.EM})
                    }
                })
            }
        }
        else{
            this.setState({err_msg:'Chưa điền đủ thông tin'})

        }
    }
    render(){

    return(
  <div>
    
    <div className="col-md-6" >
                        
                 {/* <TextField
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Họ tên"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br /> */}
                             <TextField           errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Tên đăng nhập"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên" 
                          />
                          <br />
                     <TextField
                      errorText={this.state.data.password.errorText}
                      onChange={this.onChange.bind(this,'password')}                     
                       required={true} 
                      hintText="Mật khẩu"
                      floatingLabelText="Mật khẩu"
                     
                      type="password"
                    /><br />
                    
                    <TextField
                      errorText={this.state.data.confirmPassword.errorText}
                      onChange={this.onChange.bind(this,'confirmPassword')}                     

                      required={true} 
                      hintText="Nhập lại mật khẩu"
                      floatingLabelText="Nhập lại mật khẩu"
                    
                      type="password"
                    /><br />
                    
       
       
                    </div>
                    <div className="col-md-6" >
                     
                    <TextField
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Họ tên"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br />
                    <SelectField
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
          floatingLabelText="Ngày sinh"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        /><br />
                    </div>
                    <div style={{padding:"20px",color:'red'}}>
                            {this.state.err_msg}
                    </div>
                    <div style={{padding:"20px"}}>
                       <Divider />
                        <div style={{padding:"20px"}}>
                        <RaisedButton onClick={this.register.bind(this)} disabled={(this.state.data.us.value=""||this.state.data.password.value==="")} label="Đăng kí" primary={true} style={style} />
                        </div>
                      </div>
                    
  </div>
)   
    }
}

export default CreateUSer;