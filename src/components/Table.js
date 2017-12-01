import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import AgeTableEntry from './AgeTableEntry';
import IncomeFromWorkTableEntry from './IncomeFromWorkTableEntry';
import SSTableEntry from './SSTableEntry';
import RetirementSavingsTableEntry from './RetirementSavingsTableEntry';
import CombinedIncomeTableEntry from './CombinedIncomeTableEntry';
import TaxesTableEntry from './TaxesTableEntry';
import AfterTaxIncomeTableEntry from './AfterTaxIncomeTableEntry';

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
    zIndex: '1000',
  },
  light: {
    backgroundColor: '#f2f2f2',
  },
  dark: {
    backgroundColor: '#d8d8d8',
  },
  red: {
    color: '#cf5259',
  },
  blankRow: {
    height: '10px',
  }
});

class BasicTable extends Component {
  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.dark}>
              <TableCell>
                <p>Year</p>
              </TableCell>
                {this.props.userData.map((year, i) => {
                  return (
                    <TableCell key={i} numeric>
                    <p>{year.start_date.substring(0,4)}</p>
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            <AgeTableEntry {...this.props}/>
          <TableRow className={classes.blankRow}/>
            <IncomeFromWorkTableEntry {...this.props}/>
          <TableRow className={classes.blankRow}/>
            <SSTableEntry {...this.props}/>
          <TableRow className={classes.blankRow}/>
            <RetirementSavingsTableEntry {...this.props}/>
          <TableRow className={classes.blankRow}/>
            <CombinedIncomeTableEntry {...this.props}/>
          <TableRow className={classes.blankRow}/>
            <TaxesTableEntry {...this.props}/>
          <TableRow className={classes.blankRow}/>
            <AfterTaxIncomeTableEntry {...this.props}/>
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