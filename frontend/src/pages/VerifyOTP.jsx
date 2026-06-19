import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOTP = () => {
    const storedOTP = localStorage.getItem("otp");

    if (otp === storedOTP) {
      alert("Registration Successful ✅");
      navigate("/login");
    } else {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <h2 style={styles.title}>🔐 Verify OTP</h2>

        <p style={styles.subtitle}>
          Enter the OTP sent during registration
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={styles.input}
        />

        <button onClick={verifyOTP} style={styles.button}>
          Verify OTP
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
    background: "#f4f6f9",
    fontFamily: "Segoe UI"
  },

  card: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    textAlign: "center"
  },

  title: {
    marginBottom: "10px",
    color: "#1e3a8a"
  },

  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "20px"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none",
    textAlign: "center",
    letterSpacing: "3px",
    fontSize: "16px"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default VerifyOTP;