import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import AddRecord from "./pages/AddRecord";

import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* OTP Verification */}
        <Route path="/verify-otp" element={<VerifyOTP />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Add Record */}
        <Route path="/add-record" element={<AddRecord />} />

        {/* Settings (FIXED HERE) */}
        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;