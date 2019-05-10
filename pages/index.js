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
import { months } from "../utils/variables";
import "../styles/styles.scss";

class index extends Component {
  state = { data: data, date: getLocalDate(), openMonths: [0] };

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
    if (date && store && amount) {
      this.setState({
        data: [
          ...this.state.data,
          {
            date,
            store,
            amount: parseInt(amount)
          }
        ]
      });
      this.toggleModal();
    }
  };

  toggleAccordion = idx => {
    const { openMonths } = this.state;
    if (openMonths.includes(idx)) {
      const filtered = openMonths.filter(num => {
        return num !== idx;
      });
      this.setState({ openMonths: filtered });
    } else {
      this.setState({ openMonths: [...openMonths, idx] });
    }
  };

  render() {
    const { showModal, data, date, openMonths } = this.state;
    const history = {};
    const historyArry = [];

    for (let i = 0; i < data.length; i++) {
      const month = parseInt(data[i].date.slice(6, 8));
      if (history[months[month - 1]]) {
        history[months[month - 1]] += data[i].amount;
      } else {
        history[months[month - 1]] = data[i].amount;
      }
    }

    for (let key in history) {
      historyArry.push({ month: key, total: formatMoney(history[key]) });
    }

    console.log(historyArry);

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
          date={date}
          showModal={showModal}
          toggleModal={this.toggleModal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <History
          data={data}
          toggleAccordion={this.toggleAccordion}
          openMonths={openMonths}
        />
      </div>
    );
  }
}

export default index;
