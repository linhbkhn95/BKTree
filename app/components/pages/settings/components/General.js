import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import Divider from 'material-ui/Divider';
var Recharts = require('recharts');
// var AxisLabel = require('app/components/pages/eventLog/components/AxisLabel.js');
const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;
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
const SimpleAreaChart = React.createClass({
	render () {
  	return (
    	<AreaChart width={650} height={240} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="time"/>
        <YAxis />
     
        <Tooltip/>
        <Area type='monotone' dataKey='event' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    );
  }
})
class TableExampleSimple extends React.Component{
    state={
        data:[
            {
                time:"3-8-2017 22:25:21",
                name:"Backup File"
            },
            {
                time:"3-8-2017 22:25:21",
                name:"Backup File"
            },
            {
                time:"3-8-2017 22:25:21",
                name:"Backup File"
            },
            {
                time:"3-8-2017 22:25:21",
                name:"Backup File"
            },
            {
                time:"3-8-2017 22:25:21",
                name:"Backup File"
            },
            {
                time:"3-8-2017 22:25:21",
                name:"Backup File"
            },
            {
                time:"3-8-2017 22:25:21",
                name:"Backup File"
            }

        ]
    }
    render(){
        return(
            <Table selectable={false}  multiSelectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                <TableHeaderColumn>Thời gian</TableHeaderColumn>
                <TableHeaderColumn>Cảnh báo</TableHeaderColumn>
                
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {this.state.data.map((row,index) =>{

                    return(
                        <TableRow key={index}>
                            <TableRowColumn>  <div style={{paddingTop:"6px"}} className="col-md-2">
                                                        <div className="glyphicon glyphicon-time" style={{marginRight:"2px"}}></div>{row.time}
                                                </div></TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            
                        </TableRow>
                    )
                   })
                }
                
            </TableBody>
            </Table>
        );
    }
}

class WebSite extends React.Component{
    state={
        data:[
            {   
                webstie:"http://sis.hust.edu.vn",
                status:"Up",
                httpCode:"OK (200)",
                upTime:"3-8-2017 22:25:21",
               
            },
            {   
                webstie:"http://sis.hust.edu.vn",
                status:"Up",
                httpCode:"OK (200)",
                upTime:"3-8-2017 22:25:21",
               
            },
            {   
                webstie:"http://sis.hust.edu.vn",
                status:"Up",
                httpCode:"OK (200)",
                upTime:"3-8-2017 22:25:21",
               
            }
          

        ]
    }
    render(){
        return(
            
            <Table   selectable={false} style={{ tableLayout: 'auto',overflowX:"scroll" }} fixedHeader={false}  multiSelectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                <TableHeaderColumn>Webstie</TableHeaderColumn>
                <TableHeaderColumn>Trang thái</TableHeaderColumn>
                <TableHeaderColumn>Http code</TableHeaderColumn>
                <TableHeaderColumn>Uptime</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody style={{ tableLayout: 'auto' }} displayRowCheckbox={false}>
                {this.state.data.map((row,index) =>{

                    return(
                        <TableRow  style={{fontSize:"13px"}} key={index}>
                           <TableRowColumn >{row.webstie}</TableRowColumn>
                           <TableRowColumn ><label className="label label-success"><div className="glyphicon glyphicon-arrow-up" style={{marginRight:"2px",fontSize:"10px"}}></div>{row.status}</label></TableRowColumn>
                           <TableRowColumn style={{fontSize:"13px"}} ><label className="label label-success">{row.httpCode}</label></TableRowColumn>
                            <TableRowColumn >  
                                                        <div className="glyphicon glyphicon-time" style={{marginRight:"2px",fontSize:"12px"}}></div>{row.upTime}
                                               
                            </TableRowColumn>
                          
                            
                        </TableRow>
                    )
                   })
                }
                
            </TableBody>
            </Table>
        );
    }
}
  
class Maychu extends React.Component{
    state={
        data:[
            {   
                webstie:"Lap",
                lastRecive:"3-8-2017 22:25:21",
                event:"event"
            },
            {   
                webstie:"Sis",
                lastRecive:"3-8-2017 22:25:21",
                event:"event"
            },
            {   
                webstie:"24h",
                lastRecive:"3-8-2017 22:25:21",
                event:"event"
            }
          
    

        ]
    }
    render(){
        return(
            <Table selectable={false} style={{ tableLayout: 'auto',overflowX:"scroll" }} fixedHeader={false}   multiSelectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                <TableHeaderColumn>Tên cảm biến</TableHeaderColumn>
                <TableHeaderColumn>Lần cuối nhận Logs</TableHeaderColumn>
                <TableHeaderColumn>Sự kiện</TableHeaderColumn>
                
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {this.state.data.map((row,index) =>{

                    return(
                        <TableRow key={index}>
                           <TableRowColumn>{row.webstie}</TableRowColumn>
                           <TableRowColumn>{row.lastRecive}</TableRowColumn>
                           <TableRowColumn>{row.event}</TableRowColumn>
                            
                          
                            
                        </TableRow>
                    )
                   })
                }
                
            </TableBody>
            </Table>
        );
    }
}

class General extends React.Component{
    render(){
        return(
            <div>
                <div className="row" style={{marginTop:"14px"}} >
                        <div className="col-md-3">
                            <div className="box">
                                <div className="title">
                                        Sự kiện
                                </div>
                                <div className="number">
                                2,774,724
                                </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <div className="title">
                                    Cảnh báo
                                </div>
                                <div className="number">
                                    103
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <div className="title">
                                    Webstie
                                </div>
                                <div className="number">
                                    2
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <div className="title">
                                    Máy chủ
                                </div>
                                <div className="number">
                                    1
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row" style={{marginTop:"24px"}}>
                    <div className="col-md-6">
                        <div className="box">
                                    <div className="title-rc" >
                                        Tiếp nhận Logs
                                    </div>
                                    <div dir="rtl" style={{paddingTop:"59px",paddingBottom:"85px",fontSize:"11px"}} >
                                        <SimpleAreaChart/>
                                    </div>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                                    <div className="title-rc" >
                                    Cảnh báo
                                    </div>
                                    <div className="" style={{background:"none"}} >
                                       <TableExampleSimple />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"24px"}}>
                    <div className="col-md-6">
                        <div className="box">
                                    <div className="title-rc" >
                                       Webstie
                                    </div>
                                    <div className="table-responsive" style={{background:"none"}} >
                                    <WebSite />
                                 </div>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                                    <div className="title-rc" >
                                    Máy chủ
                                    </div>
                                    <div className="" style={{background:"none"}} >
                                       <Maychu />
                                    </div>
                                </div>
                        </div>
                    </div>
         </div>
        )
    }
}
module.exports = General;