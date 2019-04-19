import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
// import AddTask from "./components/AddTask";
import Accounts from "./components/Accounts";
import AccountDetail from "./components/AccountDetail";
import axios from "axios";

class App extends Component {
  API_URL = "http://localhost:3001/services/v1";
  id = 9999;
  state = {
    accounts: [],
    amortization: []
  };

  async componentDidMount() {
    const res = await axios.get(`${this.API_URL}/accounts`);
    const tempAccount = null;
    this.setState({ accounts: res.data, selectedAccount: tempAccount });
  }

  getAmortization = async account => {
    console.log(`account:`, JSON.stringify(account));
    const url = `${this.API_URL}/amortization/calculate?principal=${
      account.principal
    }&rate=${account.interest}&payment=${account.payment}`;
    console.log(`Calling amortization calculator: ${url}`);
    return await axios.get(url);
  };

  viewAccount = async selectedId => {
    const selectedAccount = this.state.accounts.find(acct => {
      return acct.id === selectedId;
    });
    let amortization;
    const amortReq = await this.getAmortization(selectedAccount);
    if (amortReq.status === 200 && amortReq.data) {
      amortization = amortReq.data.map((mth, i) => {
        return { ...mth, month: i };
      });
    } else {
      amortization = [];
      console.log(`Status: ${amortReq.status} result: ${amortReq.data}`);
    }
    console.log("amortization: " + JSON.stringify(amortization));
    this.setState({ selectedAccount, amortization });

    // await axios.delete(`${this.API_URL}/${selectedId}`);
    // this.setState({
    //   tasks: this.state.tasks.filter(task => task.id !== selectedId)
    // });
  };

  returnToAccountList = () => {
    this.setState({
      selectedAccount: null
    });
  };
  AccountsOrDetail = () => {
    if (this.state.selectedAccount) {
      return (
        <AccountDetail
          account={this.state.selectedAccount}
          amortization={this.state.amortization}
          returnToAccountList={this.returnToAccountList}
        />
      );
    } else {
      return (
        <Accounts
          accounts={this.state.accounts}
          viewAccount={this.viewAccount}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar />
          {this.AccountsOrDetail()}
        </div>
      </div>
    );
  }
}

export default App;
