import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {connect} from 'react-redux'
const style = {
  
  
    margin:5
   };
class ChangePass extends React.Component{
    constructor(props){
        super(props);
        const minDate = new Date();
   
        this.state={
             data:{
               
                password:{
                    errorText:'',
                    value:''

                },
                newpassword:{
                    errorText:'',
                    value:''

                },
                renewpassword:{
                    errorText:'',
                    value:''

                },
              
             }
        }
    }
    
      onChange(type,event,index,value) {
        if(!value){
            this.state.data[type].value = event.target.value
            if (event.target.value=="") {
                this.state.data[type].errorText = 'Trường này không được bỏ trống'
            
            } else {
                this.state.data[type].errorText = ''
            }
        }
        else{
            this.state.data[type].value = value
        }
        this.setState({data:this.state.data})
      }
    validate(){

    }
    getDataRegister(){

    }
    goback(){
        this.context.router.history.goBack()
     }
    changePass(){
        let data = this.state.data
        let self = this
        let password = data.password.value ;
        let newpassword = data.newpassword.value ;
        let renewpassword = data.renewpassword.value
      
        let validate = newpassword==""||renewpassword==""||password==""

        if(!validate){
           
           if(newpassword==renewpassword)
                axios.post('/user/change_pass',{password,newpassword,renewpassword})
                .then((res)=>{
                    if(res.data.EC==0){
                        toast.success('Thay đổi mật khẩu thành công', {
                            position: toast.POSITION.TOP_CENTER
                        });
                        self.goback()
                    }
                    else{
                        self.setState({err_msg:res.data.DT})
                    }
                })
            else{
                self.setState({err_msg:'Mật khẩu mới không trùng nhau'})
            }
        }
        else{
            this.setState({err_msg:'Chưa điền đủ thông tin'})

        }
    }
   
    render(){
        let {password,renewpassword,newpassword} = this.state.data
    let disabled = newpassword.value==""||renewpassword.value==""||password.value==""
    return(
  <div>
    
    <div className=" col-md-4 col-sm-8 col-sm-push-2 col-md-push-4 col-xs-12" >
                        
                 {/* <TextField
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Họ tên"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br /> */}
                           
                    
                      <TextField  
                       fullWidth={true}   
                       errorText={this.state.data.password.errorText}
     
                          required={true} 
                          hintText="Mật khẩu cũ "
                          type="password"
                          value={this.state.data.password.value}
                          onChange={this.onChange.bind(this,'password')}
                          floatingLabelText="Mật khẩu cũ" 
                          />
                          <br />
                
                   
       
                
                   
                     
                    <TextField
                     fullWidth={true}
                          errorText={this.state.data.newpassword.errorText}
                          required={true} 
                          type="password"

                          hintText="Mật khẩu mới"
                          value={this.state.data.newpassword.value}
                          onChange={this.onChange.bind(this,'newpassword')}
                          floatingLabelText="Mật khẩu mới"
                    /><br />
                           
                           <TextField
                            type="password"

                     fullWidth={true}
                          errorText={this.state.data.renewpassword.errorText}
                          required={true} 
                          hintText="Nhập lại mật khẩu mới"
                          value={this.state.data.renewpassword.value}
                          onChange={this.onChange.bind(this,'renewpassword')}
                          floatingLabelText="Nhập lại mật khẩu mới"
                    /><br />
                  
                    <div style={{color:'red'}}>
                            {this.state.err_msg}
                    </div>
                 
                       {/* <Divider /> */}
                        <div className="row" >
                        <RaisedButton  fullWidth={true} onClick={this.changePass.bind(this)} disabled={disabled} label="Thay đổi mật khẩu" primary={true} style={style} />
                        </div>
                      </div>
                    
  </div>
)   
    }
}
ChangePass.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
module.exports =connect(function(state){
    return{
        auth:state.auth
    }
}) (ChangePass);