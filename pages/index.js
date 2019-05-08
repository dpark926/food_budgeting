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

  toggleModal = () => {
    const { showModal } = this.state;

    this.setState({ showModal: !showModal });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.toggleModal();
  };

  render() {
    const { showModal } = this.state;

    const history = {};
    const historyArry = [];
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "aug",
      "sep",
      "nov",
      "dec"
    ];

    for (let i = 0; i < data.length; i++) {
      const month = new Date(data[i].date).getMonth();

      if (history[months[month]]) {
        history[months[month]] += data[i].amount;
      } else {
        history[months[month]] = data[i].amount;
      }
    }

    for (let key in history) {
      historyArry.push({ month: key, total: history[key] });
    }

    return (
      <div className="roboto border p2" style={{ background: "#f6f6f6" }}>
        <div className="border-divider bg-white rounded pt2 pb1 mb2">
          <LineChart
            width={330}
            height={200}
            data={historyArry}
            margin={{
              top: 10,
              right: 0,
              left: -25,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: "gray", fontSize: 12 }} />
            <YAxis tick={{ fill: "gray", fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#0088FE"
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <Form
          showModal={showModal}
          toggleModal={this.toggleModal}
          handleSubmit={this.handleSubmit}
        />
        <History data={data} />
      </div>
    );
  }
}

export default index;
