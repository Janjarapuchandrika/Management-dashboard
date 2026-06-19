import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>🎓 College ERP System</h2>
        <button style={styles.loginBtn} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      {/* HERO SECTION */}
      <div style={styles.hero}>

        <h1 style={styles.title}>
          Smart College Management System
        </h1>

        <p style={styles.subtitle}>
          Manage students, records, analytics, and reports in one unified ERP system.
        </p>

        <button style={styles.button} onClick={() => navigate("/login")}>
          Get Started
        </button>

      </div>

      {/* FEATURES */}
      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>🎓 Student Management</h3>
          <p>Add, update and track student records easily.</p>
        </div>

        <div style={styles.card}>
          <h3>📊 Analytics</h3>
          <p>View performance reports and insights.</p>
        </div>

        <div style={styles.card}>
          <h3>🔍 Search System</h3>
          <p>Quickly filter and find records.</p>
        </div>

      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © 2026 College ERP System | All Rights Reserved
      </div>

    </div>
  );
};

const styles = {
  page: {
    fontFamily: "Segoe UI",
    background: "#f4f6f9",
    minHeight: "100vh",
    padding: "20px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    padding: "10px 0",
    borderBottom: "1px solid #ddd"
  },

  loginBtn: {
    padding: "8px 15px",
    background: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  hero: {
    textAlign: "center",
    marginBottom: "40px"
  },

  title: {
    fontSize: "34px",
    color: "#1e3a8a",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "16px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto 20px"
  },

  button: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },

  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#777"
  }
};

export default Home;