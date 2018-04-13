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
class EditProfile extends React.Component{
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
                    value:''

                },
                address:{
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
    updateProfile(){
        let data = this.state.data
        let self = this
        let username = data.username.value ;
        let fullname = data.fullname.value ;
        let address = data.address.value
        let sex = data.sex.value ;

        if(fullname!=''||!fullname){
           
          
                axios.post('/user/updateProfile',{username,fullname,address,sex})
                .then((res)=>{
                    if(res.data.EC==0){
                        toast.success('Cập nhật thành công', {
                            position: toast.POSITION.TOP_CENTER
                        });
                        self.goback()
                    }
                    else{
                        self.setState({err_msg:res.data.EM})
                    }
                })
            
        }
        else{
            this.setState({err_msg:'Chưa điền đủ thông tin'})

        }
    }
    componentDidMount(){
        let self = this
        let username = this.props.username
        if(username)
          axios.post('/user/get_detail',{username})
          .then((res)=>{
              if(res.data.EC==0){
                let data = res.data.DT   
                // Object.keys(res.data.DT).map(function(objectKey, index) {
                //     console.log(res.data.DT)
                //     self.state.data[objectKey].value = res.data.DT[objectKey];
                    
                // });'
                self.state.data.username.value = data.username;
                self.state.data.fullname.value = data.fullname;
                self.state.data.address.value = data.address;
                self.state.data.sex.value = data.sex?data.sex:'tn';

                self.setState({data:self.state.data})
              }
          })
      }
    render(){
        let {username} = this.state.data
    let disabled = username.value==""||!username.value
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
                           
                    
                      <TextField  
                       fullWidth={true}        
                          required={true} 
                          hintText="Tên đăng nhập"
                          value={this.state.data.username.value}
                          disabled={true}
                          onChange={this.onChange.bind(this,'username')}
                          floatingLabelText="Tên đăng nhập" 
                          />
                          <br />
                
                   
       
                    </div>
                    <div className="col-md-6" >
                     
                    <TextField
                     fullWidth={true}
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Họ tên"
                          value={this.state.data.fullname.value}
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br />
                           
                           <TextField
                     fullWidth={true}
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Địa chỉ"
                          value={this.state.data.address.value}
                          onChange={this.onChange.bind(this,'address')}
                          floatingLabelText="Địa chỉ"
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
                    </div>
                    <div style={{color:'red'}}>
                            {this.state.err_msg}
                    </div>
                    <div >
                       <Divider />
                        <div >
                        <RaisedButton  fullWidth={true} onClick={this.updateProfile.bind(this)} disabled={disabled} label="Cập nhật thông tin" primary={true} style={style} />
                        </div>
                      </div>
                    
  </div>
)   
    }
}
EditProfile.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
module.exports =connect(function(state){
    return{
        auth:state.auth
    }
}) (EditProfile);