const Filter = ({ status, setStatus }) => {
  return (
    <div style={styles.wrapper}>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={styles.select}
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

    </div>
  );
};

const styles = {
  wrapper: {
    marginBottom: "15px"
  },

  select: {
    width: "200px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none",
    background: "#fff",
    cursor: "pointer",
    fontSize: "14px"
  }
};

export default Filter;