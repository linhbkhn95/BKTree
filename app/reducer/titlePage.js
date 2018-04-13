

var titlePage = (state = 'BKTree', action) => {
    switch (action.type) {
      case 'SET_TITLE_PAGE':
        return action.username;
    
      default:
        return state;
    }
  }
  module.exports = titlePage;
  