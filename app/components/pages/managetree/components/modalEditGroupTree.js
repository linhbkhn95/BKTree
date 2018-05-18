import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import {orange500, blue500} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import { ToastContainer, toast } from 'react-toastify';

import {Prompt} from 'react-router-dom'
const style = {
  
  
    margin:5
   };
class ModalTree extends React.Component{
    constructor(props){
      super(props);
      this.state={
        fileName: '',
        file: null,
        
        data:{
               
            groupname:{
                errorText:'',
                value:''

            },
            country:{
                errorText:'',
                value:''

            },
            description:{
                errorText:'',
                value:''

            },
            address:{
                errorText:'',
                value:''
            },
        
         }
      }
    }



    handleOpen = () => {
        this.props.close()
      };
    
      handleClose = () => {
        
        this.props.close()
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
      access(){
        let data = this.state.data
        let self = this
        let groupname = data.groupname.value ;
        let country = data.country.value ;
        let description = data.description.value

        if(groupname!=''||!groupname){
            self.fileUpload(this.state.file).then((response)=>{
                if(response.data.EC==0){
                    toast.success('Thành công', {
                                    position: toast.POSITION.TOP_CENTER
                                });
                        self.props.close()
                }
            })

          
                // axios.post('/group_tree/insert',{groupname,country,description})
                // .then((res)=>{
                //     if(res.data.EC==0){
                //         toast.success('Thành công', {
                //             position: toast.POSITION.TOP_CENTER
                //         });
                       
                //         self.props.close()
                //     }
                //     else{
                //         self.setState({err_msg:res.data.EM})
                //     }
                // })

            
        }
        else{
            this.setState({err_msg:'Chưa điền đủ thông tin'})

        }
        
    }
    componentWillReceiveProps(nextProps){
        let dataEdit = nextProps.dataEdit
        if(dataEdit){
            this.state.data.groupname.value = dataEdit.groupname;
            this.state.data.country.value = dataEdit.country
            this.state.data.description.value = dataEdit.description
            this.state.fileName = dataEdit.url_image
            this.setState(this.state)
        }
        else{
            this.setState({
                fileName: '',
                file: null,
                
                data:{
                       
                    groupname:{
                        errorText:'',
                        value:''
        
                    },
                    country:{
                        errorText:'',
                        value:''
        
                    },
                    description:{
                        errorText:'',
                        value:''
        
                    },
                    address:{
                        errorText:'',
                        value:''
                    },
                }
                })
        }
    }
    _handleChange(e) {
        e.preventDefault();
        let file = e.target.files[0];
        var fileName = file.name;
        this.setState({ file: e.target.files[0], fileName })


    }
    fileUpload(file) {
        const url = '/group_tree/'+this.props.action;
        
        const formData = new FormData();
        formData.append('file', file);
            formData.append('groupname',this.state.data.groupname.value)
               formData.append(    'country',this.state.data.country.value)
                  formData.append( 'description',this.state.data.description.value)
                  formData.append( 'grouptree_id',this.props.dataEdit?this.props.dataEdit.id:"")
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                //  groupname:this.state.data.groupname.value,
                //  country:this.state.data.country.value,
                //  description:this.state.data.description.value,
                //  grouptree_id:this.props.dataEdit?this.props.dataEdit.id:""

            }
        }
        return axios.post(url,formData,config)
    }
    render(){
        const actions = [
            <FlatButton
              label="Thoát"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label={this.props.action=="insert"?"Thêm":"Cập nhật"}
              primary={true}
              keyboardFocused={true}
              onClick={this.access.bind(this)}
            />,
          ];
          let {groupname} = this.state.data
            let disabled = groupname.value==""||!groupname.value

            let titleModal = this.props.action=="insert"?"Thêm nhóm cây":"Cập nhập thông tin nhóm cây"
            
        return(
            <Dialog
            title={titleModal}
            actions={actions}
            modal={false}
            open={this.props.open}
            autoScrollBodyContent={true}
            onRequestClose={this.handleClose}
          >
    
    <div className="" >
                        
                 {/* <TextField
                          errorText={this.state.data.fullname.errorText}
                          required={true} 
                          hintText="Họ tên"
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br /> */}
                           
                    
                    
                     
                    <TextField
                     fullWidth={true}
                          errorText={this.state.data.groupname.errorText}
                          required={true} 
                          hintText="Tên nhóm cây"
                          value={this.state.data.groupname.value}
                          onChange={this.onChange.bind(this,'groupname')}
                          floatingLabelText="Tên nhóm cây"
                    /><br />
                           
                           <TextField
                     fullWidth={true}
                          errorText={this.state.data.country.errorText}
                          required={true} 
                          hintText="Nguồn gốc"
                          value={this.state.data.country.value}
                          onChange={this.onChange.bind(this,'country')}
                          floatingLabelText="Nguồn gốc"
                    /><br />
                 
                     <TextField
                     fullWidth={true}
                          hintText="Mô tả"
                          value={this.state.data.description.value}
                          onChange={this.onChange.bind(this,'description')}
                          floatingLabelText="Mô tả"
                    /><br />
                 
                     <div className="col-md-2 row">
                            <h5 className="input-material">Ảnh cây</h5>
                        </div>

                        <div style={{color:"#56bcd5"}} className="col-md-6 input-file">
                            {/* <input type="text" className="form-control" style={{ position: "relative" }} placeholder="Chọn đường dẫn" value={this.state.fileName} disabled />
                            <label className="btn btn-default glyphicon glyphicon-cloud-upload" style={{ padding: "5px 10px", fontSize: "14px", position: "absolute", right: "-22px" }}>
                                <input type="file" accept=".jpg,.png" className="inputfile" onChange={this._handleChange.bind(this)} />
                            </label> */}
                            {this.state.fileName}
                            <span style={{marginLeft:"20px"}} className="btn btn-default btn-file">
    Chọn ảnh <input onChange={this._handleChange.bind(this)} type="file" />
</span>
                        </div>

                  
                    <div style={{color:'red'}}>
                            {this.state.err_msg}
                    </div>
                
                    </div>

            
          </Dialog>
        )
    }
}
module.exports = ModalTree