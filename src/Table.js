import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  strong: {
    fontWeight: 'bold',
  },
});

let id = 0;
function createData(name, age, fat, carbs, protein) {
  id += 1;
  // var age = 0;
  // this.props.userData.map(year => {
  //   age = year.start_date.substring(0,4) - props.userBirthday
  // })
  return { id, name, age, fat, carbs, protein};
}

const rowNames = ['Your Age', 'Income From Work', 'Social Security', 'Retirement Savings Withdrawals', 'Combined Income', 'Taxes (Est.)', 'After-Tax Income']
const data = [
  createData('Your Age', 10, 6.0, 24, 4.0),
  createData('Income From Work', 11, 9.0, 37, 4.3),
  createData('Social Security', 12, 16.0, 24, 6.0),
  createData('Retirement Savings Withdrawals', 13, 3.7, 67, 4.3),
  createData('Combined Income', 356, 16.0, 49, 3.9),
  createData('Taxes (Est.)', 356, 16.0, 49, 3.9),
  createData('After-Tax Income', 356, 16.0, 49, 3.9)
];

class BasicTable extends Component {
  constructor(props) {
    super(props);
  }

  afterTax(income) {
    if(income <= 9325) {
      return income * 
    }
  }

  render() {
    
    const { classes } = this.props;
    console.log('props', this.props.userData);

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
                {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>{year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Your Age</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>{Number(year.start_date.substring(0,4) - this.props.userBirthday.substring(0,4))}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow>
              <TableCell>Incrome From Work</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.total}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow>
              <TableCell>Social Security</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.sources.user_social_security}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow>
              <TableCell>Retirement Savings Withdrawals</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow>
              <TableCell>Combined Income</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow>
              <TableCell>Taxes (Est.)</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow>
              <TableCell>After-Tax Income</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);