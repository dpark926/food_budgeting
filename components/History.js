const History = props => {
  const { data } = props;
  const history = {};
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
    const d = new Date(data[i].date);
    const month = d.getMonth();
    const year = d.getYear();

    if (history[`${month}/${year}`]) {
      history[`${month}/${year}`].total += data[i].amount;
      history[`${month}/${year}`].list.push(data[i]);
    } else {
      history[`${month}/${year}`] = {
        month,
        year,
        total: data[i].amount,
        list: [data[i]]
      };
    }
  }

  return (
    <div className="mx2 mb2">
      {Object.keys(history).map((month, idx) => {
        return (
          <div
            className={`border-divider rounded bg-white ${idx !== 0 && "mt1"}`}
            key={idx}
          >
            <div
              className={`border-bottom rounded box-shadow light-gray bg-blue px2 `}
              key={month + idx}
            >
              <div className="flex white pt1 normal">
                <p className="col-3 h5 pb1 m0">
                  {months[history[month].month].toUpperCase()}
                </p>
                <div className="flex col-9">
                  <p className="col-9 flex-auto h5 pb1 m0 right-align">
                    TOTAL:
                  </p>
                  <p className="col-3 right-align h5 pb1 m0">
                    ${history[month].total}
                  </p>
                </div>
              </div>
            </div>
            {history[month].list.map((obj, key) => {
              return (
                <div
                  className="border-top light-gray mx2"
                  key={obj.date + obj.store + idx}
                >
                  <div className="flex black pt1">
                    <p className="col-3 h5 pb1 m0">{obj.date}</p>
                    <div className="flex col-9">
                      <p className="h5 pb1 m0">{obj.store}</p>
                      <p className="flex-auto right-align h5 pb1 m0">
                        ${obj.amount}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default History;
