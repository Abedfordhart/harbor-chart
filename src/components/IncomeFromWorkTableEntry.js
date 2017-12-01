import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class IncomeFromWorkTableEntry extends Component {
  render() {
    return (
      <TableRow className={this.props.classes.light}>
        <TableCell>Incrome From Work</TableCell>
          {this.props.userData.map((year, i) => {
            return (
              <TableCell key={i} numeric>${this.props.limitDecimals(Number(year.sources.user_work + year.sources.spouse_work))}</TableCell>
            );
          })}
      </TableRow>
    );
  }
}

export default IncomeFromWorkTableEntry;