import React, { Component } from "react";
import PropTypes from "prop-types";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import AreaChart from "recharts/lib/chart/AreaChart";
import Area from "recharts/lib/cartesian/Area";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";

export class DebtPaydownChart extends Component {
  render() {
    const COLORS = [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8042",
      "#8888FE",
      "#88C49F",
      "#444428",
      "#AAAA42"
    ];

    const getColor = i => {
      return COLORS[i % COLORS.length];
    };

    return (
      // 99% per https://github.com/recharts/recharts/issues/172
      <ResponsiveContainer width="99%" height={320}>
        <AreaChart width={500} height={300} data={this.props.paydown.principal}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          {this.props.paydown.accounts.map((acctName, i) => (
            <Area
              baseValue={0}
              stackId="prin"
              dataKey={acctName}
              fillOpacity={100}
              stroke={getColor(i)}
              fill={getColor(i)}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

DebtPaydownChart.propTypes = {
  paydown: PropTypes.array.isRequired
};

export default DebtPaydownChart;
