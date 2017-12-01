import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class TaxesTableEntry extends Component {
  render() {
    return (
      <TableRow className={this.props.classes.light}>
        <TableCell>Taxes (Est.)</TableCell>
        {this.props.userData.map((year, i) => {
            return (
              <TableCell className={this.props.classes.red} key={i} numeric>-${this.props.limitDecimals(Number(year.total - this.props.afterTax(year.total)))}</TableCell>
            );
          })}
      </TableRow>
    );
  }
}

export default TaxesTableEntry;