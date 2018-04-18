const ADD_NOTIFICATION = "ADD_NOTIFICATION"
const RESET_NOTIFICATION = "RESET_NOTIFICATION"
const SET_NOTIFICATION ="SET_NOTIFICATION"
function addNotification(data){
   return{type:ADD_NOTIFICATION,data};
 }
 function setNotification(data){
  return{type:SET_NOTIFICATION,data};
}
  function  resetNotification(){
    return{type:RESET_NOTIFICATION};
 }
 module.exports = {addNotification,resetNotification,setNotification};
 