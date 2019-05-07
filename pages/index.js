function index() {
  return (
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
  );
}

export default index;
