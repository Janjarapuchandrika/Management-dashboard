import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const otp = Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem("registerUser", JSON.stringify(user));
    localStorage.setItem("otp", otp);

    alert(`Demo OTP: ${otp}`);

    navigate("/verify-otp");
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <h2 style={styles.title}>📝 Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
            style={styles.input}
            required
          />

          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Register
          </button>

        </form>

        <p style={styles.text}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

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
    background: "#f4f6f9",
    fontFamily: "Segoe UI"
  },

  card: {
    width: "100%",
    maxWidth: "450px",
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
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
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  text: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px"
  }
};

export default Register;