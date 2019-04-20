import React, { Component } from "react";
import PropTypes from "prop-types";
import AccountAmortizationChart from "./AccountAmortizationChart";
import AccountAmortizationTable from "./AccountAmortizationTable";

export class AccountAmoritization extends Component {
  getStyle = principal => {
    return {
      textDecoration: principal <= 0 ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    return (
      <div>
        <AccountAmortizationChart amortization={this.props.amortization} />
        <AccountAmortizationTable amortization={this.props.amortization} />
      </div>
    );
  }
}
AccountAmoritization.propTypes = {
  account: PropTypes.object.isRequired,
  amortization: PropTypes.array.isRequired
};

export default AccountAmoritization;
