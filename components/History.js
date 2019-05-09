const History = props => {
  const { data } = props;

  return (
    <div className="border-divider bg-white p2 mx2 mb2">
      {data.map((obj, idx) => {
        return (
          <div className="border-bottom light-gray" key={obj.date + idx}>
            <div className="flex black pt1">
              <p className="col-3 h5 pb1 m0">{obj.date}</p>
              <div className="flex col-9">
                <p className="h5 pb1 m0">{obj.store}</p>
                <p className="flex-auto right-align h5 pb1 m0">${obj.amount}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
