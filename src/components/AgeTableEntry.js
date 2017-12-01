import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class AgeTableEntry extends Component {
  render() {
    return (
      <TableRow className={this.props.classes.light}>
        <TableCell>Your Age</TableCell>
          {this.props.userData.map((year, i) => {
            return (
              <TableCell key={i} numeric>{Number(year.start_date.substring(0,4) - this.props.userBirthday.substring(0,4))}</TableCell>
            );
          })}
      </TableRow>
    );
  }
}

export default AgeTableEntry;