import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class CombinedIncomeTableEntry extends Component {
  render() {
    return (
      <TableRow className={this.props.classes.dark}>
        <TableCell>Combined Income</TableCell>
          {this.props.userData.map((year, i) => {
            return (
              <TableCell key={i} numeric>${this.props.limitDecimals(Number(year.total))}</TableCell>
            );
          })}
      </TableRow>
    );
  }
}

export default CombinedIncomeTableEntry;