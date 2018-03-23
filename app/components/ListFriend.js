import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

var drawerHeader={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56   
}
export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  closeDrawer = () => {this.setState({ open: false }); console.log('change');};

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        {/* docked={false} onRequestChange={this.closeDrawer}  style={{backgroundColor:"black"}} type="permanent" width={250}  open={this.state.open}  */}
        <Drawer docked={false} width={200} onRequestChange={this.closeDrawer} style={{backgroundColor:"black"}}   openSecondary={true} open={this.state.open}  >
        <div style={{drawerHeader}}>
              <IconButton onClick={this.handleToggle}>
                  <ChevronLeftIcon />
           	 </IconButton>
            </div>
        </Drawer>
      </div>
    );
  }
}