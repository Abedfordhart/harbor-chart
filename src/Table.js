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
    backgroundColor: '#d8d8d8',
  },
  light: {
    backgroundColor: '#d8d8d8',
  },
  dark: {
    backgroundColor: 'darkgrey',
  },
  red: {
    color: '#cf5259',
  },
});

class BasicTable extends Component {
  // constructor(props) {
  //   super(props);
  // }
  afterTax(income) {
    let total;
    if(income <= 9325) {
      total = income * .9;
    } else if (income <= 37950) {
        total = income * .85;
    } else if (income <= 91900) {
        total = income * .75;
    } else if (income <= 191650) {
        total = income * .72;
    } else if (income <= 416700) {
        total = income * .66;
    } else if (income <= 418400) {
        total = income * .65;
    } else if (income > 418400) {
        total = income * .604;
    }
    return total;
  }

  render() {
    
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.dark}>
              <TableCell>Year</TableCell>
                {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>{year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.light}>
              <TableCell>Your Age</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>{Number(year.start_date.substring(0,4) - this.props.userBirthday.substring(0,4))}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow className={classes.light}>
              <TableCell>Incrome From Work</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.total}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow className={classes.light}>
              <TableCell>Social Security</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.sources.user_social_security}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow className={classes.light}>
              <TableCell>Retirement Savings Withdrawals</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow className={classes.dark}>
              <TableCell>Combined Income</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${year.start_date.substring(0,4)}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow className={classes.light}>
              <TableCell>Taxes (Est.)</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell className={classes.red} key={i} numeric>${year.total - this.afterTax(year.total)}</TableCell>
                  );
                })}
            </TableRow>
            <TableRow className={classes.strong}>
              <TableCell>After-Tax Income</TableCell>
              {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>${this.afterTax(year.total)}</TableCell>
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