import React, { Component } from 'react';

export default class Property extends Component {
	render() {
		return (
			<div>
					<ul className="list-group">
                      <li style={{fontSize:"15px", fontWeight:"bold"}} className="list-group-item header-property">
					    
					    Thuộc tính
					  </li>

					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Status
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Method
					  </li>
					  <li className="list-group-item">
					    <span className="badge badge-primary">14</span>
					   Path
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Query
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Remote_host
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Referer
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Brower
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Os
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Url
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Country
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Hostname
					  </li>
					</ul>

			</div>
		);
	}
}
// import React from 'react';
// import {List, ListItem} from 'material-ui/List';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentSend from 'material-ui/svg-icons/content/send';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import Divider from 'material-ui/Divider';
// import ActionInfo from 'material-ui/svg-icons/action/info';
// import Subheader from 'material-ui/Subheader';
// import Badge from 'material-ui/Badge';

// class ListProperty extends React.Component{
// 	state={
// 		 list:[
// 			  {
// 					id:1,name:"Status",count:1
// 				},
// 				 {
// 					id:2,name:"Method",count:2
// 				},
// 				 {
// 					id:3,name:"Path",count:2
// 				},
// 				 {
// 					id:4,name:"Query",count:7
// 				},
// 				 {
// 					id:5,name:"Remote_host",count:8
// 				},
// 				 {
// 					id:1,name:"Referer",count:4
// 				},
// 				 {
// 					id:1,name:"Brower",count:4
// 				},
// 				 {
// 					id:1,name:"Os",count:3
// 				},
// 				 {
// 					id:1,name:"Url",count:3
// 				},
// 				 {
// 					id:1,name:"Country",count:5
// 				},
// 				 {
// 					id:1,name:"Hostname",count:9
// 				}

// 		 ]
// 	}
// 	render(){
		
// 		return(
// 			<div style={{background:"rgb(241, 234, 235)"}}>
				
// 				<List>
// 					<Subheader inset={true}>Thuộc tính</Subheader>
// 							{
// 								this.state.list.map((property,index) =>{
//                  return(
//                     	<ListItem style={{fontSize:"10px",padding:"2px"}} key={index} primaryText={property.name} rightIcon={ <Badge badgeContent={property.count} primary={true}></Badge>}/>
// 								 )
// 							 })
// 							}
				
			
// 				</List>
// 			</div>
// 		)
// 	}
// }

//export default ListProperty;