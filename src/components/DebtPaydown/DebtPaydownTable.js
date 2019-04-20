import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const round = n => {
  const rounded = Math.round(n * 100) / 100;
  return -0.005 < rounded && rounded < 0.005 ? 0 : rounded;
};

export class DebtPaydownTable extends Component {
  render() {
    const arrSum = arr => arr.reduce((a, b) => a + b, 0);
    const objSum = obj => arrSum(Object.values(obj));

    const styles = {
      leftBorder: {
        "border-left": "1px solid black"
      },
      rightBorder: {
        "border-right": "1px solid black"
      }
    };

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow key="head1">
              <TableCell />
              <TableCell />
              <TableCell />
              {this.props.paydown.accounts.map(acctName => [
                <TableCell
                  align="center"
                  colSpan={2}
                  style={{ ...styles.leftBorder, ...styles.rightBorder }}
                >
                  {acctName}
                </TableCell>
              ])}
            </TableRow>
            <TableRow key="head2">
              <TableCell align="left">Month #</TableCell>
              <TableCell align="right">Total Left</TableCell>
              <TableCell align="right">Payment</TableCell>
              {this.props.paydown.accounts.map(acctName => [
                <TableCell align="right" style={{ ...styles.leftBorder }}>
                  Pmt
                </TableCell>,
                <TableCell align="right" style={{ ...styles.rightBorder }}>
                  Left
                </TableCell>
              ])}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.paydown.payments.map((pmt, i) => (
              <TableRow key={i}>
                <TableCell align="left">{pmt.month + 1}</TableCell>
                <TableCell align="right">
                  {round(objSum(this.props.paydown.principal[i]))}
                </TableCell>
                <TableCell align="right">
                  {round(objSum({ ...pmt, month: 0 }))}
                </TableCell>
                {this.props.paydown.accounts.map(acctName => [
                  <TableCell align="right" style={{ ...styles.leftBorder }}>
                    {pmt[acctName]}
                  </TableCell>,
                  <TableCell align="right" style={{ ...styles.rightBorder }}>
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
