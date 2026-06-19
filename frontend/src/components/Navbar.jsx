import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("registerUser");
    navigate("/login");
  };

  return (
    <div style={styles.navbar}>

      {/* LEFT - BRAND */}
      <div style={styles.brand} onClick={() => navigate("/")}>
        🎓 College ERP
      </div>

      {/* RIGHT MENU */}
      <div style={styles.menu}>

        <button
          style={styles.btn}
          onClick={() => navigate("/settings")}
        >
          ⚙ Settings
        </button>

        {!isLoggedIn ? (
          <button
            style={{ ...styles.btn, background: "#16a34a" }}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <button
            style={{ ...styles.btn, background: "#dc2626" }}
            onClick={logout}
          >
            Logout
          </button>
        )}

      </div>

    </div>
  );
};

const styles = {
  navbar: {
    height: "60px",
    background: "#1e3a8a",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    color: "white"
  },

  brand: {
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  menu: {
    display: "flex",
    gap: "10px"
  },

  btn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#f59e0b",
    color: "white",
    fontWeight: "500"
  }
};

export default Navbar;