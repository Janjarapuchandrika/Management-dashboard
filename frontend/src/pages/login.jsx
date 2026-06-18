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

    const registeredUser = JSON.parse(
      localStorage.getItem("registerUser")
    );

    if (!registeredUser) {
      alert("Please Register First");
      navigate("/register");
      return;
    }

    if (
      user.email === registeredUser.email &&
      user.password === registeredUser.password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/dashboard");

      window.location.reload();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow mx-auto border-0"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body p-4">

          <h2 className="text-center mb-4">
            🔐 Login
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={user.password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

          </form>

          <hr />

          <p className="text-center">
            Don't have an account?
            <Link
              to="/register"
              className="ms-1"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;