import { useState } from "react";

const EditRecord = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Record Updated Successfully ✅");
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <h2 style={styles.title}>✏ Edit Record</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Category</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>

          <button type="submit" style={styles.button}>
            Update Record
          </button>

        </form>

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
    maxWidth: "500px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
  },

  title: {
    marginBottom: "15px",
    color: "#1e3a8a"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default EditRecord;