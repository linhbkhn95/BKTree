import React from 'react';


import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPublic from 'material-ui-icons/Public';
import MapsSecurity from 'material-ui-icons/Security';
import MapsWWork from 'material-ui-icons/Work';
import General from './components/General.js';
import RadioButtonExampleSimple from './components/RadioButtonGroupCustom.js';


import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {connect} from 'react-redux';
import {setBackgroup_Nav,setTitleHeader_Nav,setBackgroup_Body} from 'app/action/actionSettings.js';

import RaisedButton from 'material-ui/RaisedButton';


import { SketchPicker,SliderPicker,HuePicker } from 'react-color';

class Color extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        style={{position:"absolute",display:"none"}} 
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}


class Settings extends React.Component{
  onChange(value){
    var {dispatch} = this.props;
    dispatch(setBackgroup_Nav(value));
  
  }
  onChangeBackgroupBody(value){
    var {dispatch} = this.props;
    dispatch(setBackgroup_Body(value));
 
  }
  onChangeTitile(e,value){
   // console.log(value);
  }
  change(){
    var {dispatch} = this.props;
    dispatch(setTitleHeader_Nav(this.refs.titleHeader.getValue()));
    
   
  }
  render(){
    const style = {
      margin: 12,
    };
    return(
       <div style={{paddingTop:"10px"}}>
         <div>
           
           
              <div className="col-md-3"> 
                  <div className="title-setting" > Backgroup  Nav </div>
                  <div className="col-md-12"><RadioButtonExampleSimple onChange={this.onChange.bind(this)} /></div>
              </div>
              <div className="col-md-3"> 
                  <div className="title-setting" >Backgroup Body Website </div>
                  <div className="col-md-12"><RadioButtonExampleSimple onChange={this.onChangeBackgroupBody.bind(this)} /></div>
              </div>
              <div className="col-md-3"> 
                  <div className="title-setting" >Backgroup Slide Menu Left  </div>
                  <div className="col-md-12"><RadioButtonExampleSimple /></div>
              </div>
              <div className="col-md-3"> 
                  <div className="title-setting" >Color Nav  </div>
                  <div className="col-md-12"><RadioButtonExampleSimple /></div>
              </div>
         </div>
    
         
          <div className="col-md-3"> 
              <div className="title-setting" >Name Header Website</div>
              <div className="col-md-12">
                 <TextField
                   ref="titleHeader"
                    onChange={this.onChangeTitile.bind(this)}
                     style={{fontSize:"12px"}} 
                    hintText="Nhập từ tìm kiếm"
                    floatingLabelText="Tìm kiếm"
                 
                  />
            </div>
          </div>
          <br />
          <div className="col-md-12" style={{textAlign:"center"}}>
               <RaisedButton label="Thay đổi" primary={true} onClick={this.change.bind(this)} style={style} />
               <RaisedButton label="Làm mới" secondary={true} style={style} />
          </div>
       </div>
    );
  }
}

module.exports = connect(function(state){
  return{
       
        };
  
}) (Settings);
