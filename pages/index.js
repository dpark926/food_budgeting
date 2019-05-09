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
import { formatMoney, getLocalDate } from "../utils/functions";
import "../styles/styles.scss";

class index extends Component {
  state = { data: data, date: getLocalDate() };

  toggleModal = () => {
    const { showModal } = this.state;

    this.setState({ showModal: !showModal });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { date, store, amount } = this.state;
    e.preventDefault();
    this.setState({
      data: [
        ...this.state.data,
        {
          date,
          store,
          amount: formatMoney(amount)
        }
      ]
    });
    this.toggleModal();
  };

  render() {
    const { showModal, data } = this.state;

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
      <div className="roboto" style={{ background: "#f6f6f6" }}>
        <div className="bg-white border-bottom gray p2">
          <h3 className="lighter m0">Login</h3>
        </div>
        <div className="border-divider bg-white rounded m2 pt2 pb1">
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
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <History data={data} />
      </div>
    );
  }
}

export default index;
