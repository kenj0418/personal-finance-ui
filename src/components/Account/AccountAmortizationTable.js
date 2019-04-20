import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export class AccountAmortizationTable extends Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Month #</TableCell>
              <TableCell align="right">Payment</TableCell>
              <TableCell align="right">Interest Pmt</TableCell>
              <TableCell align="right">Principal Pmt</TableCell>
              <TableCell align="right">Remaining Principal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.amortization.map(p => (
              <TableRow key={p.month}>
                <TableCell align="right">{p.month + 1}</TableCell>
                <TableCell align="right">{p.payment.toFixed(2)}</TableCell>
                <TableCell align="right">
                  {p.interestPayment.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {p.principalPayment.toFixed(2)}
                </TableCell>
                <TableCell align="right">{p.newPrincipal.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

AccountAmortizationTable.propTypes = {
  amortization: PropTypes.array.isRequired
};

export default AccountAmortizationTable;
