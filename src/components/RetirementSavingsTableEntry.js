import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class RetirementSavingsTableEntry extends Component {
  render() {
    return (
      <TableRow className={this.props.classes.light}>
        <TableCell>Retirement Savings Withdrawals</TableCell>
          {this.props.userData.map((year, i) => {
            return (
              <TableCell key={i} numeric>${this.props.limitDecimals(0)}</TableCell>
            );
          })}
      </TableRow>
    );
  }
}

export default RetirementSavingsTableEntry;