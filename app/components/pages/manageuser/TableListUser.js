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
    fullname: 'Nhỏ Ngọc',
    role: 'Nhân viên chăm sóc cây',
  },
  {
    fullname: 'Phương anh',
    role: 'Quản lý cây',
  },
  {
    fullname: 'Trịnh Linh',
    role: 'Bảo vệ',
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
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
               Danh sách nhân viên
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Mã nhân viên">Mã nhân viên</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Họ tên</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Chức vụ</TableHeaderColumn>
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
                <TableRowColumn>{row.role}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>Mã nhân viên</TableRowColumn>
              <TableRowColumn>Họ tên</TableRowColumn>
              <TableRowColumn>Chức vụ</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
              Danh sách nhân viên
              </TableRowColumn>
            </TableRow>
          </TableFooter>
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