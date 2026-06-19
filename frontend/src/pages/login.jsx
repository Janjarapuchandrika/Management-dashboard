import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registerUser"));

    if (!registeredUser) {
      alert("Please register first");
      navigate("/register");
      return;
    }

    if (
      user.email === registeredUser.email &&
      user.password === registeredUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful ✅");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <h2 style={styles.title}>🔐 Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>

        <p style={styles.text}>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
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
    maxWidth: "400px",
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
    background: "#2563eb",
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

export default Login;