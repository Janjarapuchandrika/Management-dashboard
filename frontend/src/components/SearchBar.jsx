const SearchBar = ({ search, setSearch }) => {
  return (
    <div style={styles.wrapper}>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

    </div>
  );
};

const styles = {
  wrapper: {
    marginBottom: "15px"
  },

  input: {
    width: "100%",
    maxWidth: "300px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "14px"
  }
};

export default SearchBar;