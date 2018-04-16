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
               
            grouptree_id:'',
             
            code:'',
               
            waterneed:0,
            waternow:0,
            description:'',
            
             
         },
         listGroupTree:[]
         
      }
    }


    refresh(){
        this.setState({
                
            data:{
                grouptree_id:'',
             
                code:'',
                
                waterneed:'',
                waternow:'',
                description:'',
            }
        })
    }
    handleOpen = () => {
        this.props.close()
      };
    
      handleClose = () => {
        
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

        let urlApi = '/tree/'+this.props.action
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
        if(dataEdit&&dataEdit.grouptree_id){
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
        const url = '/group_tree/'+this.props.action;
        
        const formData = new FormData();
        formData.append('file', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                 groupname:this.state.data.groupname.value,
                 country:this.state.data.country.value,
                 description:this.state.data.description.value,
                 grouptree_id:this.props.dataEdit?this.props.dataEdit.id:""

            }
        }
        return axios.post(url,formData,config)
    }

    componentDidMount(){
        let that = this
          axios.post('/group_tree/getlist_options'
            ).then(res => {
                that.setState({ listGroupTree: res.data });
            });
    }
    renderOptionGroupTree(){
           const items = [];
            for (let i = 0; i < this.state.listGroupTree.length; i++ ) {
            items.push(<MenuItem value={this.state.listGroupTree[i].id} key={i} primaryText={this.state.listGroupTree[i].groupname} />);
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

            let titleModal = this.props.action=="insert"?"Thêm  cây":"Cập nhập thông tin  cây"
            
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
                           
                    
                    
                     
                    <SelectField
                     fullWidth={true}
                         required={true} 
                          value={this.state.data.grouptree_id}
                          onChange={this.onChange.bind(this,'grouptree_id')}
                          floatingLabelText="Nhóm cây"
                        //   errorText={this.state.data.groupname==''?'Trường này không được để trống':''}
                          >{this.renderOptionGroupTree()}
                          </SelectField>
                    <br />
                           
                           <TextField
                         fullWidth={true}
                        //   errorText={this.state.data.code==''?'Trường này không được để trống':''}
                          required={true} 
                          hintText="Mã cây"
                          value={this.state.data.code}
                          onChange={this.onChange.bind(this,'code')}
                          floatingLabelText="Mã cây"
                    /><br />
                   <TextField
                         fullWidth={true}
                          hintText="Lượng nước cần"
                          value={this.state.data.waterneed}
                          onChange={this.onChange.bind(this,'waterneed')}
                          floatingLabelText="Lượng nước cần(mml)"
                          type="number"
                    /><br />
                      <TextField
                         fullWidth={true}
                          hintText="Lượng nước đang có"
                          value={this.state.data.waternow}
                          onChange={this.onChange.bind(this,'waternow')}
                          floatingLabelText="Lượng nước đang có(mml)"
                          type="number"
                    /><br />
                     <TextField
                         fullWidth={true}
                          hintText="Mô tả"
                          value={this.state.data.description}
                          onChange={this.onChange.bind(this,'description')}
                          floatingLabelText="Mô tả"
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