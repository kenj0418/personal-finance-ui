import React, { Component } from "react";
import PropTypes from "prop-types";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import LineChart from "recharts/lib/chart/LineChart";
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";

export class AccountAmortizationChart extends Component {
  render() {
    return (
      // 99% per https://github.com/recharts/recharts/issues/172
      <ResponsiveContainer width="99%" height={320}>
        <LineChart data={this.props.amortization}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            name="Principal"
            dataKey="newPrincipal"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

// <Line type="monotone" dataKey="interestPayment" stroke="#8884d8" activeDot={{ r: 8 }} />
// <Line type="monotone" dataKey="principalPayment" stroke="#8884d8" activeDot={{ r: 8 }} />

AccountAmortizationChart.propTypes = {
  amortization: PropTypes.array.isRequired
};

export default AccountAmortizationChart;
