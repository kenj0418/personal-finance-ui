import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export class DebtPaydownTable extends Component {
  render() {
    const arrSum = arr => arr.reduce((a, b) => a + b, 0);
    const objSum = obj => arrSum(Object.values(obj));

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow key="head1">
              <TableCell />
              <TableCell />
              <TableCell />
              {this.props.paydown.accounts.map(acctName => (
                <TableCell align="center" colSpan={2}>
                  {acctName}
                </TableCell>
              ))}
            </TableRow>
            <TableRow key="head2">
              <TableCell align="left">Month #</TableCell>
              <TableCell align="right">Total Left</TableCell>
              <TableCell align="right">Payment</TableCell>
              {this.props.paydown.accounts.map(acctName => [
                <TableCell align="right">Pmt</TableCell>,
                <TableCell align="right">Left</TableCell>
              ])}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.paydown.payments.map((pmt, i) => (
              <TableRow key={i}>
                <TableCell align="left">{pmt.month + 1}</TableCell>
                <TableCell align="right">
                  {objSum(this.props.paydown.principal[i])}
                </TableCell>
                <TableCell align="right">{objSum(pmt)}</TableCell>
                {this.props.paydown.accounts.map(acctName => [
                  <TableCell align="right">{pmt[acctName]}</TableCell>,
                  <TableCell align="right">
                    {this.props.paydown.principal[i][acctName]}
                  </TableCell>
                ])}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DebtPaydownTable.propTypes = {
  paydown: PropTypes.array.isRequired
};

export default DebtPaydownTable;
