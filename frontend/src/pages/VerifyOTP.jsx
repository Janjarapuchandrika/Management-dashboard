import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOTP = () => {
    const storedOTP =
      localStorage.getItem("otp");

    if (otp === storedOTP) {
      alert("Registration Successful");
      navigate("/login");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body">
          <h2 className="text-center mb-4">
            Verify OTP
          </h2>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
          />

          <button
            className="btn btn-primary w-100"
            onClick={verifyOTP}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;