var React = require('react');

import {BrowserRouter as Router,Route,Switch,Ridirect,hashHistory,Redirect} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var {Provider} = require('react-redux');

var store = require('app/store.js');

var Layout = require('app/components/Layout.js');
var Home = require('app/components/Home.js');
var Settings = require('./pages/settings/Settings.js');
var EventLog  = require('app/components/pages/eventlog/EventLog.js');
var DashBoard  = require('app/components/pages/dashboard/DashBoard.js')
var SlideMenu =  require('app/components/SlideMenuBar.js');
var Login = require('app/components/Login.js');
var UserHome = require('./UserHome');
import Maptree from './Map'
import CreateUser from './pages/manageuser/CreateUser'
import CreateTree from './pages/managetree/CreateTree'
import TableListUser from './pages/manageuser/TableListUser'
import ListUser from './pages/manageuser/ListUser'
import TableListTree from './pages/managetree/TableListTree'
import Chat from './pages/chat/ListChat'
import Notification from './pages/notification/ListNotify'
import ListTree from './client/listtree/ListGroupTree'
import ListTreeGroup from './client/listtree/ListTree'
import TreeItem from './client/listtree/component/TreeItem'
 class App extends React.Component{

// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
//require('style!css!sass!./css/style.scss');
// $(document).ready(() => $(document).foundation());
 
     render(){
        return(
           <MuiThemeProvider muiTheme={getMuiTheme()}>
             <Provider store={store}>
              <Router history={hashHistory}>
                  
                  <Layout>
                   <Switch>
                    
                      <Route  exact   path="/" component={Maptree}/>
                      {/* <Route  path="/maptree" component={Maptree}/> */}
                      <Route  path="/create-user" component={CreateUser}/>
                      <Route  path="/create-tree" component={CreateTree}/>
                      <Route  path="/treedetail" component={TreeItem}/>

                      <Route  path="/list-tree" component={ListTree}/>
                      <Route  path="/list-tree-group" component={ListTreeGroup}/>
                      <Route  path="/list-user" component={ListUser}/>
                      <Route  path="/users" component={TableListUser}/>
                      <Route  path="/trees" component={TableListTree}/>
                      <Route  path="/chats" component={Chat}/>
                      <Route  path="/notification" component={Notification}/>
                      <Route  path="/eventLog" component={EventLog}/>
                      <Route  path="/dashboard" component={DashBoard}/>
                      <Route  path="/login" component={Login}/>
                      <Route  path="/settings" component={Settings}/>
                      {/* <Route  path="/:username" component={UserHome}/> */}
                      <Route render={function(){
                          return <p> not found</p>
                      }
                    } />
                 </Switch>
               </Layout>
             </Router>
             </Provider>
            </MuiThemeProvider>
     
    )
  }
}

module.exports = App;

