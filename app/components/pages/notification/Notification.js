import React from 'react';
// import {NavLink,Link} from 'react-router-dom';
// import LoginSuccess from 'LoginSuccess';
// import BtnLogin from 'BtnLogin';
// import {connect} from 'react-redux';
 import moment from 'moment';
// import ReactTooltip from 'react-tooltip'
 var date = Date.now();
var datedemo=1511399642970;
class Notify extends React.Component{
   render(){
       return(
        
        <li id="notification_li">
        <span id="notification_count">3</span>
        <a href="#" id="notificationLink" data-tip="Thông báo"><i style={{fontSize:"19px",color:"#4579b8"}} className="glyphicon glyphicon-globe" ></i> </a>
    
        <div id="notificationContainer">
              <div className="beeperNub"></div>
            <div id="notificationTitle" >Thông báo</div>
            <div className="">Mới</div>
            <div id="notificationsBody" className="notifications">
              
                <div className="col-md-12 alert-message">
                    <div className="col-md-3 row"><img className="avatar-alert" src="/images/avatar.jpg" /></div>
                    <div className=" row">
                          <strong>Nhỏ Ngọc</strong> đã phê duyệt công tác dự án <strong>Funsurv</strong>
                          <br />
                          <p className="time-alert">{moment(datedemo).lang('vi').fromNow()}</p>
                    </div>
                </div>
                <div className="col-md-12 alert-message">
                    <div className="col-md-3 row"><img className="avatar-alert" src="/images/avatar.jpg" /></div>
                    <div className=" row">
                          <strong>Phương Anh</strong> dã ảnh hóa đơn cho công tác của dự án <strong>Funsurv</strong>
                          <br />
                          <p className="time-alert">{moment(datedemo).lang('vi').fromNow()}</p>
                    </div>
                </div>
                <div className="col-md-12 alert-message">
                    <div className="col-md-3 row"><img className="avatar-alert" src="/images/avatar.jpg" /></div>
                    <div className=" row">
                          <strong>Linh Trịnh</strong> đã yêu cầu phê duyệt công tác dự án <strong>Funsurv</strong>
                          <br />
                          <p className="time-alert">{moment(datedemo).lang('vi').fromNow()}</p>
                    </div>
                </div>
            
            </div>
            <div id="notificationFooter"><a href="#">Xem tất cả</a></div>
        </div>
    
    </li>
       )
   }
}
module.exports = Notify