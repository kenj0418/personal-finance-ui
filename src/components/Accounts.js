import React, { Component } from "react";
import AccountItem from "./AccountItem";
import PropTypes from "prop-types";

class Accounts extends Component {
  render() {
    const { accounts, viewAccount } = this.props;
    return accounts.map(account => (
      <AccountItem
        key={account.id}
        account={account}
        viewAccount={viewAccount}
      />
    ));
  }
}

Accounts.propTypes = {
  accounts: PropTypes.array.isRequired,
  viewAccount: PropTypes.func.isRequired
};

export default Accounts;
