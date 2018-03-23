 import React from 'react';
 import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ModalCreateAlert from './ModalCreateAlert.js';

// import {Tabs, Tab} from 'material-ui/Tabs';
// import FontIcon from 'material-ui/FontIcon';
// import MapsPublic from 'material-ui-icons/Public';
// import MapsSecurity from 'material-ui-icons/Security';
// import MapsWWork from 'material-ui-icons/Work';
// const TabsExampleIconText = () => (
//   <Tabs>
//     <Tab
//       icon={<MapsPublic />}
//       label="Hệ thống chung"
//     />
//     <Tab
//       icon={<MapsSecurity />}
//       label="An ninh"
//     />
//     <Tab
//       icon={<MapsWWork />}
//       label="Thống kê Logs"
//     />
//   </Tabs>
// );

// export default TabsExampleIconText;

// var ReactD3 = require('react-d3-components');
// var BarChart = ReactD3.BarChart;
 
// var data = [{
//     label: 'Số lượng sự kiện',
//     values: [{x: '22:00', y: 1000}, {x: '1:00', y: 3004}, {x: '2:00', y: 3500}]
// }];
// const TabsExampleIconText = () => (
//     <BarChart
//         data={data}
//         width={1000}
//         height={100}
//         margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
  
// );
// export default TabsExampleIconText;
import Divider from 'material-ui/Divider';
var Recharts = require('recharts');
var AxisLabel = require('./AxisLabel.js');
var CustomToolTip = require('./CustomToolTip.js');
const {PropTypes} = React;
const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
      {time: '02:00', uv: 4000, event: 2400, male: 2400},
      {time: '04:00', uv: 3000, event: 1398, male: 2210},
      {time: '06:00', uv: 2000, event: 9800, male: 2290},
      {time: '08:00', uv: 2780, event: 3908, male: 2000},
      {time: '10:00', uv: 1890, event: 4800, male: 2181},
      {time: '12:00', uv: 2390, event: 3800, male: 2500},
      {time: '0:00', uv: 3490, event: 4300, male: 2100},
      {time: '02:00', uv: 4000, event: 2400, male: 2400},
      {time: '04:00', uv: 3000, event: 1398, male: 2210},
      {time: '06:00', uv: 2000, event: 9800, male: 2290},
      {time: '08:00', uv: 2780, event: 3908, male: 2000},
      {time: '10:00', uv: 1890, event: 4800, male: 2181},
      {time: '12:00', uv: 2390, event: 3800, male: 2500},
      {time: '0:00', uv: 3490, event: 4300, male: 2100},
      {time: '02:00', uv: 4000, event: 2400, male: 2400},
      {time: '04:00', uv: 3000, event: 1398, male: 2210},
      {time: '06:00', uv: 2000, event: 9800, male: 2290},
      {time: '08:00', uv: 2780, event: 3908, male: 2000},
      {time: '10:00', uv: 1890, event: 4800, male: 2181},
      {time: '12:00', uv: 2390, event: 3800, male: 2500},
      {time: '0:00', uv: 3490, event: 4300, male: 2100}
];
var count=0;
var times =["00:00","02:00","04:00","06:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};
// const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
//   const isVert = axisType === 'yAxis';
//   const cx = isVert ? x : x + (width / 2);
//   const cy = isVert ? (height / 2) + y : y + height + 10;
//   const rot = isVert ? `270 ${cx} ${cy}` : 0;
//   console.log(cx +':'+cy);
//   return (
//     <text>
//       {children}
//     </text>
//   );
// };
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
const CustomizedLabel = React.createClass({
  render () {
    const {x, y, stroke, value} = this.props;
		// console.log(value);
   	return <text x={x} y={y} dx={650} dy={10} fill={stroke} fontSize={12} textAnchor="middle">{value}</text>
  }
});

const CustomShapeBarChart = React.createClass({
  
 getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
},

  componentDidMount(){
   var that=this;
     
  },
  getInitialState(){
    
    return{       
       value:1,
       open:false,
       data: data
    }
  },
  cancel(){
    this.setState({open:false});
  },
  create(){
    this.setState({open:false});
  },
  openModal(){
    this.setState({open:true});
    
  },
  handleChange(event, index, value){ this.setState({value})},
	render () {
  	return (
      <div className="row">
          <div className="col-md-12">
             <div className="col-md-3 col-md-offset-2 ">
               <SelectField
                    style={{fontSize:"12px"}} 
                    floatingLabelText="Chọn agent*"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={1} primaryText="Tất cả các Agents" />
                    <MenuItem value={2} primaryText="Webassitant" />
                 
                  </SelectField>
              </div>
              <div className="col-md-3">
                 <TextField
                     style={{fontSize:"12px"}} 
                    hintText="Nhập từ tìm kiếm"
                    floatingLabelText="Tìm kiếm"
                 
                  />
              </div>
              <div className="col-md-1 btn-search-eventlog">
                      <RaisedButton labelStyle={{fontSize:"12px"}}  label="Tìm kiếm" primary={true}  />
              </div>
              <div className="col-md-2 btn-search-eventlog">
                      <RaisedButton labelStyle={{fontSize:"12px"}} onClick={this.openModal} label="Tạo cảnh báo" secondary={true}  />
              </div>
      </div>
      {/* <Divider/> */}
        <div className="col-md-12" style={{paddingTop:"31px"}}>
          <BarChart width={1300} height={100} data={this.state.data}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis  label={<CustomizedLabel value="Thống kê sự kiện log"/>} dataKey="time"/>
          <YAxis label={<AxisLabel axisType='yAxis'>Số lượng sự kiện</AxisLabel>} />
          <Tooltip />
            {/* <Tooltip content={<CustomToolTip/>}/> */}
          {/* <CartesianGrid strokeDasharray="3 3"/> */}
          <Bar dataKey="event" fill="#8884d8" shape={<TriangleBar/>}/>
          </BarChart>
        </div>
        <ModalCreateAlert cancel={this.cancel} create={this.create} open={this.state.open} />
      </div>
    );
  }
})
export default CustomShapeBarChart;