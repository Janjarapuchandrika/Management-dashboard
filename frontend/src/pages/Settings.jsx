import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [theme, setTheme] = useState("light");

  // Load saved data
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("registerUser"));
    if (savedUser) {
      setUser(savedUser);
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Save profile changes
  const saveProfile = () => {
    localStorage.setItem("registerUser", JSON.stringify(user));
    alert("Profile updated successfully ✅");
  };

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h3 className="mb-4">⚙ Settings</h3>

        {/* PROFILE SECTION */}
        <h5>Profile</h5>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <button
          className="btn btn-primary mb-4"
          onClick={saveProfile}
        >
          Save Profile
        </button>

        <hr />

        {/* THEME SECTION */}
        <h5>Appearance</h5>

        <button
          className={`btn ${
            theme === "dark" ? "btn-light" : "btn-dark"
          } mt-2`}
          onClick={toggleTheme}
        >
          {theme === "dark"
            ? "Switch to Light Mode ☀️"
            : "Switch to Dark Mode 🌙"}
        </button>

        <hr />

        {/* BACK BUTTON */}
        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate("/")}
        >
          ← Back to Dashboard
        </button>

      </div>
    </div>
  );
};

export default Settings;