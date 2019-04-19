import React, { Component } from "react";
import PropTypes from "prop-types";
import AccountAmortizationChart from "./AccountAmortizationChart";

export class AccountAmoritization extends Component {
  // data = [
  //   { name: "Mon", Visits: 2200, Orders: 3400 },
  //   { name: "Tue", Visits: 1280, Orders: 2398 },
  //   { name: "Wed", Visits: 5000, Orders: 4300 },
  //   { name: "Thu", Visits: 4780, Orders: 2908 },
  //   { name: "Fri", Visits: 5890, Orders: 4800 },
  //   { name: "Sat", Visits: 4390, Orders: 3800 },
  //   { name: "Sun", Visits: 4490, Orders: 4300 }
  // ];

  getStyle = principal => {
    return {
      textDecoration: principal <= 0 ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    // interest, payment
    // const { id, title, principal } = this.props.account;

    return <AccountAmortizationChart amortization={this.props.amortization} />;
  }
}
AccountAmoritization.propTypes = {
  account: PropTypes.object.isRequired,
  amortization: PropTypes.array.isRequired
};

// const btnStyle = {
//   background: "#ff0000",
//   color: "#FFFFFF",
//   border: "none",
//   padding: "5px 9px",
//   borderRadius: "50%",
//   cursor: "pointer",
//   float: "right"
// };

export default AccountAmoritization;
