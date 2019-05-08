import React, { Component, Fragment } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Form from "../components/Form";
import History from "../components/History";
import { data } from "../data/data";
import "../styles/styles.scss";

class index extends Component {
  state = {};

  render() {
    return (
      <div className="roboto border p2">
        <div className="border rounded pt2 pb1 mb2">
          <LineChart
            width={330}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -30,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: "gray", fontSize: 12 }} />
            <YAxis tick={{ fill: "gray", fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#0088FE"
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <Form />
        <History data={data} />
      </div>
    );
  }
}

export default index;
