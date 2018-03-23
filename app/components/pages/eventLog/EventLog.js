import React from 'react';
import Header from './Components/Header.js'
import Property from './Components/Property.js'
import Content from './Components/Content.js'
class EventLog extends React.Component{
	render(){
		return(

               <div className="rows">
                  <div className="" style={{    paddingTop: "25px",
    marginTop: "17px",paddingLeft:"0px",    border: "1px solid #efe8e8",
    borderRadius: "8px",
 background: "rgba(249, 248, 249, 0.12)",fontSize:"11px"}} >
                      <Header />
                  </div>
                  <div className="row">
                  		<div className="col-md-2 col-xs-12 col-md-offset-1 col-xs-offset-0 number-result">
                  			<span style={{    padding: "7px 21px"}} className="label label-info">2,145 kết quả</span>
                  		</div>
                  		<div className="col-md-2 col-xs-12">
                                <select className="page-size form-control">
				                  <option>60 giây reload</option>
				                  <option>120 giây reload</option>
				                  <option>180 giây reload</option>
				                </select>
                  		</div>
                  		<div className="col-md-2 ">
                                <select className="page-size form-control">
				                  <option>20 kết quả/trang</option>
				                  <option>30 kết quả/trang</option>
				                  <option>40 kết quả/trang</option>
				                </select>
                  		</div>
                  		<div className="col-md-4 col-xs-12 col-md-push-0 col-xs-push-2  ">
							 <nav aria-label="Page navigation">
							  <ul style={{fontSize:"11px"}} className="pagination">
							    <li>
							      <a href="#" aria-label="Previous">
							        <span aria-hidden="true">&laquo;</span>
							      </a>
							    </li>
							    <li><a href="#">1</a></li>
							    <li><a href="#">2</a></li>
							    <li><a href="#">3</a></li>
							    <li><a href="#">4</a></li>
							    <li><a href="#">5</a></li>
							    <li>
							      <a href="#" aria-label="Next">
							        <span aria-hidden="true">&raquo;</span>
							      </a>
							    </li>
							  </ul>
							</nav>
                  		</div>
                  </div>
                  <div className="">
          
                  		<div className="col-md-2 data-view">
                  		   <Property />
                  		</div>
                  		<div  className="col-md-10 list-log">
                  			<Content />
                  		</div>
                  </div>
                  
                    
               </div>
			)
	}
}
module.exports = EventLog;

					 //  <li className="list-group-item">
					 //   Status
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 //  <li className="list-group-item">
					 //   Method
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 // <li className="list-group-item">
					 //   Path
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 //   <li className="list-group-item">
					 //   Query
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 // <li className="list-group-item">
					 //   Remote_host
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 // <li className="list-group-item">
					 //   Referer
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 //  <li className="list-group-item">
					 //   Browser
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 //  <li className="list-group-item">
					 //   Os
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 //   <li className="list-group-item">
					 //   Url
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 //  <li className="list-group-item">
					 //   Country
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>
					 //  <li className="list-group-item">
					 //   Hostname
					 //     <Badge
					 //      badgeContent={4}
					 //      primary={true}
					 //    ></Badge>
					   
					 //  </li>