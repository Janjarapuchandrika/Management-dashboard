import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        minHeight: "100vh",
        width: "250px",
      }}
    >
      <h3 className="text-center mb-4">
        Dashboard Pro
      </h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link
            to="/"
            className="nav-link text-white"
          >
            🏠 Home
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/dashboard"
            className="nav-link text-white"
          >
            📊 Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/add-record"
            className="nav-link text-white"
          >
            ➕ Add Record
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;