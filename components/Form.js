import { getLocalDate } from "../utils/functions";

const Form = props => {
  const { toggleModal, showModal, handleSubmit } = props;

  return (
    <div>
      {showModal ? (
        <form
          className="flex flex-column border-divider bg-white rounded p2 mb2"
          onSubmit={handleSubmit}
        >
          <label className="py1 h5 gray">Date</label>
          <input
            type="date"
            value={getLocalDate()}
            className="border-divider rounded p1 mb1 h5"
          />
          <label className="py1 h5 gray">Store</label>
          <input type="text" className="border-divider rounded p1 mb1 h5" />
          <label className="py1 h5 gray">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            max="2500"
            placeholder="25.67"
            className="border-divider rounded p1 mb1 h5"
          />
          <input
            type="submit"
            className="bg-blue h5 white p1 mt1 border-none rounded"
          />
        </form>
      ) : (
        <button
          className="bg-blue h5 white p1 mb2 border-none rounded col-12"
          onClick={toggleModal}
        >
          Add New
        </button>
      )}
    </div>
  );
};

export default Form;
