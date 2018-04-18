let datanotifi ={
     data:[],
     number_notifi:0
}
var notification = (state = datanotifi, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return {...state,number_notifi:action.data};
          break
      case 'ADD_NOTIFICATION':
        let data = {...state};
         data.data.push(action.data)
         data.number_notifi +=1 
        return data;
         break
      case 'RESET_NOTIFICATION':
        return datanotifi;
        break
      default:
        return state;
    }
  }
  module.exports = notification;
  