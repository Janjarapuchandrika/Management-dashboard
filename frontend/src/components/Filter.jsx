const Filter = ({ status, setStatus }) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

export default Filter;