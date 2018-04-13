import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {login} from 'app/action/actionUserName';
import {connect} from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import axios from 'axios'
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import {setTitlePage} from 'app/action/actionTitlePage'
const style = {
  
  
 margin:5
};
class Login extends React.Component{ 
 
     constructor(props) {
        super(props);

        this.state = {
            data:{
              password:{
                errorText:'',
                value:''

            },
          
            username:{
                errorText:'',
                value:''

            },
            }
        };
      }
      componentWillMount(){
        
      }
      componentDidMount(){
        let self = this
        axios.get('/auth/get_session')
        .then((res)=>{
           if(res.data.EC==0){
             self.props.history.push('/list-tree');

           }
           else{
            localStorage.removeItem('jwToken');
    
           }
        })
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
    register(){
      this.props.history.push('/register');     
    }
    login(){
         var {dispatch} = this.props;
         let {username,password} = this.state.data
        let self = this
         if(username.value!=''&&password.value!=''){
             axios.post('/auth/login',{username:username.value,password:password.value})
             .then((res)=>{
                  if(res.data.EC==0){
                    localStorage.setItem('jwToken',res.data.DT.token);
                    setAuthorizationToken(res.data.DT.token);
                    dispatch(setCurrentUser(jwtDecode(res.data.DT.token)));
                     self.props.history.push('/list-tree');                  
                  }
                  else{
                    self.setState({err_msg:res.data.DT})
                  }
             })
         }
        // console.log(this.refs.username.getValue()+' ' +this.refs.password.getValue());
        // dispatch(login(this.refs.username.getValue()));
        // this.props.history.push('/');
    }
    // _handleTextFieldChange: function(e) {
    //     this.setState({
    //         textFieldValue: e.target.value
    //     });
    // }
   render(){
    let {username,password} = this.state.data
    let disabled = username.value==""||!username.value||!password.value

       return(
         
         <div style={{paddingTop:"34px"}} className=" col-md-4 col-sm-8 col-sm-push-2 col-md-push-4 col-xs-12">
             {/* <LinearProgress mode="indeterminate" /> */}
            {/* <Paper zDepth={5}> */}
                <div>
                  {/* <div className="head">Form Login</div>    */}
                </div>
                <div className="" style={{ }}>
                   <TextField
                          errorText={this.state.data.username.errorText}
                          required={true} 
                          hintText="Tên đăng nhập"
                          ref="username"
                          fullWidth={true}
                          onChange={this.onChange.bind(this,'username')}
                          floatingLabelText="Tên đăng nhập"
                    /><br />
                
                   <TextField
                      errorText={this.state.data.password.errorText}
                      onChange={this.onChange.bind(this,'password')}
                      required={true} 
                      hintText="Mật khẩu"
                      floatingLabelText="Mật khẩu"
                      ref="password"
                      fullWidth={true}

                      type="password"
                    /><br />
                     <div style={{padding:"10px",color:'red'}}>
                            {this.state.err_msg}
                    </div>
                    <div >
                       <Divider />
                        <div>
                        <RaisedButton fullWidth={true} disabled={disabled} onClick={this.login.bind(this)} label="Đăng nhập" primary={true} style={style} />
                        <div style={{textAlign:"center"}}>Nêu chưa có tài khoản thì hãy</div> <RaisedButton onClick={this.register.bind(this)} fullWidth={true} label="Đăng kí" secondary={true} style={style} />
                        </div>
                      </div>
                 </div>
              {/* </Paper> */}

        </div>
    );
  }
}



 module.exports = connect(function(state){return{}})(Login);