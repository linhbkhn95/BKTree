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
               
            rolecode:'',
             
            username:'',
               
            fullname:'',
            address:'',
            sex:'',
            
             
         },
         listGroupTree:[]
         
      }
    }


    refresh(){
        this.setState({
                
            data:{
                rolecode:'',
             
                username:'',
                   
                fullname:'',
                address:'',
                sex:'',
            }
        })
    }
    handleOpen = () => {
        this.refresh();
        this.props.close()
      };
    
      handleClose = () => {
        this.refresh();
        this.props.close()
      };
 
      onChange(type,event,index,value) {
        if(!value){
            this.state.data[type] = event.target.value
           
        }
        else{
            this.state.data[type] = value
        }
        this.setState({data:this.state.data})
      }
      access(){
        let data = this.state.data
        let self = this

        let urlApi = '/user/'+this.props.action
        if(data.groupname!=''&&data.code!=''){
            axios.post(urlApi,data)
            .then((res)=>{
                if(res.data.EC==0){
                    toast.success('Thành công', {
                                                position: toast.POSITION.TOP_CENTER
                                            });
                                    self.refresh();
                                    
                                    self.props.close()
                }
                else{
                    self.setState({err_msg:res.data.DT})
                }
            })
            // self.fileUpload(this.state.file).then((response)=>{
            //     if(response.data.EC==0){
            //         toast.success('Thành công', {
            //                         position: toast.POSITION.TOP_CENTER
            //                     });
            //             self.props.close()
            //     }
            // })

          
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
        if(dataEdit&&dataEdit.username){
            this.setState({data:dataEdit})
        }
       
    }
    _handleChange(e) {
        e.preventDefault();
        let file = e.target.files[0];
        var fileName = file.name;
        this.setState({ file: e.target.files[0], fileName })


    }
    fileUpload(file) {
        const url = '/user/'+this.props.action;
        
        const formData = new FormData();
        formData.append('file', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                 groupname:this.state.data.groupname.value,
                 country:this.state.data.country.value,
                 description:this.state.data.description.value,
                 rolecode:this.props.dataEdit?this.props.dataEdit.id:""

            }
        }
        return axios.post(url,formData,config)
    }

    componentDidMount(){
        let that = this
          axios.post('/role/getall'
            ).then(res => {
                that.setState({ listGroupTree: res.data });
            });
    }
    renderOptionGroupTree(){
           const items = [];
            for (let i = 0; i < this.state.listGroupTree.length; i++ ) {
            items.push(<MenuItem value={this.state.listGroupTree[i].rolecode} key={i} primaryText={this.state.listGroupTree[i].rolename} />);
            }
            return items;
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
            let disabled = groupname==""||!groupname

            let titleModal = this.props.action=="insert"?"Thêm người dùng":"Cập nhập thông tin  người dùng"
            
        return(
            <Dialog
            title={titleModal}
            actions={actions}
            modal={false}
            open={this.props.open}
            autoScrollBodyContent={true}
            onRequestClose={this.handleClose}f
          >
    
    <div className="" >
                        
               
                           
                    
                    <TextField
                         fullWidth={true}
                        //   errorText={this.state.data.code==''?'Trường này không được để trống':''}
                          required={true}
                          disabled={this.props.action=="update"}
                          hintText="Tên đăng nhập"
                          value={this.state.data.username}
                          onChange={this.onChange.bind(this,'username')}
                          floatingLabelText="Tên đăng nhập"
                    /><br />
                   <TextField
                         fullWidth={true}
                          hintText="Họ tên"
                          value={this.state.data.fullname}
                          onChange={this.onChange.bind(this,'fullname')}
                          floatingLabelText="Họ tên"
                    /><br />
                     
                    <SelectField
                     fullWidth={true}
                         required={true} 
                          value={this.state.data.rolecode}
                          onChange={this.onChange.bind(this,'rolecode')}
                          floatingLabelText="Chức vụ"
                        //   errorText={this.state.data.groupname==''?'Trường này không được để trống':''}
                          >{this.renderOptionGroupTree()}
                          </SelectField>
                    <br />
                    <SelectField
                     fullWidth={true}
                         required={true} 
                          value={this.state.data.status}
                          onChange={this.onChange.bind(this,'status')}
                          floatingLabelText="Trạng thái"
                        //   errorText={this.state.data.groupname==''?'Trường này không được để trống':''}
                          >
                            <MenuItem value={'Hoạt động'} primaryText="Hoạt động" />
                           <MenuItem value={'Đóng'} primaryText="Đóng" />
                          </SelectField>
                    <br />
                                  
                         
                      <TextField
                         fullWidth={true}
                          hintText="Địa chỉ"
                          value={this.state.data.address}
                          onChange={this.onChange.bind(this,'address')}
                          floatingLabelText="Địa chỉ"
                    /><br />
                    
                 
                     {/* <div className="col-md-2 row">
                            <h5 className="input-material">Ảnh cây</h5>
                        </div>

                        <div style={{color:"#56bcd5"}} className="col-md-6 input-file">
                         
                            {this.state.fileName}
                            <span style={{marginLeft:"20px"}} className="btn btn-default btn-file">
    Chọn ảnh <input onChange={this._handleChange.bind(this)} type="file" />
</span>
                        </div> */}

                  
                    <div style={{color:'red'}}>
                            {this.state.err_msg}
                    </div>
                
                    </div>

            
          </Dialog>
        )
    }
}
module.exports = ModalTree