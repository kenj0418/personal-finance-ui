import React, { Component } from "react";
import PropTypes from "prop-types";
import AccountAmoritization from "./AccountAmoritization";

export class AccountDetail extends Component {
  getStyle = principal => {
    return {
      textDecoration: principal <= 0 ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    //todo add "extra payment" field that then recalculates amortization with additional payment each month
    //todo add amortation table below the chart
    // interest, payment
    const { id, title, principal } = this.props.account;

    return (
      <div style={this.getStyle(principal)}>
        <p>
          {title}
          <button
            onClick={this.props.returnToAccountList.bind(this, id)}
            style={btnStyle}
          >
            &lt;
          </button>
        </p>
        <AccountAmoritization
          account={this.props.account}
          amortization={this.props.amortization}
        />
      </div>
    );
  }
}
AccountDetail.propTypes = {
  account: PropTypes.object.isRequired,
  amortization: PropTypes.array.isRequired,
  returnToAccountList: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#FFFFFF",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default AccountDetail;
