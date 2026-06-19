import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import AddRecord from "./pages/AddRecord";
import Dashboard from "./components/Dashboard";

// Layout wrapper
const Layout = ({ children }) => {
  return (
    <div style={styles.app}>
      <Navbar />

      <div style={styles.container}>
        {children}
      </div>
    </div>
  );
};

function AppRoutes() {
  const location = useLocation();

  // Hide navbar on login/register pages (ERP style)
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/verify-otp";

  return (
    <>
      <div style={styles.app}>
        {!hideNavbar && <Navbar />}

        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-record" element={<AddRecord />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

const styles = {
  app: {
    fontFamily: "Segoe UI",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh"
  },

  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto"
  }
};

export default App;