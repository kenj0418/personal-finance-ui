import React, { Component } from "react";
import PropTypes from "prop-types";

export class AccountItem extends Component {
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
    const { id, title, principal } = this.props.account;

    return (
      <div style={this.getStyle(principal)}>
        <p>
          {title}
          <button
            onClick={this.props.viewAccount.bind(this, id)}
            style={btnStyle}
          >
            >
          </button>
        </p>
      </div>
    );
  }
}
AccountItem.propTypes = {
  account: PropTypes.object.isRequired,
  viewAccount: PropTypes.func.isRequired
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

export default AccountItem;
