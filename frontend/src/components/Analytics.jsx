const Analytics = () => {
  return (
    <div style={styles.grid}>

      {/* TOTAL */}
      <div style={{ ...styles.card, background: "#2563eb" }}>
        <h4>Total Records</h4>
        <h2>50</h2>
      </div>

      {/* ACTIVE */}
      <div style={{ ...styles.card, background: "#16a34a" }}>
        <h4>Active Records</h4>
        <h2>30</h2>
      </div>

      {/* PENDING */}
      <div style={{ ...styles.card, background: "#f59e0b", color: "#111" }}>
        <h4>Pending Records</h4>
        <h2>20</h2>
      </div>

    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginTop: "20px"
  },

  card: {
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  }
};

export default Analytics;