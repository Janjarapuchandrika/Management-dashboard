import RecordForm from "../components/RecordForm";

const AddRecord = () => {
  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <h2 style={styles.title}>➕ Add New Record</h2>

        <p style={styles.subtitle}>
          Create a new student or record in the ERP system
        </p>

        <RecordForm />

      </div>

    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px",
    background: "#f4f6f9",
    fontFamily: "Arial"
  },

  card: {
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
  },

  title: {
    marginBottom: "5px",
    color: "#1e3a8a"
  },

  subtitle: {
    marginBottom: "20px",
    color: "#6b7280",
    fontSize: "14px"
  }
};

export default AddRecord;