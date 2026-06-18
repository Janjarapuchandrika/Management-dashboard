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

    const otp = Math.floor(
      100000 + Math.random() * 900000
    );

    localStorage.setItem(
      "registerUser",
      JSON.stringify(user)
    );

    localStorage.setItem("otp", otp);

    alert(`Demo OTP: ${otp}`);

    navigate("/verify-otp");
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="card-body">
          <h2 className="text-center mb-4">
            Register
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Name"
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
              required
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              required
            />

            <button className="btn btn-success w-100">
              Register
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;