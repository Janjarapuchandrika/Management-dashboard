import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("registerUser");
    navigate("/login");
    window.location.reload();
  };

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        {/* BRAND */}
        <Link className="navbar-brand" to="/">
          Dashboard Pro
        </Link>

        {/* RIGHT SIDE BUTTONS */}
        <div className="ms-auto d-flex gap-2">

          {/* SETTINGS BUTTON */}
          <button
            className="btn btn-warning"
            onClick={() => navigate("/settings")}
          >
            ⚙ Settings
          </button>

          {/* LOGIN / LOGOUT */}
          {!isLoggedIn ? (
            <button
              className="btn btn-success"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={logout}
            >
              Logout
            </button>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;