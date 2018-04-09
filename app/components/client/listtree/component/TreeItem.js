// import React from 'react'
// import Divider from 'material-ui/Divider';
import Property from './PropertyTree'
// class TreeItem extends React.Component{
//   render(){
//     return(
//        <div className="">
// {/*             
//           <div >
//             <img style={{width:"100%",height:"180px"}} src="../images/tree/mit.jpg" />
//           </div>
//          <div style={{textAlign:"center"}} > Mit ta : MD222A </div>
//          <div className="content-detail-tree">
//             <

//          </div> */}
//          <Property />
//        </div>
//       )
//   }
// }
// module.exports = TreeItem;
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Details from 'material-ui-icons/Details';
import History from 'material-ui-icons/History';
import HistoryTree from './History'
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab       icon={<Details />}
 label="Thông tin chi tiết" value="a">
              <Property />
        </Tab>
        <Tab  icon={<History />} label="Lịch sử tưới cây" value="b">
            <HistoryTree />
        </Tab>
      </Tabs>
    );
  }
}