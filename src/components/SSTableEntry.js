import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class SSTableEntry extends Component {
  render() {
    return (
      <TableRow className={this.props.classes.light}>
        <TableCell>Social Security</TableCell>
        {this.props.userData.map((year, i) => {
            return (
              <TableCell key={i} numeric>${this.props.limitDecimals(year.sources.user_social_security)}</TableCell>
            );
          })}
      </TableRow>
    );
  }
}

export default SSTableEntry;