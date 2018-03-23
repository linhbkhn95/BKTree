import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    fullname: 'Hoa Hồng',
  },
  {
    fullname: 'Hoa Lau',
  },
  {
    fullname: 'Hoa Cúc',
  },
//   {
//     name: 'Steve Brown',
//     status: 'Employed',
//   },
//   {
//     name: 'Joyce Whitten',
//     status: 'Employed',
//   },
//   {
//     name: 'Samuel Roberts',
//     status: 'Employed',
//   },
//   {
//     name: 'Adam Moore',
//     status: 'Employed',
//   },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import ContentEdit from 'material-ui/svg-icons/content/edit';
import ContentDelete from 'material-ui-icons/Delete';
import ContentEdit from 'material-ui-icons/Edit';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginRight: 20,
};
export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
         <div className="title-page">
              Quản lý cây
          </div>
        <div className="">
        <RaisedButton mini={true} icon={<ContentAdd />} label="Thêm" primary={true} style={style} />
        <RaisedButton icon={<ContentEdit />} label="Sửa" style={style} />
        <RaisedButton icon={<ContentDelete />} label="Xóa"secondary={true} style={style} />


  </div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            {/* <TableRow>
            
               <TableHeaderColumn colSpan="3" tooltip="Danh sách cây" style={{textAlign: 'center'}}>
               Danh sách cây
              
  
              </TableHeaderColumn>
            </TableRow> */}
            <TableRow>
              <TableHeaderColumn tooltip="Mã nhân viên">Mã Cây</TableHeaderColumn>
              <TableHeaderColumn tooltip="Tên cây">Tên cây</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.fullname}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          {/* <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>Mã cây</TableRowColumn>
              <TableRowColumn>Tên cây</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
              Danh sách cây
              </TableRowColumn>
            </TableRow>
          </TableFooter> */}
        </Table>

        {/* <div style={styles.propContainer}>
          <h3>Table Properties</h3>
          <TextField
            floatingLabelText="Table Body Height"
            defaultValue={this.state.height}
            onChange={this.handleChange}
          />
          <Toggle
            name="fixedHeader"
            label="Fixed Header"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedHeader}
          />
          <Toggle
            name="fixedFooter"
            label="Fixed Footer"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedFooter}
          />
          <Toggle
            name="selectable"
            label="Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.selectable}
          />
          <Toggle
            name="multiSelectable"
            label="Multi-Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.multiSelectable}
          />
          <Toggle
            name="enableSelectAll"
            label="Enable Select All"
            onToggle={this.handleToggle}
            defaultToggled={this.state.enableSelectAll}
          />
          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
          <Toggle
            name="deselectOnClickaway"
            label="Deselect On Clickaway"
            onToggle={this.handleToggle}
            defaultToggled={this.state.deselectOnClickaway}
          />
          <Toggle
            name="stripedRows"
            label="Stripe Rows"
            onToggle={this.handleToggle}
            defaultToggled={this.state.stripedRows}
          />
          <Toggle
            name="showRowHover"
            label="Show Row Hover"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showRowHover}
          />
          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
          <Toggle
            name="showCheckboxes"
            label="Show Checkboxes"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showCheckboxes}
          />
        </div> */}
      </div>
    );
  }
}