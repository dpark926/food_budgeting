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
import { data } from "../data/data";

class index extends Component {
  state = {};

  render() {
    return (
      <div className="roboto border">
        <LineChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 30,
            right: 50,
            left: -35,
            bottom: 5
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
        <div>
          <form>
            <input
              type="number"
              min="0.01"
              step="0.01"
              max="2500"
              placeholder="25.67"
            />
            <input type="submit" />
          </form>
        </div>
        <div>
          {data.map((obj, idx) => {
            return (
              <div className="flex">
                <p className="col-3">{obj.date}</p>
                <div className="flex col-9">
                  <p>{obj.store}</p>
                  <p className="flex-auto right-align">{obj.amount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default index;
