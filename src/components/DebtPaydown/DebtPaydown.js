import React, { Component } from "react";
import PropTypes from "prop-types";
import DebtPaydownChart from "./DebtPaydownChart";
import DebtPaydownTable from "./DebtPaydownTable";

export class DebtPaydown extends Component {
  tempData = {
    accounts: ["Account 1", "Another Acct", "Car Loan", "Something"],
    payments: [
      {
        month: 0,
        "Account 1": 100,
        "Another Acct": 50,
        "Car Loan": 200,
        Something: 111
      },
      {
        month: 1,
        "Account 1": 100,
        "Another Acct": 50,
        "Car Loan": 200,
        Something: 111
      },
      {
        month: 2,
        "Account 1": 100,
        "Another Acct": 50,
        "Car Loan": 200,
        Something: 111
      },
      {
        month: 3,
        "Account 1": 100,
        "Another Acct": 50,
        "Car Loan": 200,
        Something: 111
      },
      {
        month: 4,
        "Account 1": 100,
        "Another Acct": 50,
        "Car Loan": 100,
        Something: 500
      }
    ],
    principal: [
      {
        month: 0,
        "Account 1": 1000,
        "Another Acct": 100,
        "Car Loan": 300,
        Something: 1000
      },
      {
        month: 1,
        "Account 1": 1000,
        "Another Acct": 100,
        "Car Loan": 300,
        Something: 1000
      },
      {
        month: 2,
        "Account 1": 1000,
        "Another Acct": 100,
        "Car Loan": 300,
        Something: 1000
      },
      {
        month: 3,
        "Account 1": 1000,
        "Another Acct": 100,
        "Car Loan": 300,
        Something: 1000
      },
      {
        month: 4,
        "Account 1": 900,
        "Another Acct": 50,
        "Car Loan": 0,
        Something: 500
      }
    ]
  };

  getStyle = principal => {
    return {
      textDecoration: principal <= 0 ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    console.log("paydown: ", this.props.paydown);
    return (
      <div>
        <DebtPaydownChart paydown={this.props.paydown} />
        <DebtPaydownTable paydown={this.props.paydown} />
      </div>
    );
  }
}
DebtPaydown.propTypes = {
  account: PropTypes.object.isRequired,
  paydown: PropTypes.object.isRequired
};

export default DebtPaydown;
