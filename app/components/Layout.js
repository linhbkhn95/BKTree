// var Menu = require('Menu');
// var Main = require('Main');
var Nav = require('./Nav.js');
var Menu = require('./Menu.js');
var React = require('react');
var {connect} = require('react-redux');
import ListFriend from './ListFriend'
class Layout extends React.Component{
       render(){
         console.log(this.props.background)
         return(
               <div className="container-fluid">
                  
                        <div className="row">
                      		  <Nav />
                            {/* <ListFriend /> */}
                        </div>
                       
		                      <div style={{paddingLeft:"0px",paddingRight:"0px",background:this.props.background,paddingTop:"10px"}} className="container " >
                                {/* <div className="title-page">
                                     Thêm nhân viên
                                    
                                </div> */}
                                 <div className="">
                                  {this.props.children}
                                 </div>
		                       </div>
		               
               </div>

         )
     }
}
module.exports =

    // background:state.settings.backgroupBody

Layout;
  // <div className="container">
                  
  //                       <div className="row">
  //                           <Nav />
  //                       </div>
  //                       <div className="">
  //                            <div style={{paddingRight:"0px"}} className="col-md-2">
  //                                <Menu />
  //                            </div>
  //                         <div style={{paddingLeft:"0px",paddingRight:"0px"}} className="col-md-10" >
  //                             {this.props.children}
  //                          </div>
  //                   </div>

  //              </div>