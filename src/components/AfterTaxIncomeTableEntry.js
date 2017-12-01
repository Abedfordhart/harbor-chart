import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class AfterTaxIncomeTableEntry extends Component {
  render() {
    return (
      <TableRow className={this.props.classes.strong}>
        <TableCell>After-Tax Income</TableCell>
          {this.props.userData.map((year, i) => {
            return (
              <TableCell key={i} numeric>${this.props.afterTax(year.total)}</TableCell>
            );
          })}
      </TableRow>
    );
  }
}

export default AfterTaxIncomeTableEntry;