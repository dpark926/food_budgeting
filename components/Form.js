import { getLocalDate } from "../utils/functions";

const Form = () => {
  return (
    <form className="flex flex-column border rounded p2 mb2">
      <label className="py1 h5">Date</label>
      <input
        type="date"
        value={getLocalDate()}
        className="border rounded p1 mb1 h4"
      />
      <label className="py1 h5">Store</label>
      <input type="text" className="border rounded p1 mb1 h4" />
      <label className="py1 h5">Amount</label>
      <input
        type="number"
        min="0.01"
        step="0.01"
        max="2500"
        placeholder="25.67"
        className="border rounded p1 mb1 h4"
      />
      <input
        type="submit"
        className="bg-blue white p1 mt1 border-none rounded"
      />
    </form>
  );
};

export default Form;
