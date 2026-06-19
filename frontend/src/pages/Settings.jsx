import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "" });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("registerUser"));
    if (savedUser) setUser(savedUser);

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const saveProfile = () => {
    localStorage.setItem("registerUser", JSON.stringify(user));
    alert("Profile updated ✅");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.body.style.background =
      newTheme === "dark" ? "#111" : "#f5f6fa";

    document.body.style.color =
      newTheme === "dark" ? "#fff" : "#000";
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <h2 style={styles.title}>⚙ Settings</h2>

        {/* PROFILE */}
        <h4>Profile</h4>

        <input
          style={styles.input}
          placeholder="Name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <input
          style={styles.input}
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <button style={styles.button} onClick={saveProfile}>
          Save Profile
        </button>

        <hr />

        {/* THEME */}
        <h4>Appearance</h4>

        <button style={styles.themeBtn} onClick={toggleTheme}>
          {theme === "dark"
            ? "Switch to Light ☀️"
            : "Switch to Dark 🌙"}
        </button>

        <hr />

        {/* BACK */}
        <button
          style={styles.backBtn}
          onClick={() => navigate("/dashboard")}
        >
          ← Back
        </button>

      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f6fa",
    fontFamily: "Arial",
    padding: "20px"
  },

  card: {
    width: "100%",
    maxWidth: "450px",
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  title: {
    marginBottom: "20px",
    textAlign: "center"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    outline: "none"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px"
  },

  themeBtn: {
    width: "100%",
    padding: "10px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  backBtn: {
    width: "100%",
    padding: "10px",
    background: "#e5e7eb",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Settings;